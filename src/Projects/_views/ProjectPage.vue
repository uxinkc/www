<template>
  <div>
    <main id="main-content" tabindex="-1">
      <h1>Project Page</h1>
      <p>...</p>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import { useNavigation } from "@/_composables/useNavigation";
//import { v4 as uuidv4 } from "uuid";

export default {

setup(props) {
  const baseUrl = ref(import.meta.env.BASE_URL);
  const { goto } = useNavigation();

  return {
    baseUrl,
    goto
  };
}
};
</script>
