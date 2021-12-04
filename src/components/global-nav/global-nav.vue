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
                        <router-link :to='gp.path' class="fsa-nav-global__sub-menu-link">{{ gp.label }}</router-link>
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
                      <router-link :to='child.path' class="fsa-nav-global__sub-menu-link">{{child.label}}</router-link>
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
                      <router-link :to='child.path' class="fsa-nav-global__sub-menu-link">{{child.label}}</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div v-else="item.hasChild=='false'">
              <router-link :to='item.path' class="fsa-nav-global__link">
                <span class="fsa-nav-global__text">{{item.label}}</span>
              </router-link> 
            </div>
          </li>
        </ul>
        <div v-if="NAV_DATA.side" class="fsa-nav-global__aside">
          <div class="fsa-level">
            <span v-for="sideItem in NAV_DATA.side" :key="sideItem.uid">
              <router-link :to="sideItem.path">
                <span class="fsa-level fsa-level--inline fsa-level--gutter-xs">
                  <svg v-if="sideItem.icon"
                    :class="sideItem.icon.class" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> 
                    <path :d="sideItem.icon.path"></path>
                  </svg>
                  <span>{{sideItem.label}}</span>
                </span>
              </router-link>
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
import { useMenuSystem } from '@/composables/useMenuSystem';

export default {

  props: {
    NAV_DATA: Object,
    EXTRA_CLASSES: String,
    USE_SEARCH: String,
    USE_SCOPED_SEARCH: String
  },
  
  setup(props, { emit }){    
    const { 
      openMenu,
      closeMenu,
      loopItems,
      listenForKeys,
      documentClickHandler
    } = useMenuSystem();

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
      console.log('p',p)
      emit("emitSearch", {type: 'default', phrase: p})
    }

    const doScopedSearch = (event) => {
      let p = document.getElementById('searchPhrase').value
      let cat = document.getElementById('scopedCategory').selected
      emit("emitSearch", {type: 'scoped', scope: cat, phrase: p})
    }

    onMounted(()=>{
      console.log('global-nav onMounted', props.NAV_DATA);
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