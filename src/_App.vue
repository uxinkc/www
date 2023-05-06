<template>
  <div class="content-wrapper">
    <baseHeader :NAV_DATA="navData"></baseHeader>
    <router-view v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component"></component>
      </KeepAlive>
    </router-view>
    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { defineAsyncComponent, onMounted, watch, computed, ref } from "vue";
import { useRoute } from 'vue-router';
import { useStore } from "vuex";

const baseHeader = defineAsyncComponent(() => import("@/_partials/BaseHeader.vue"));
const baseFooter = defineAsyncComponent(() => import("@/_partials/BaseFooter.vue"));

export default {
  name: "app",
  components: {
    baseHeader,
    baseFooter
  },
  setup(){
    const route = useRoute();
    const store = useStore();

    const navData = computed(() => {
      let data = store.getters['navigation/getNavigation'];
      if(data) return data;
      else return null;
    });

    watch( () => route.params, (prevData, currData) => {
        // react to route changes...
    });

    onMounted(()=>{
      store.dispatch('navigation/setNavigation', 'public');
    })
    
    return {
      navData
    }
  }
};
</script>

<style lang="scss">
@import '@/_style/index.scss';
</style>