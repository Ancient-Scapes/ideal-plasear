<template>
  <div class="idepre-area">
    <!-- 検索条件の入力 -->
    <Conditions
      ref="conditions"
      :facilityItems="facilityItems"/>

    <vs-button
      class="btn-search"
      vs-type="filled"
      vs-line-origin="left"
      @click="searchFacility">
      検索
    </vs-button>

    <vs-button
      class="btn-facility-add"
      vs-type="filled"
      vs-line-origin="left"
      @click="addFacility">
      施設追加
    </vs-button>
    
    <Result
      ref="result"
      :resultItems="nearPair"/>
  </div>
</template>

<script>
import Conditions from '@/components/idepre/Conditions.vue';
import Result from '@/components/idepre/Result.vue';
import * as S from 'spherical-geometry-js';

export default {
  name: 'idepre',
  components: {
    Conditions, Result,
  },
  data() {
    return {
      API_URL: {
        GEOCODE: process.env.VUE_APP_API_HOST + process.env.VUE_APP_API_GEOCODE,
        NEARBY_SEARCH: process.env.VUE_APP_API_HOST + process.env.VUE_APP_API_NEARBY_SEARCH,
      },
      facilityItems: 2,
      nearFacilities: [],
      nearPair: [],
      errorMessage: '',
    };
  },
  methods: {
    async searchFacility() {
      try {
        this.nearFacilities = [];
        const geocodeLocation = await this.fetchGeocode();

        // 近隣の施設を検索
        for (let i = 0; i < this.facilityItems; i++) {
          const searchResult = {
            id: i,
            name: this.$refs.conditions.$refs.facility[i].name,
            data: await this.fetchNearBySearch(geocodeLocation, i),
          };
          this.nearFacilities.push(searchResult);
        }
        this.nearPair = await this.extractionNearPair(0, this.isNotCurrentIndex(this.nearFacilities, 0));
      } catch (e) {
        this.errorMessage = e;
      }
    },
    async fetchGeocode() {
      const query = {
        address: this.$refs.conditions.$refs.location.prefecture,
      };

      const res = await this.$axios.post(this.API_URL.GEOCODE, query);
      if (res.status !== 200) {
        console.log(res);
        throw new Error('status code not 200');
      }
      return res.data[0].geometry.location;
    },
    async fetchNearBySearch(geocodeLocation, index) {
      const query = {
        language: 'ja',
        location: geocodeLocation,
        radius: this.$refs.conditions.$refs.radius.radius,
        type: this.$refs.conditions.$refs.facility[index].type,
        keyword: this.$refs.conditions.$refs.facility[index].name,
      };
      const res = await this.$axios.post(this.API_URL.NEARBY_SEARCH, query);
      if (res.status !== 200) {
        console.log(res);
        throw new Error('status code not 200');
      }
      return res.data;
    },
    extractionNearPair(id, arrNotCurrent, arrNearPair = []) {
      // 末尾より後に行ったら終了
      if (!this.nearFacilities[id]) {
        return arrNearPair;
      }

      // 計算の左辺に使用する店の全店舗を回す
      for (var i = 0; i < this.nearFacilities[id].data.length; i++) {
        // 計算の左辺に使用する店 ex. サブウェイ新宿店
        const origin = this.nearFacilities[id].data[i];

        // 計算の右辺に使用する店種類を回す
        for (var j = 0; j < arrNotCurrent.length; j++) {
          // 計算の右辺に使用する店種類の全店舗を回す
          for (var k = 0; k < arrNotCurrent[j].data.length; k++) {
            // 計算の右辺に使用する店 ex. すき家新宿店
            const target = arrNotCurrent[j].data[k];
            const pairName = [origin.name, target.name];
            const distance = S.computeDistanceBetween(
              this.nearFacilities[id].data[i].geometry.location,
              arrNotCurrent[j].data[k].geometry.location, 
            );
        
            const isFar = distance > 400;
            const isDuplicates = this.isDuplicatesCheck(arrNearPair, pairName);

            // 近くないペアと重複ペアは追加しない
            if(isFar || isDuplicates) continue;

            const pair = {
              name: pairName,
              geometry: [origin.geometry, target.geometry],
              centerPlace: '新宿駅', //ここは別で求める
              distance: distance,
            };

            arrNearPair.push(pair);
          }
        }
      }

      // 次のidへ行き、処理したidのもの以外の配列を引数にして再帰
      const nextNotCurrentArr = this.isNotCurrentIndex(this.nearFacilities, ++id);
      return this.extractionNearPair(id, nextNotCurrentArr, arrNearPair);
    },
    // 自分以外の配列を返す idはbindして渡す
    isNotCurrentIndex(arr, index) {
      return arr.filter(function (facility) {
        return facility.id !== index;
      });
    },
    // 重複ペアを検出
    isDuplicatesCheck(arr, currentPair) {
      return arr.some(function (pair) {
      // 比較するときだけソートで順番合わせて重複チェックする
        return pair.name.sort().join() === currentPair.sort().join();
      });
    },
    addFacility() {
      this.facilityItems += 1;
    },
  },
};
</script>


<style lang="scss">
.btn-search{
  margin:3%;
}
</style>
