<template>
  <div id="app">
    <Header/>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  margin: 5%;
  border: solid 1px black;
  padding: 5%;
}

.idepre-font{
  @import url('https://fonts.googleapis.com/css?family=Poiret+One');
  font-family: 'Poiret One', cursive;
}
</style>
