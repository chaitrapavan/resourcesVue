<template>
  <ul>
    <learning-resources
      v-for="res in Resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resources>
  </ul>
</template>
<script>
import LearningResources from './LearningResources.vue';
export default {
  components: {
    LearningResources
  },
  inject: ['Resources']
};
</script>
