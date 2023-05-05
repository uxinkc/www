<template>
  <div>
    <!-- /.content-wrapper -->
    <footer class="bg-dark text-inverse">
      <div class="container py-13 py-md-15">
        <footer-widgets USE_LIGHT_TEXT="true"></footer-widgets>
      </div>
      <!-- /.container -->
    </footer>
    <page-progress></page-progress>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
//import { v4 as uuidv4 } from "uuid";

const footerWidgets = defineAsyncComponent(() => import("@/_components/footer/footer-widgets.vue"));
const pageProgress = defineAsyncComponent(() => import("@/_components/footer/page-progress.vue"));

export default {
  components: {
    footerWidgets,
    pageProgress
  },
  setup(props) {

    return {

    }
  }
}
</script>