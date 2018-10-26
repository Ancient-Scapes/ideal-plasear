<template>
  <!-- TODO 数値加算で100ごと増えるやつ -->
  <!-- 距離(半径) -->
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
    <vs-select class="select-radius" vs-label="距離(半径)" v-model="radius">
      <vs-select-item
        :key="item"
        :vs-value="item"
        :vs-text="item"
        v-for="item in radiusItems"/>
    </vs-select>
  </vs-col>
</template>

<script>
export default {
  name: 'radius',
  data() {
    return {
      radius: 1000,
      radiusItems: {
        0: 1000,
        1: 2000,
      }
    };
  },
};
</script>


<style lang="scss">

</style>
