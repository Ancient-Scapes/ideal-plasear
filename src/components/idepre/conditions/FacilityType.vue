<template>
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
</template>

<script>
export default {
  name: 'facilityType',
  data() {
    return {
      type: 'レストラン',
      typeItems: {
        restaurant: 'レストラン',
        school: '学校',
      },
    };
  },
};
</script>


<style lang="scss">
.select-type {

}
</style>
