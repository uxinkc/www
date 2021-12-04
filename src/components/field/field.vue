<template>
  <div :class="'fsa-field '+ (hasError ? fieldErrorClass : '') +' '+ EXTRA_CLASSES">
    <label
      class="fsa-field__label"
      :for="ID"
      :id="ID +'_label'">
        {{ LABEL }} <span v-if="REQUIRED=='true'" class="fsa-field__label-desc">Required</span>
    </label>
    <input
      :class="'fsa-input fsa-field__item ' + (hasError ? inputErrorClass : '')"
      :id="ID"
      :aria-required="ARIA_REQUIRED"
      :required="REQUIRED"
      :name="ID"
      :type="INPUT_TYPE"
      :value="INPUT_VALUE"
      :data-behavior="BEHAVIOR"
      :aria-describedby="ARIA_DESCRIBEDBY"
      >
    <span v-if="HELP_MESSAGE" :id="ID + '__help'" class="fsa-field__help">{{ HELP_MESSAGE }}</span>
    <span v-if="hasError" :id="ID + '__error-message'" class="fsa-field__message" role="alert">{{ ERROR_MESSAGE }}</span>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import { useErrorState } from '@/composables/useErrorState';

export default {
  props: {
    ID: String,
    LABEL: String,
    REQUIRED: String,
    INPUT_VALUE: String,
    INPUT_TYPE: String,
    BEHAVIOR: String,
    EXTRA_CLASSES: String,
    FIELD_ERROR_CLASS: String,
    INPUT_ERROR_CLASS: String,
    ARIA_REQUIRED: String,
    ARIA_DESCRIBEDBY: String,
    HELP_MESSAGE: String,
    ERROR_MESSAGE: String,
    HAS_ERROR: String
  },

  setup(props){
    const fieldErrorClass = props.FIELD_ERROR_CLASS ? props.FIELD_ERROR_CLASS : ref('fsa-field--error');
    const inputErrorClass = props.INPUT_ERROR_CLASS ? props.INPUT_ERROR_CLASS : ref('fsa-input--error');

    const {
      hasError,
      setHasError,
      errorMessage,
      setErrorMessage,
    } = useErrorState();

    onMounted(() => {
      if(props.HAS_ERROR == 'true') setHasError(true); 
    })

    return {
      hasError,
      setHasError,
      fieldErrorClass,
      inputErrorClass,
    }
  }

}
</script>