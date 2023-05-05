<template>
  <header class="wrapper bg-soft-primary">

    <nav :class="'navbar navbar-expand-lg '+ CLASS_LIST">
      <div class="container flex-lg-row flex-nowrap align-items-center">

        <div class="navbar-brand w-100">
          <a @click.prevent="goto('/')" href="/">
            <img src="/img/logo.png" alt="UXinKC Logo" />
          </a>
        </div>
        <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
          <div class="offcanvas-header d-lg-none">
            <h3 class="text-white fs-30 mb-0">
              <img src="/img/logo-light.png" alt="" />
            </h3>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">

            <ul class="navbar-nav">
              <div class="w-100 order-1 order-lg-0 d-lg-flex offcanvas-body">
                <ul class="navbar-nav ms-lg-auto">

                  <li v-for="item in NAV_DATA.main" :key="item.uid" class="nav-item">
                    <a @click.prevent="navigateTo(item.path)" :href="basePath + item.path" class="nav-link">{{ item.label }}</a>
                  </li>
                
                </ul>
              </div>
            </ul>

            <div class="offcanvas-footer d-lg-none">
              <div>
                <a @click.prevent="goto('mailto:uxinkc@gmail.com')" href="mailto:uxinkc@gmail.com" class="link-inverse">uxinkc@gmail.com</a>
                <br />
                <a @click.prevent="goto('tel:(913)908-2677')" href="tel:(913)908-2677" class="link-inverse">(913) 908-2677</a>
                <br />
                <p class="">Copyright <span data-copyright>2022</span> <br /> UXinKC - Casey Hill <br />All rights reserved.</p>
                <nav class="nav social social-white mt-4">
                  <a @click.prevent="goto('https://twitter.com/uxinkc')" href="https://twitter.com/uxinkc" target="_blank"><i class="uil uil-twitter"></i></a>
                  <a @click.prevent="goto('https://linkedin.com/in/bignamehere')" href="https://linkedin.com/in/bignamehere" target="_blank"><i class="uil uil-linkedin"></i></a> 
                </nav>
                <!-- /.social -->
              </div>
            </div>
            <!-- /.offcanvas-footer -->
          </div>
          <!-- /.offcanvas-body -->
        </div>
        <div class="navbar-other d-flex ms-auto ms-lg-4">
          <ul class="navbar-nav flex-row align-items-center ms-auto">
            <li v-for="item in NAV_DATA.side" :key="item.uid" class="nav-item d-none d-md-block">
              <a @click.prevent="navigateTo(item.path)" :href="basePath + item.path" class="btn btn-sm btn-primary rounded-pill">{{ item.label }}</a>
            </li>
            <li class="nav-item d-lg-none">
              <button class="hamburger offcanvas-nav-btn"><span></span></button>
            </li>
          </ul>
          <!-- /.navbar-nav -->
        </div>
        <!-- /.navbar-other -->
      </div>
      <!-- /.container -->
    </nav>
    <!-- /.navbar -->
  </header>
</template>

<script>
import { ref } from "vue";
import { useNavigation } from "@/_composables/useNavigation";
//import { v4 as uuidv4 } from "uuid";


export default {
  props: {
    NAV_DATA: Object,
    CLASS_LIST: String,
  },

  setup(props){

    let baseUrl = import.meta.env.BASE_URL.substring(0, import.meta.env.BASE_URL.length - 1)
    const basePath = ref( baseUrl );
    const { goto } = useNavigation();

    const navigateTo = (_path) => {
      goto(_path)
    }

    return {
      goto,
      basePath,
      navigateTo
    }
  }
}
</script>