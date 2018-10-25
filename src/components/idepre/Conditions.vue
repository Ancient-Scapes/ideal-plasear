<template>
  <!-- 検索条件の入力 -->

  <div class="conditions-area">
    <vs-row
      vs-align="center"
      vs-type="flex" vs-justify="space-around" vs-w="12">

      <!-- 都道府県 -->
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <vs-select class="select-prefecture" vs-label="都道府県" v-model="prefecture">
          <vs-select-item
            :key="item.id"
            :vs-value="item.name"
            :vs-text="item.name"
            v-for="item in prefectures"/>
        </vs-select>
      </vs-col>

      <!-- TODO 数値加算で100ごと増えるやつ -->
      <!-- 距離(半径) -->
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <vs-select class="select-radius" vs-label="距離(半径)" v-model="prefecture">
          <vs-select-item
            :key="item.id"
            :vs-value="item.name"
            :vs-text="item.name"
            v-for="item in prefectures"/>
        </vs-select>
      </vs-col>
    </vs-row>

    <vs-row
      vs-align="center"
      vs-type="flex" vs-justify="space-around" vs-w="12">

      <!-- TODO セレクトボックスでgoogleMapのtypeに指定できるもの全部 -->
      <!-- 施設種別 -->
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <vs-select class="select-type" vs-label="施設種別" v-model="prefecture">
          <vs-select-item
            :key="item.id"
            :vs-value="item.name"
            :vs-text="item.name"
            v-for="item in prefectures"/>
        </vs-select>
      </vs-col>

      <!-- 施設名 -->
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <vs-input
        class="input-facility"
        vs-label="施設名"
        placeholder="検索したい施設名を入力"
        v-model="facility"/>
      </vs-col>
    </vs-row>
  </div>

</template>

<script>
import jpPrefecture from 'jp-prefecture';

export default {
  name: 'conditions',
  data() {
    return {
      prefecture: '東京都',
      facility: 'すき家',
      prefectures: jpPrefecture.getAll('pref', ['id', 'name']),
    };
  },
};
</script>


<style lang="scss">

</style>
