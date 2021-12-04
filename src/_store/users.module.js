
import { usersService } from '../_services/users.service';


const state = () =>({
  isLoaded: false,
  errors: [],
  users: []
});

const getters = {
  isLoaded: state => state.isLoaded,
  getErrors: state => state.errors,
  getUsers: state => state.users  
};

const actions = {

  getUsersFromApi( { commit, state, rootState }, payload ){
    commit('SET_ERRORS', []);

    usersService.getUsers( (result) => {
      if(result.errors){
        commit('SET_ERRORS', result.errors);
      } else {
        commit('SET_USERS', result.data );
      }
    });
  }  

  /*
  async getUsersFromApi( { commit, state, rootState }, payload ){
    return new Promise( (resolve) => {
      commit('SET_ERRORS', []);
      usersService.getUsers( (result) => {
          if(result.errors){
            commit('SET_ERRORS', result.errors);
          } else {
            commit('SET_USERS', result.data );
          }
          resolve();
        }
      );
    });
  } 
  */
};

const mutations = {
  SET_ERRORS(state, payload){
    state.errors = payload;
  },

  SET_USERS( state, payload ){
    state.users = payload;
    state.isLoaded = true;
  },

};

export const users = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};