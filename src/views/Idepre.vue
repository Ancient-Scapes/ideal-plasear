<template>
  <div class="idepre-area">
    <!-- 検索条件の入力 -->
    <Conditions ref="conditions" />

    <vs-button
      class="btn-search"
      vs-type="filled"
      vs-line-origin="left"
      @click="searchFacility">
      検索
    </vs-button>
  </div>
</template>

<script>
import Conditions from '@/components/idepre/Conditions.vue';

export default {
  name: 'idepre',
  components: {
    Conditions,
  },
  data() {
    return {
      API_URL: {
        GEOCODE: process.env.VUE_APP_API_HOST + process.env.VUE_APP_API_GEOCODE,
        NEARBY_SEARCH: process.env.VUE_APP_API_HOST + process.env.VUE_APP_API_NEARBY_SEARCH,
      },
    };
  },
  methods: {
    searchFacility() {
      try {
        this.fetchGeocode()
          .then(response => this.fetchNearBySearch(response))
          .then(response => console.log(response.data.results));
      } catch (e) {
        console.log(e);
      }
    },
    fetchGeocode() {
      return new Promise((resolve, reject) => {
        const prefectureAddress = this.$refs.conditions.prefecture;
        this.requestGoogleMapApi(this.API_URL.GEOCODE, {
          address: prefectureAddress,
        })
          .then(data => resolve(data))
          .catch(error => reject(error));
      });
    },
    fetchNearBySearch(response) {
      return new Promise((resolve, reject) => {
        this.requestGoogleMapApi(this.API_URL.NEARBY_SEARCH, {
          location: response.data.results[0].geometry.location,
          radius: 1500,
          type: 'restaurant',
          keyword: this.$refs.conditions.facility,
        })
          .then(data => resolve(data))
          .catch(error => reject(error));
      });
    },
    requestGoogleMapApi(url, query) {
      return new Promise((resolve, reject) => {
        this.$axios.post(url, query)
          .then(data => resolve(data))
          .catch(error => reject(error.response));
      });
    },
  },
};
</script>


<style lang="scss">
.btn-search{
  margin:3%;
}
</style>
