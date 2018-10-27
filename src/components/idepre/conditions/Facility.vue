<template>
    <vs-row
    vs-align="center"
    vs-type="flex" vs-justify="space-around" vs-w="12">
      <!-- TODO セレクトボックスでgoogleMapのtypeに指定できるもの全部 -->
      <!-- 施設種別 -->
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <vs-select class="select-type" vs-label="施設種別" v-model="type">
          <vs-select-item
            :key="item"
            :vs-value="item"
            :vs-text="item"
            v-for="item in typeItems"/>
        </vs-select>
      </vs-col>

      <!-- 施設名 -->
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
        <vs-input
        class="input-facility"
        vs-label="施設名"
        placeholder="検索したい施設名を入力"
        v-model="name"/>
      </vs-col>
    </vs-row>
</template>

<script>
export default {
  name: 'facility',
  data() {
    return {
      type: 'レストラン',
      typeItems: {
        restaurant: 'レストラン',
        school: '学校',
      },
      name: 'サブウェイ',
    };
  },
};
</script>


<style lang="scss">
.select-type {

}
</style>
