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
      :resultItems="nearFacilities"/>
  </div>
</template>

<script>
import Conditions from '@/components/idepre/Conditions.vue';
import Result from '@/components/idepre/Result.vue';


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
      facilityItems: 1,
      nearFacilities: [],
      // nearFacilities: [[{name:'サブウェイ',vicinity:'東京都豊島区池袋'}, {name:'すき家', vicinity:'東京都豊島区池袋'}]],
      errorMessage: '',
    };
  },
  methods: {
    async searchFacility() {
      try {
        this.nearFacilities = [];
        const geocodeLocation = await this.fetchGeocode();

        for (let i = 0; i < this.facilityItems; i++) {
          const searchResult = {
            id: i,
            name: this.$refs.conditions.$refs.facility[i].name,
            data: await this.fetchNearBySearch(geocodeLocation, i),
          };
          this.nearFacilities.push(searchResult);
        }
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
