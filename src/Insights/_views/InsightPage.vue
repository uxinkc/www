<template>
  <div>


  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";
//import { v4 as uuidv4 } from "uuid";

export default {

setup(props) {
  const baseUrl = ref(import.meta.env.BASE_URL);
  const store = useStore();
  const { goto } = useNavigation();


  onMounted(()=>{
    
  });

  return {
    baseUrl,
    goto
  };
}
};
</script>