<template>
  <!-- 検索条件の入力 -->
  <div class="conditions-area">
    <vs-row
    vs-align="center"
    vs-type="flex" vs-justify="space-around" vs-w="12">
      <Location ref="location"/>
      <Radius ref="radius"/>
    </vs-row>

    <vs-row
    vs-align="center"
    vs-type="flex" vs-justify="space-around" vs-w="12">
      <FacilityType ref="facilityType"/>
      <FacilityName ref="facilityName"/>
    </vs-row>
  </div>
</template>

<script>
import Location from '@/components/idepre/conditions/Location.vue';
import Radius from '@/components/idepre/conditions/Radius.vue';
import FacilityType from '@/components/idepre/conditions/FacilityType.vue';
import FacilityName from '@/components/idepre/conditions/FacilityName.vue';

export default {
  name: 'conditions',
  components: {
    Location, Radius, FacilityType, FacilityName,
  },
  data() {
    return {
      test: 'a',
    };
  },
};
</script>


<style lang="scss">

</style>
