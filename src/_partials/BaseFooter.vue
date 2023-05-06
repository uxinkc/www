<template>
  <div>
    <app-footer></app-footer>
    <app-progress></app-progress>
  </div>
</template>
<script>

import { defineAsyncComponent } from "vue";

const appFooter = defineAsyncComponent(() => import("@/_components/app-footer/app-footer.vue"));
const appProgress = defineAsyncComponent(() => import("@/_components/app-progress/app-progress.vue"));

export default {
  components: {
    appFooter,
    appProgress
  },
  setup(props){

    return {

    }
  }  
}
</script>
