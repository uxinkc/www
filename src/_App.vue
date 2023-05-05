<template>
  <router-view v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component"></component>
    </KeepAlive>
  </router-view>
</template>

<script>
import { useRoute } from 'vue-router';
import { watch } from 'vue'

export default {
  name: "app",
  setup(){
    const route = useRoute();
    watch( () => route.params, (toParams, fromParams) => {
        // react to route changes...
    });    
  }
};
</script>

<style lang="scss">
@import '@/_style/index.scss';
</style>