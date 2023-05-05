
import { navigationService } from '@/Shared/_services/navigation.service';

const state = () =>({
  isLoaded: false,
  errors: [],
  appNav: []
});
  

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getNavigation: state => state.appNav
};

const actions = {

  setNavigation( { commit, state, rootState }, _payload ){
    commit('SET_ERRORS', []);

    navigationService.getNavigation(_payload, (_result) => {
      if(_result.errors){
        commit('SET_ERRORS', _result.errors);
      } else {
        commit('SET_NAV', _result.data );
      }
    });
  },


  setMenuOpen({ commit, state, rootState }, _payload ){
    commit('SET_MENU_OPEN', _payload);
  },

  setSelectedMenu({ commit, state, rootState }, _payload ){
    commit('SET_SELECTED_MENU', _payload);
  },

};

const mutations = {
  SET_ERRORS(_state, _payload){
    _state.errors = _payload;
  },

  SET_NAV( _state, _navigation ){
    _state.appNav = _navigation;
    _state.isLoaded = true;
  }

};

export const navigation = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};