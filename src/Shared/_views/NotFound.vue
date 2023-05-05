<template>
  <div>
    <h1>Page Not Found</h1>

    <img :src="baseUrl +'img/404/' + currentRandomImage['img']" />
    <p class="">
      Photo Credit: <a :href="currentRandomImage['creditUrl']" @click.prevent="goto(currentRandomImage['creditUrl'], '_blank')">
      {{ currentRandomImage['creditSite'] }}
      </a>
    </p>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useNavigation } from "@/_composables/useNavigation";

export default {

  setup(){

    const baseUrl = ref(import.meta.env.BASE_URL);
    const { goto } = useNavigation();

    const currentRandomImage = computed(()=>{
      let randomNum = Math.floor(Math.random() * 4);
      let imgArr = [
        { 
          img: 'sarah-kilian-52jRtc2S_VE-unsplash.jpg',
          creditName: 'Sarah Kilian',
          creditProfile: 'https://unsplash.com/@rojekilian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditUrl: 'https://unsplash.com/photos/52jRtc2S_VE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditSite: 'Unsplash'
        },
        { 
          img: 'etienne-girardet-OA0qcP6GOw0-unsplash.jpg',
          creditName: 'Etienne Girardet',
          creditProfile: 'https://unsplash.com/@etiennegirardet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditUrl: 'https://unsplash.com/photos/OA0qcP6GOw0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditSite: 'Unsplash'
        },
        { 
          img: 'jon-tyson-od1pKBU7PKA-unsplash.jpg',
          creditName: 'Jon Tyson',
          creditProfile: 'https://unsplash.com/@jontyson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditUrl: 'https://unsplash.com/photos/od1pKBU7PKA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditSite: 'Unsplash'
        },
        { 
          img: 'chuttersnap-Odc4dcsjUBw-unsplash.jpg',
          creditName: 'CHUTTERSNAP',
          creditProfile: 'https://unsplash.com/@chuttersnap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditUrl: 'https://unsplash.com/photos/Odc4dcsjUBw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
          creditSite: 'Unsplash'
        }  
      ]

      return imgArr[randomNum];
    });

    return {
      baseUrl,
      goto,
      currentRandomImage
    }

  }
}
</script>