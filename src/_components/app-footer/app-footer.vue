<template>
  <footer class="bg-dark text-inverse">
    <div class="container py-13 py-md-15">
      <div class="row gy-6 gy-lg-0">
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <img class="mb-4" src="/img/logo-light.png" alt="UXinKC Logo" />
            <!-- <img class="mb-4" src="/img/logo-light.png" srcset="/img/logo-light@2x.png 2x" alt="UXinKC Logo" /> -->
            <p class="">Copyright <span data-copyright>2022</span> <br /> UXinKC - Casey Hill <br />All rights reserved.</p>
            <nav class="nav social social-white">
              <a @click.prevent="goto('https://twitter.com/uxinkc','blank')" href="https://twitter.com/uxinkc" target="_blank"><i class="uil uil-twitter"></i></a>
              <a @click.prevent="goto('https://linkedin.com/in/bignamehere','_blank')" href="https://linkedin.com/in/bignamehere" target="_blank"><i class="uil uil-linkedin"></i></a>
            </nav>
            <!-- /.social -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Get in Touch</h4>
            <address class="pe-xl-15 pe-xxl-17"></address>
            <a href="mailto:uxinkc@gmail.com">uxinkc@gmail.com</a><br /> <a href="tel:(913)908-2677">(913) 908-2677</a>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Learn More</h4>
            <ul class="list-unstyled  mb-0">
              <li><a @click.prevent="goto('/')" :href="basePath + '/'">About</a></li>
              <li><a @click.prevent="goto('/insights')" :href="basePath + '/insights'">Insights</a></li>
              <li><a @click.prevent="goto('/projects')" :href="basePath + '/projects'">Projects</a></li>
              <li><a @click.prevent="goto('/contact')" :href="basePath + '/contact'">Contact</a></li>
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div class="col-md-4 col-lg-3">
          <div class="widget">
            <h4 class="widget-title text-white mb-3">Legal</h4>
            <ul class="list-unstyled  mb-0">
              <li><a @click.prevent="goto('/terms')" :href="basePath + '/terms'">Terms of Use</a></li>
            </ul>
          </div>
          <!-- /.widget -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";
import { useNavigation } from "@/_composables/useNavigation";

export default {
  setup(props) {

    const { goto } = useNavigation();
    let baseUrl = import.meta.env.BASE_URL.substring(0, import.meta.env.BASE_URL.length - 1)
    const basePath = ref( baseUrl );

    return {
      goto,
      basePath
    }
  }
}
</script>