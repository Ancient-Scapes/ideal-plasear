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
    async searchFacility() {
      const geocodeLocation = await this.fetchGeocode();
      const nearFacilities = await this.fetchNearBySearch(geocodeLocation);
      console.log(nearFacilities);
    },
    async fetchGeocode() {
      const query = {
        address: this.$refs.conditions.$refs.location.prefecture,
      };

      const res = await this.$axios.post(this.API_URL.GEOCODE, query);
      if (res.status !== 200) {
        console.log('Error');
        return false;
      }

      return res.data.results[0].geometry.location;
    },
    async fetchNearBySearch(geocodeLocation) {
      const query = {
        location: geocodeLocation,
        radius: this.$refs.conditions.$refs.radius.radius,
        type: this.$refs.conditions.$refs.facilityType.type,
        keyword: this.$refs.conditions.$refs.facilityName.name,
      };

      const res = await this.$axios.post(this.API_URL.NEARBY_SEARCH, query);
      if (res.status !== 200) {
        console.log('Error');
        return false;
      }
      return res.data.results;
    },
  },
};
</script>


<style lang="scss">
.btn-search{
  margin:3%;
}
</style>
