
import { topNavService } from '../_services/topnav.service';


const state = () =>({
  isLoaded: false,
  errors: [],
  data: [],
  prevSection: '',
  currSection: '/about'
});
  

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getNavigation: state => state.data,
  getPrevSection: state => state.prevSection,
  getCurrSection: state => state.currSection
};

const actions = {

  setNavigation( { commit, state, rootState }, payload ){
    commit('SET_ERRORS', []);

    topNavService.getNavigation( (result) => {
      if(result.errors){
        commit('SET_ERRORS', result.errors);
      } else {
        commit('SET_NAV', result.data );
      }
    });
  },

  setSection( {commit }, payload ){
    commit('SET_SECTION', payload)
  }

};

const mutations = {
  SET_ERRORS(state, payload){
    state.errors = payload;
  },

  SET_NAV( state, navigation ){
    state.data = navigation;
    state.isLoaded = true;
  },

  SET_SECTION( state, payload ){
    state.prevSection = state.currSection;
    state.currSection = payload;
  }

};

export const topnav = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};