import { createApp } from 'vue';
import { store } from '@/_store/store';
import { router } from '@/_router/routes';
import App from '@/App.vue'

// Import FSA Style here to allow for font, image, and CSS assets
import { fsaModal } from 'fsa-style';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(fsaModal);

app.mount('#app');
