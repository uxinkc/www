
import { createStore } from 'vuex';

import { navigation } from '@/Shared/_store/navigation.module';
import { about } from  '@/About/_store/about.module';
import { insights } from '@/Insights/_store/insights.module';

export const store = createStore({
  modules: {
    navigation: navigation,
    about: about,
    insights: insights
  }
});