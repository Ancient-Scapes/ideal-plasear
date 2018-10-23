<template>
  <div class="hello">
    <vs-button vs-type="line" vs-line-origin="left" @click="fetchNearPlace">店を取得します</vs-button>


    <!-- 検索条件の入力 -->
    <div class="input-conditions">
      <vs-input class="input-store" vs-label="店名" placeholder="検索したい店名を入力" />
    </div>

    <div class="">
      {{ key }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'idepre',
  // components: {
  //   HelloWorld,
  // },
  data() {
    return {
      activeItem: 1,
      msg: 'ルーティング試すページ',
      key: 'key',
    };
  },
  methods: {
    fetchNearPlace() {
      this.googleMapsClient.geocode({
        address: '埼玉県所沢市',
      })
        .asPromise()
        .then((response) => {
          console.log(response.json.results);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>


<style lang="scss">
.input-store {
  margin: auto;
}
</style>
