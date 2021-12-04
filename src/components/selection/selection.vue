<template>
  <div :class="'fsa-field '+ (hasError ? fieldErrorClass : '') +' '+ extraFieldClasses">
    <label
      class="fsa-field__label"
      :for="ID"
      :id="ID +'_label'">
        {{ LABEL }} <span v-if="REQUIRED=='true'" class="fsa-field__label-desc">Required</span>
    </label>

    <select v-if="isGroupedData" :class="'fsa-select fsa-field__item ' + SELECT_CLASSES" :id="ID" :aria-describedby="ID + '__help'" :aria-required="ARIA_REQUIRED" :name="ID">
      <optgroup v-for="gData in selectionData"
        :key="gData.groupId"
        :label="gData.groupLabel">
        <option v-for="gd in gData.groupData"
          :key="gd.id"
          :value="gd.val"
          :selected="gd.isSelected">
          {{ gd.label }}
        </option>
      </optgroup>
    </select>

    <select v-if="!isGroupedData" :class="'fsa-select fsa-field__item' + SELECT_CLASSES" :id="ID" :aria-describedby="ID + '__help'" :aria-required="ARIA_REQUIRED" :name="ID">
      <option v-for="sd in selectionData"
        :key="sd.id"
        :value="sd.val"
        :selected="sd.isSelected">
        {{ sd.label }}
      </option>
    </select>

    <span v-if="HELP_MESSAGE" :id="ID + '__help'" class="fsa-field__help">{{ HELP_MESSAGE }}</span>
    <span v-if="hasError" :id="ID + '__error-message'" class="fsa-field__message" role="alert">{{ ERROR_MESSAGE }}</span>
  </div>
</template>
<script>
import { ref, reactive, onMounted } from 'vue';
import { useErrorState } from '@/composables/useErrorState';

export default {
  props: {
    ID: String,
    LABEL: String,
    DATA: Array,
    REQUIRED: String,
    SELECT_CLASSES: String,
    EXTRA_CLASSES: String,
    FIELD_ERROR_CLASS: String,
    ARIA_REQUIRED: String,
    HELP_MESSAGE: String,
    ERROR_MESSAGE: String,
    HAS_ERROR: String
  },

  setup(props){
    const selectionData = props.DATA ? props.DATA : reactive(null);
    const fieldErrorClass = props.FIELD_ERROR_CLASS ? props.FIELD_ERROR_CLASS : ref('fsa-field--error');
    const extraFieldClasses = props.EXTRA_CLASSES ? props.EXTRA_CLASSES : ref('');
    let isGroupedData = ref(false);

    const {
      hasError,
      setHasError,
      errorMessage,
      setErrorMessage,
    } = useErrorState();

    onMounted(() => {
      if(selectionData[0].groupData) isGroupedData.value = true;
      if(props.HAS_ERROR == 'true') setHasError(true); 
    })

    return {
      hasError,
      setHasError,
      fieldErrorClass,
      selectionData,
      extraFieldClasses,
      isGroupedData
    }
  }

}
</script>