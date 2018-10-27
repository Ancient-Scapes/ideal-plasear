<template>
    <vs-col
      vs-type="flex"
      vs-justify="center"
      vs-align="center"
      vs-w="12">
      <vs-list>
        <vs-list-header 
          :title="eachResultItems.name"/>
        <vs-list-item 
          class="facility"
          :title="result.name"
          :subtitle="result.vicinity"
          v-for="result in eachResultItems.data"
          :key="result.id" />
      </vs-list>
    </vs-col>
    <!-- <vs-col
      vs-type="flex"
      vs-justify="center"
      vs-align="center"
      vs-w="4"
      v-for="result in eachResultItems.data"
      :key="result">
      <Card ref="card" :result="result"/>
    </vs-col> -->
</template>

<script>
import Card from '@/components/idepre/result/Card.vue';

export default {
  name: 'eachResult',
  components: {
    Card,
  },
  props: {
    eachResultItems: Object,
  },
  data() {
    return {
      test: 'test',
    };
  },
};
</script>


<style lang="scss">

.facility{
  text-align: left;
}

</style>
