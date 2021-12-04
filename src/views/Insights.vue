<template>
  <div>
    <header>
      <globalNav :NAV_DATA="navigationData"
        EXTRA_CLASSES="fsa-nav-global__list-item--multi-column"
        USE_SEARCH="true"
        @emitSearch="submitSearch"
        ></globalNav>
    </header>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h1>Dynamic Router Demo</h1>

          <div class="fsa-m-t--sm">
              <p class="fsa-m-t--7">What page are we on?  <span class="fsa-text-size--5">{{ pageName }}</span></p>
          </div>


        </div>
      </div>

    </main>

  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from "vuex";

import globalNav from "@/components/global-nav/global-nav.vue";

export default {
  components: {
    globalNav
  },

  setup(props){
    const store = useStore();
    const route = useRoute();

    const pageName = route.params.id;
    const searchResults = ref('');

    const navigationData = computed(() => store.getters["topnav/getNavigation"]);
    
    const submitSearch = ( obj ) => {
      searchResults.value = obj.phrase;
    };

    onMounted(() => {
      console.log("Insights onMounted");
      store.dispatch("topnav/setNavigation");
    });

    return {
      pageName,
      navigationData,
      submitSearch,
      searchResults
    };
  }
}
</script>