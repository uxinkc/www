<template>
  <header class="wrapper bg-soft-primary">
    <app-header :NAV_DATA="NAV_DATA"></app-header>
  </header>
</template>

<script>
import { defineAsyncComponent } from "vue";

const appHeader = defineAsyncComponent(() => import("@/_components/app-header/app-header.vue"));

export default {
  props: {
    NAV_DATA: Object
  },
  components: {
    appHeader
  },
  setup(props){

    return {

    }
  }  
}
</script>
