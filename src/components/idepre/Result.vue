<template>
  <div class="result">
    <vs-row
    vs-align="center"
    vs-type="flex"
    vs-justify="space-around"
    vs-w="12"
    v-for="eachResultItems in resultItems"
    :key="eachResultItems.id">
     <EachResult ref="eachResult" :eachResultItems="eachResultItems"/>
    </vs-row>
  </div>
</template>

<script>
import EachResult from '@/components/idepre/result/EachResult.vue';

export default {
  name: 'result',
  components: {
    EachResult,
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
