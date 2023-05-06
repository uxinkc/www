
import { navigationService } from '@/Shared/_services/navigation.services.js';

const state = () =>({
  isLoaded: false,
  errors: [],
  data: {}
});
  

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getNavigation: state => state.data
};

const actions = {

  setNavigation( { commit, state, rootState }, _payload ){
    commit('SET_ERRORS', []);

    navigationService.getNavigation( _payload, (_result) => {
      if(_result.errors){
        commit('SET_ERRORS', _result.errors);
      } else {
        commit('SET_NAV', _result.data );
      }
    });
  }

};

const mutations = {
  SET_ERRORS(state, payload){
    state.errors = payload;
  },

  SET_NAV( _state, _payload ){
    _state.data = _payload;
  },

};

export const navigation = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};