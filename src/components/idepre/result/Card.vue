<template>
  <vs-card class="card">
    <div slot="header">
      <h3>{{ headerName }}</h3>
    </div>
    <div slot="media">
      <!-- TODO 画像取得 -->
      <img src="@/assets/stationSample.jpg">
    </div>
    <div>
      <div class="store">
        {{ viewFacilityPair }}
      </div>
      <div class="distance">
        {{ viewDistance }}
      </div>
    </div>
    <div slot="footer">
      <vs-row vs-justify="flex-end">
        <vs-button type="gradient" color="danger" icon="favorite">❤️</vs-button>
        <vs-button color="primary" icon="turned_in_not">🐥</vs-button>
        <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings">👻</vs-button>
      </vs-row>
    </div>
  </vs-card>
</template>

<script>

export default {
  name: 'card',
  props: {
    headerName: String,
    facilityPair: Array,
    distance: Number,
  },
  computed: {
    viewFacilityPair() {
      return `${this.facilityPair[0]}と${this.facilityPair[1]}が近いです`;
    },
    viewDistance() {
      return `店同士の距離は${this.distance}です`;
    },
  },
  data() {
    return {
      test: 'test',
    };
  },
};
</script>


<style lang="scss">
.card {
  margin: 20px;
}
</style>
