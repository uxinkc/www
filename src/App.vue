<template>
    <router-view></router-view>
</template>

<script>
import { useRoute } from 'vue-router'
import { watch } from 'vue'

export default {
  name: "app",
  setup(){
    
    const route = useRoute();
    watch(
      () => route.params,
      (toParams, fromParams) => {
        // react to route changes...
      }
    )
    
  }
};

</script>

