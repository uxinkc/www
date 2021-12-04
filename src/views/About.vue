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
          <div class="fsa-breadcrumb">
            <nav class="fsa-breadcrumb__nav" aria-label="Breadcrumbs">
              <ol class="fsa-breadcrumb__list">
                <li class="fsa-breadcrumb__item">
                  <a class="fsa-breadcrumb__link" href="link.html">Inspections</a>
                </li>
                <li class="fsa-breadcrumb__item" aria-current="page">
                  <a class="fsa-breadcrumb__link" href="link.html">Inspection Detail</a>
                </li>
              </ol>
            </nav>
          </div>
          <div class="fsa-level@m fsa-level--justify-between">
            <h1 class="fsa-m--none">About</h1>
            <div class="fsa-level fsa-level--justify-between fsa-level--grow-auto">
              <span>
                
              </span>
            </div>
          </div>
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
      console.log("About onMounted");
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