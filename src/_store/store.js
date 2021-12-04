
import { createStore } from 'vuex';

import { users } from './users.module.js';
import { topnav } from './topnav.module.js';

export const store = createStore({
  modules: {
    users: users,
    topnav: topnav
  }
});