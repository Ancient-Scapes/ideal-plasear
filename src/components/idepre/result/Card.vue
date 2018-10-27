<template>
  <vs-card class="cardx">
    <div slot="header">
      <h3>
        {{ result.name }}
      </h3>
    </div>
    <div slot="media">
      <!-- TODO 画像取得 -->
      <img src="@/assets/logo.png">
    </div>
    <div>
      <span>{{ result.vicinity }}</span>
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
    result: Object,
  },
  data() {
    return {
      test: 'test',
    };
  },
};
</script>


<style lang="scss">

</style>
