<template>
    <!-- 施設名 -->
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
      <vs-input
      class="input-facility"
      vs-label="施設名"
      placeholder="検索したい施設名を入力"
      v-model="name"/>
    </vs-col>
</template>

<script>
export default {
  name: 'facilityName',
  data() {
    return {
      name: 'サブウェイ',
    };
  },
};
</script>


<style lang="scss">

</style>
