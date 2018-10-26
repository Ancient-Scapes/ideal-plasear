<template>
  <!-- 都道府県 -->
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
    <vs-select class="select-prefecture" vs-label="都道府県" v-model="prefecture">
      <vs-select-item
        :key="item.id"
        :vs-value="item.name"
        :vs-text="item.name"
        v-for="item in prefectureItems"/>
    </vs-select>
  </vs-col>
</template>

<script>
import jpPrefecture from 'jp-prefecture';

export default {
  name: 'location',
  data() {
    return {
      prefecture: '東京都',
      prefectureItems: jpPrefecture.getAll('pref', ['id', 'name']),
    };
  },
};
</script>


<style lang="scss">

</style>
