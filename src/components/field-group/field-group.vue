<template>
  <div :class="'fsa-field '+ (hasError ? fieldErrorClass : '') +' '+ extraFieldClasses">
    <label
      class="fsa-field__label"
      :for="GROUP_ID"
      :id="GROUP_ID +'_label'">
        {{ LABEL }} <span v-if="REQUIRED=='true'" class="fsa-field__label-desc">Required</span>
    </label>
    <ul :class="ulClass" :aria-describedby="GROUP_ID + '__help'" :aria-labelledby="GROUP_ID">
      <li v-for="data in groupData" :key="data.id">
        <span>
          <input :class="'fsa-'+GROUP_TYPE"
            :type="GROUP_TYPE"
            :id="data.id"
            :name="data.name"
            :checked="data.isChecked"
          >
          <label :for="data.id">{{ data.label }}</label>
        </span>
      </li>
    </ul>
    <span v-if="HELP_MESSAGE" :id="GROUP_ID + '__help'" class="fsa-field__help">{{ HELP_MESSAGE }}</span>
    <span v-if="hasError" :id="GROUP_ID + '__error-message'" class="fsa-field__message" role="alert">{{ ERROR_MESSAGE }}</span>
  </div>
</template>
<script>
import { ref, reactive, onMounted } from 'vue';
import { useErrorState } from '@/composables/useErrorState';

export default {
  props: {
    GROUP_ID: String,
    GROUP_TYPE: String,
    LABEL: String,
    DATA: Array,
    REQUIRED: String,
    BEHAVIOR: String,
    EXTRA_CLASSES: String,
    FIELD_ERROR_CLASS: String,
    ARIA_REQUIRED: String,
    HELP_MESSAGE: String,
    ERROR_MESSAGE: String,
    DISPLAY: String,
    HAS_ERROR: String
  },

  setup(props){
    const groupData = props.DATA ? props.DATA : reactive(null);
    const fieldErrorClass = props.FIELD_ERROR_CLASS ? props.FIELD_ERROR_CLASS : ref('fsa-field--error');
    const displayType = props.DISPLAY ? props.DISPLAY : 'vertical';
    const extraFieldClasses = ref('');
    const ulClass = ref('')

    const {
      hasError,
      setHasError,
      errorMessage,
      setErrorMessage,
    } = useErrorState();

    onMounted(() => {
      if(displayType == 'vertical'){
        ulClass.value = 'fsa-form-list'
      }
      if(displayType == 'horizontal'){
        ulClass.value = 'fsa-level'
        extraFieldClasses.value = 'fsa-field--block'
      }
      if(props.HAS_ERROR == 'true') setHasError(true); 
    })

    return {
      hasError,
      setHasError,
      fieldErrorClass,
      groupData,
      extraFieldClasses,
      ulClass
    }
  }

}
</script>