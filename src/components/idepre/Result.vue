<template>
  <div class="result">
    <vs-row
    vs-align="center"
    vs-type="flex"
    vs-justify="space-around"
    vs-w="12">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="4"
        v-for="result in resultItems"
        :key="result">
        <Card :headerName="result.centerPlace"
              :facilityPair="result.name"
              :distance="result.distance"/>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Card from '@/components/idepre/result/Card.vue';

export default {
  name: 'result',
  components: {
    Card,
  },
  props: {
    resultItems: Array,
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
