<template>
  <!-- 検索条件の入力 -->
  <div class="conditions-area">
    <vs-row
    vs-align="center"
    vs-type="flex" vs-justify="space-around" vs-w="12">
      <Location ref="location"/>
      <Radius ref="radius"/>
    </vs-row>

    <Facility
      v-for="facility in facilityItems"
      :key="facility" ref="facility"
    />
  </div>
</template>

<script>
import Location from '@/components/idepre/conditions/Location.vue';
import Radius from '@/components/idepre/conditions/Radius.vue';
import Facility from '@/components/idepre/conditions/Facility.vue';

export default {
  name: 'conditions',
  props: {
    facilityItems: Number,
  },
  components: {
    Location, Radius, Facility,
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
