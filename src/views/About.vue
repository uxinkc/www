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
          <h1>About</h1>
          <p>It was the best of times. It was the worst of times.</p>

        </div>
      </div>
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <h2>{{headerText}}</h2>
          <span class="fsa-m-t--l">{{searchResults}}</span>
        </div>
      </div>
      <div class="fsa-section">
        <div class="fsa-section__bd">

          site content here

        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";

import globalNav from "@/components/global-nav/global-nav.vue";

export default {
  components: {
    globalNav
  },

  setup(props) {
    const store = useStore();

    const navigationData = computed(() => store.getters["topnav/getNavigation"]);
     
    const headerText = ref('Header Default Text');
    const searchResults = ref('');

    const submitSearch = ( obj ) => {
      headerText.value = 'Search Results: '
      searchResults.value = obj.phrase;
    };

    onMounted(() => {
      store.dispatch("topnav/setNavigation");
    });

    return {
      headerText,
      navigationData,
      submitSearch,
      searchResults
    };
  }
};
</script>