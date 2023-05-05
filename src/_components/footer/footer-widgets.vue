<template>
  <div class="row gy-6 gy-lg-0">
    <div class="col-md-4 col-lg-3">
      <div class="widget">
        <img v-if="USE_LIGHT_TEXT!='true'" class="mb-4" src="/img/logo-dark.png" alt="UXinKC Logo" />
        <img v-if="USE_LIGHT_TEXT=='true'" class="mb-4" src="/img/logo-light.png" alt="UXinKC Logo" />
        <p class="">Copyright <span data-copyright>2022</span> <br /> UXinKC - Casey Hill <br />All rights reserved.</p>
        <nav :class="'nav social '+ (USE_LIGHT_TEXT=='true' ? 'social-white' : '')">
          <a @click.prevent="goto('https://twitter.com/uxinkc', '_blank')" href="https://twitter.com/uxinkc" target="_blank">
            <i class="uil uil-twitter"></i>
          </a>
          <a @click.prevent="goto('https://www.linkedin.com/in/bignamehere', '_blank')" href="https://linkedin.com/in/bignamehere" target="_blank">
            <i class="uil uil-linkedin"></i>
          </a>        
        </nav>
        <!-- /.social -->
      </div>
      <!-- /.widget -->
    </div>
    <!-- /column -->
    <div class="col-md-4 col-lg-3">
      <div class="widget">
        <h4 :class="'widget-title mb-3 ' + (USE_LIGHT_TEXT=='true' ? 'text-white' : '')">Get in Touch</h4>
        <address class="pe-xl-15 pe-xxl-17"></address>
        <a href="mailto:uxinkc@gmail.com" :class="(USE_LIGHT_TEXT!='true' ? 'link-body' : '')" >uxinkc@gmail.com</a><br /> <a href="tel:(913)908-2677">(913) 908-2677</a>
      </div>
      <!-- /.widget -->
    </div>
    <!-- /column -->
    <div class="col-md-4 col-lg-3">
      <div class="widget">
        <h4 :class="'widget-title mb-3 ' + (USE_LIGHT_TEXT=='true' ? 'text-white' : '')">Learn More</h4>
        <ul :class="'list-unstyled mb-0 ' + (USE_LIGHT_TEXT!='true' ? 'text-reset' : '')">
          <li><a @click.prevent="goto('/')" href="/">About</a></li>
          <li><a @click.prevent="goto('/insights')" href="/insights">Insights</a></li>
          <li><a @click.prevent="goto('/projects')" href="/projects">Projects</a></li>
          <li><a @click.prevent="goto('/contact')" href="/contact">Contact</a></li>
        </ul>
      </div>
      <!-- /.widget -->
    </div>
  
    <!-- /column -->
    <div class="col-md-4 col-lg-3">
      <div class="widget">
        <h4 :class="'widget-title mb-3 ' + (USE_LIGHT_TEXT=='true' ? 'text-white' : '')">Legal</h4>
        <ul :class="'list-unstyled mb-0 ' + (USE_LIGHT_TEXT!='true' ? 'text-reset' : '')">
          <li><a @click.prevent="goto('/terms')" href="/terms">Terms of Use</a></li>
        </ul>
      </div>
      <!-- /.widget -->
    </div>
    
  </div>
</template>


<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";
//import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    USE_LIGHT_TEXT: String
  },

  setup(props) {
    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const { goto } = useNavigation();

    const useLightText = computed(()=>{props.USE_LIGHT_TEXT});

    onMounted(()=>{
      
    });

    return {
      baseUrl,
      goto,
      useLightText
    };
  }
};
</script>