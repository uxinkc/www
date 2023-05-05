<template>
  <div class="content-wrapper">

    <app-header
      CLASS_LIST="classic transparent position-absolute navbar-light"
      :NAV_DATA="navigationData">
    </app-header>
      <!-- /header -->

      <!-- section -->
      <section class="wrapper bg-soft-primary">
        <div class="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
          <div class="row">
            <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <div class="post-header">
                
                <!-- /.post-category -->
                <h1 class="display-1 mt-10 mb-3">Strategist. Architect. Leader.</h1>
                <!-- <p class="lead px-md-12 px-lg-10 px-xl-12 px-xxl-14">I'm that audacious person at a wedding who will move around buffet tables, so that everyone eats hot food.</p> -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /section -->
  
      <!-- section -->
      <section class="wrapper bg-light">
        <div class="container pb-6 pb-md-6">
          <div class="row">
            <div class="col-md-12 col-xl-10 mx-auto">
              <div class="blog single mt-n17">
                <div class="card shadow-lg">
                  <div class="card-body">
                    
                    <div class="row">
                      <div class="col-12 px-sm-6 px-lg-9 px-xl-10 pt-xl-4">
                        <h2 class="display-6 mb-4">	&#127897; Casey Hill - Kansas City</h2>
                        <div class="row gx-0">
                          <div class="col-lg-9 text-justify">
                            <p class="pb-1 pb-md-2"><strong>I solve problems</strong> by expertly connecting Business Strategy, Technical Expertise, and User Experience Design. Within the product and design industry, these areas of focus are generally at odds with each other, but I seamlessly stitch them together.</p>
  
                            <p class="pb-1 pb-md-2">My mission as a <strong>UX and Product Leader</strong> is to use strategic processes and innovative thinking to drive disruptive change. In my <strong>over 25 years</strong> of service in the digital industry, I have worked on a number of <a @click.prevent="goto('/projects')" href="/projects">fascinating projects</a> and with dozens of highly influential brands, giving me a truly unique perspective that I bring to any organization.</p>
                          
                            <p class="pb-1 pb-md-2">More recently, I started serving on the Board of Directors for the <a @click.prevent="goto('https://www.uxpakc.org/')" href="https://www.uxpakc.org/" target="_blank">KC area Chapter of the User Experience Professionals Association</a>, where I promote the interests of marginalized communities, while championing mentorship and apprenticeship opportunities. I also actively volunteer my time as a UX and Product <a @click.prevent="goto('https://adplist.org/mentors/casey-hill')" href="https://adplist.org/mentors/casey-hill">mentor on ADPList.org</a>.</p>
                            
                          </div>
                          <!--/column -->
                          <div class="col-12 col-lg-2 offset-lg-1 ms-auto">
                            <div class="row">
                              <div class="col-12 col-md-4 col-lg-12">
                                <h5 class="mb-1">Occupation</h5>
                                <p>UX Architect</p>
                              </div>
                              <div class="col-12 col-md-4 col-lg-12">
                                <h5 class="mb-1">Enneagram</h5>
                                <p><a @click.prevent="goto('/https://www.thecareerproject.org/personality-type/type-8/')" href="https://www.thecareerproject.org/personality-type/type-8/" target="_blank">Eight (wing 7)</a></p>
                              </div>
                              <div class="col-12 col-md-4 col-lg-12">
                                <a @click.prevent="goto('https://linkedin.com/in/bignamehere')" href="https://linkedin.com/in/bignamehere" target="_blank" class="more hover">View LinkedIn</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                  </div>
                  <!-- /.card-body -->
                </div>
                <!-- /.card -->
              </div>
              <!-- /.blog -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </section>
      <!-- /section -->
  
      <section class="wrapper bg-light">
        <div class="container mt-6 pt-md-6 pb-md-4">
          <div class="row">
            <div class="col-md-8 col-lg-8 offset-lg-0 col-xl-5 offset-xl-1 position-relative">
              
              <figure class="rounded">
                <img src="/img/cdh/general/hate-unicorns-quote-1.png" alt="Lego Man wearing a Unicorn Helmet" />
                <figcaption class="figure-caption text-left">Artwork: <a @click.prevent="goto('https://unsplash.com/@deadqueenines?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText')" href="https://unsplash.com/@deadqueenines?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Inês Pimentel</a></figcaption>
              </figure>
  
            </div>
            <!--/column -->
            <div class="col-lg-5 mt-6">
              <h2 class="display-4 mb-2">I'm a Unicorn</h2>
              <p class="">Our industry has become obsessed with swimlanes, and making sure only the right people work on specific areas of a product. Fortunately, I have been around long enough, and have taken advantage of roles to expand my skills and drift comfortably out of "my lane".</p>
              <p class="">This not only allows me to understand all sides of the conversation (w/o Googling), but I can deliver results from multiple areas within an organization. I pride myself on "moving tables", and yes, I am passionate and bold enough to <a @click.prevent="goto('/insights/hate-unicorns')" href="/insights/hate-unicorns">call myself a Unicorn</a>.</p>
      
            </div>
            <!--/column -->
          </div>
          <!--/.row -->
          
        </div>
        <!-- /.container -->
      </section>
      <hr class="mt-1 mt-md-10 mb-4 mb-md-0" />
      
      <section class="wrapper bg-light">
        <div class="container mt-md-0 pb-6 pb-md-8">
          
          <div class="row">
            <div class="col-12">
              <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div class="col-lg-5 offset-lg-1">
                  <h2 class="mt-2 mt-md-12 mt-lg-0 fs-15 text-uppercase text-line text-primary text-center mb-3">Hey, that's me!</h2>
                  <h3 class="display-5 mb-7">Got any questions?</h3>
                  <div class="d-flex flex-row">
                    <div>
                      <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-location-pin-alt"></i> </div>
                    </div>
                    <div>
                      <h5 class="mb-1">Location</h5>
                      <address>Kansas City</address>
                    </div>
                  </div>
                  <div class="d-flex flex-row">
                    <div>
                      <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-phone-volume"></i> </div>
                    </div>
                    <div>
                      <h5 class="mb-1">Phone</h5>
                      <p>(913) 908-2677</p>
                    </div>
                  </div>
                  <div class="d-flex flex-row">
                    <div>
                      <div class="icon text-primary fs-28 me-4 mt-n1"> <i class="uil uil-envelope"></i> </div>
                    </div>
                    <div>
                      <h5 class="mb-1">E-mail</h5>
                      <p class="mb-0"><a href="mailto:uxinkc@gmail.com" class="link-body">uxinkc@gmail.com</a></p>
                    </div>
                  </div>
                </div>
                <!--/column -->
                <div class="col-lg-5">
  
                  <figure class="rounded mt-2 mt-md-14 mb-8 mb-md-10">
                    <img class="w-auto" src="/img/cdh/general/cdh-headshot.png" alt="Casey Hill Headshot" />
                    <figcaption class="figure-caption text-left">Casey Hill (circa 2017)</figcaption>
                  </figure>
  
                </div>
                <!--/column -->
              </div>
              <!--/.row -->
            </div>
          </div>
        </div>
        <!-- /.container -->
      </section>
  
    <app-footer></app-footer>
  </div>
</template>

<script>
import { defineAsyncComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";
//import { v4 as uuidv4 } from "uuid";

const appHeader = defineAsyncComponent(() => import("@/_partials/App-Header.vue"))
const appFooter = defineAsyncComponent(() => import("@/_partials/App-Footer.vue"));

export default {
  components: {
    appHeader,
    appFooter
  },
  setup(props) {
    const baseUrl = ref(import.meta.env.BASE_URL);
    const store = useStore();
    const { goto } = useNavigation();

    const navigationData = computed(() => store.getters["navigation/getNavigation"]);

    onMounted(()=>{
      store.dispatch("navigation/setNavigation", "public");
    });

    return {
      baseUrl,
      goto,
      navigationData
    };
  }
};
</script>
