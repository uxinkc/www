<template>
  <nav>
    <div class="fsa-nav-global">
      <div class="fsa-nav-global__bd">
        <ul class="fsa-nav-global__list" aria-label="Primary Navigation" id="primary-navigation">
          <li v-for="item in NAV_DATA.main" :key="item.uid" :class="'fsa-nav-global__list-item '+ item.columnClass">
            <div v-if="item.hasChild=='true' && item.columnClass==EXTRA_CLASSES && item.hasHeaders=='true'">
              <button :id="item.uid+'-BTN'" @click="toggleMenu" class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" :aria-controls="item.uid">
                <span class="fsa-nav-global__text" :id="item.uid+'-SUB'">{{item.label}}</span>
              </button>
              <div class="fsa-nav-global__sub-menu" :id="item.uid" aria-hidden="true">
                <div class="fsa-nav-global__sub-menu-bd" :aria-labelledby="item.uid+'-SUB'">
                  <div v-for="child in item.children" :key="child.id" class="fsa-nav-global__sub-menu-group">
                    <h3 class="fsa-nav-global__sub-menu-title" :id="child.uid">{{ child.header }}</h3>
                    <ul class="fsa-nav-global__sub-menu-list" :aria-labelledby="child.uid">
                      <li v-for="gp in child.group" :key="gp.id" class="fsa-nav-global__sub-menu-item">
                        <a :href="gp.path"
                          @click.prevent="goto(gp.path)"
                          :class="isActiveSection(gp.path)">
                          {{ gp.label }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="item.hasChild=='true' && item.columnClass==EXTRA_CLASSES && item.hasHeaders=='false'">
              <button :id="item.uid+'-BTN'" @click="toggleMenu" class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" :aria-controls="item.uid">
                <span class="fsa-nav-global__text" :id="item.uid+'-SUB'">{{item.label}}</span>
              </button>
              <div class="fsa-nav-global__sub-menu" :id="item.uid" aria-hidden="true">
                <div class="fsa-nav-global__sub-menu-bd">
                  <ul class="fsa-nav-global__sub-menu-list" :aria-labelledby="item.uid+'-SUB'">
                    <li v-for="child in item.children" :key="child.id" class="fsa-nav-global__sub-menu-item">
                      <a :href="child.path"
                        @click.prevent="goto(child.path)"
                        :class="'fsa-nav-global__sub-menu-link' + child.path==currentSection ? ' fsa-nav-global__link--active' : ''">
                        {{child.label}}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-else-if="item.hasChild=='true' && item.multiColumn=='false'">
              <button :id="item.uid+'-BTN'" @click="toggleMenu" class="fsa-nav-global__link fsa-nav-global__link--has-sub-menu" type="button" aria-expanded="false" :aria-controls="item.uid">
                <span class="fsa-nav-global__text" :id="item.uid+'-SUB'">{{item.label}}</span>
              </button>
              <div class="fsa-nav-global__sub-menu" :id="item.uid" aria-hidden="true">
                <div class="fsa-nav-global__sub-menu-bd">
                  <ul class="fsa-nav-global__sub-menu-list" :aria-labelledby="item.uid+'-SUB'">
                    <li v-for="child in item.children" :key="child.id" class="fsa-nav-global__sub-menu-item">
                      <a :href="child.path"
                        @click.prevent="goto(child.path)"
                        :class="'fsa-nav-global__sub-menu-link' + child.path==currentSection ? ' fsa-nav-global__link--active' : ''">
                        {{child.label}}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-else="item.hasChild=='false'">
              <a :href="item.path"
                @click.prevent="goto(item.path)"
                :class="isActiveSection(item.path)">
                <span class="fsa-nav-global__text">{{item.label}}</span>
              </a> 
            </div>
          </li>
        </ul>
        <div v-if="NAV_DATA.side" class="fsa-nav-global__aside">
          <div class="fsa-level">
            <span v-for="sideItem in NAV_DATA.side" :key="sideItem.uid">
              <a :href="sideItem.path" @click.prevent="goto(sideItem.path)">
                <span class="fsa-level fsa-level--inline fsa-level--gutter-xs">
                  <svg v-if="sideItem.icon"
                    :class="sideItem.icon.class" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
                    <path :d="sideItem.icon.path"></path>
                  </svg>
                  <span>{{sideItem.label}}</span>
                </span>
              </a>
            </span>
          </div>
        </div>
        <div v-if="USE_SEARCH == 'true'" class="fsa-nav-global__search">
          <div class="fsa-search fsa-search--small" role="search">
            <div class="fsa-search__bd">
              <div class="fsa-search__entry fsa-search__entry--grow">
                <label class="fsa-search__label fsa-search__label--sr-only" for="searchPhrase">Search [app-name]</label>
                <input placeholder="Search" class="fsa-input fsa-input--small fsa-search__input" id="searchPhrase" type="search" name="searchPhrase">
              </div>
              <div class="fsa-search__submit">
                <button @click="doSearch" class="fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon">
                  <span class="fsa-search__text">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="USE_SCOPED_SEARCH == 'true'" class="fsa-nav-global__search">
          <div class="fsa-search fsa-search--small" role="search">
            <div class="fsa-search__bd">
              <div class="fsa-search__entry fsa-search__entry--grow">
                <label class="fsa-search__label fsa-search__label--sr-only" for="scopedSearchPhrase">Search [app-name]</label>
                <input placeholder="Search" class="fsa-input fsa-input--small fsa-search__input" id="scopedSearchPhrase" type="search" name="scopedSearchPhrase">
              </div>
              <div class="fsa-search__entry">
                <label class="fsa-search__label fsa-search__label--sr-only" for="scopedCategory">Search Category</label>
                <select class="fsa-select fsa-select--small fsa-search__select" name="scopedCategory" id="scopedCategory">
                  <option v-for="cat in SCOPED_SEARCH_CATEGORIES" :key="cat.label" :value="cat.val" :selected="cat.selected">{{ cat.label }}</option>
                </select>
              </div>
              <div class="fsa-search__submit">
                <button @click="doScopedSearch" class="fsa-btn fsa-btn--small fsa-search__btn fsa-search__btn--icon">
                  <span class="fsa-search__text">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, reactive, computed, onMounted, watch, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { useMenuSystem } from '@/composables/useMenuSystem';

export default {

  props: {
    NAV_DATA: Object,
    EXTRA_CLASSES: String,
    USE_SEARCH: String,
    USE_SCOPED_SEARCH: String
  },
  
  setup(props, { emit }){    
    const store = useStore();
    const router = useRouter();
    const { 
      openMenu,
      closeMenu,
      loopItems,
      listenForKeys,
      documentClickHandler
    } = useMenuSystem();

    const isActiveSection = (path) => {
      let curr = store.getters["topnav/getCurrSection"];
      if( curr ){
        if( path.includes(curr) ) return 'fsa-nav-global__link fsa-nav-global__link--active'
        else return 'fsa-nav-global__link';
      }
    }

    const goto = ( path ) => {
      // check for external path
      if ( path.includes('http') ) {
         window.location.href = path;
      } else {
        let newPath = '/' + path.split('/')[1] ;
        store.dispatch("topnav/setSection", newPath);
        router.push(path);
      }
    }


    function toggleMenu(e) {
      let theItem = e.currentTarget;
      let theMenu = e.currentTarget.nextSibling;

      let expanded = theItem.getAttribute('aria-expanded');
      loopItems('closeAllMenus');

      if (expanded=="true") closeMenu( theItem, theMenu );
      else openMenu( theItem, theMenu );
    };

    const doSearch = (event) => {
      let p = document.getElementById('searchPhrase').value
      emit("emitSearch", {type: 'default', phrase: p})
    }

    const doScopedSearch = (event) => {
      let p = document.getElementById('searchPhrase').value
      let cat = document.getElementById('scopedCategory').selected
      emit("emitSearch", {type: 'scoped', scope: cat, phrase: p})
    }


    onMounted(()=>{
      window.addEventListener('keydown', listenForKeys);
      document.addEventListener('click', documentClickHandler);
      loopItems('addFocusListeners');
    });
    
    onBeforeUnmount(()=>{
      window.removeEventListener('keydown', listenForKeys);
      document.removeEventListener('click', documentClickHandler);
      loopItems('removeFocusListeners');
    });    
    
    return {
      goto,
      isActiveSection,
      openMenu,
      closeMenu,
      loopItems,
      listenForKeys,
      toggleMenu,
      doSearch,
      doScopedSearch
    }
  }
  
}

</script>