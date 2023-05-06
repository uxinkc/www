
import { createStore } from 'vuex';

import { navigation } from '@/Shared/_store/navigation.module';

export const store = createStore({
  modules: {
    navigation: navigation,
  }
});