<template>
  <div :class="'fsa-field '+ (hasError ? fieldErrorClass : '') +' '+ extraFieldClasses">
    <label
      class="fsa-field__label"
      :for="ID"
      :id="ID +'_label'">
        {{ LABEL }} <span v-if="REQUIRED=='true'" class="fsa-field__label-desc">Required</span>
    </label>
    <div class="fsa-select-multi fsa-field__item">
      <ul class="fsa-select-multi__list" :aria-describedby="ID + '__help'">
        <li v-for="data in selectMultiData" :key="data.id" class="fsa-select-multi__item">
          <input class="fsa-checkbox fsa-select-multi__check"
            type="checkbox"
            :id="data.id"
            :data-behavior="'select-multi'+ (data.behavior != '' ? ' '+data.behavior : '')"
            :name="data.name"
            :value="data.val"
          >
          <label class="fsa-select-multi__label" :for="data.id">{{ data.label }}</label>
        </li>
      </ul>
    </div>
    <span v-if="HELP_MESSAGE" :id="ID + '__help'" class="fsa-field__help">{{ HELP_MESSAGE }}</span>
    <span v-if="hasError" :id="ID + '__error-message'" class="fsa-field__message" role="alert">{{ ERROR_MESSAGE }}</span>
  </div>
</template>
<script>
import { ref, reactive, onMounted } from 'vue';
import { useErrorState } from '@/composables/useErrorState';
import { useUtilities } from '@/composables/useUtilities';

export default {
  props: {
    ID: String,
    LABEL: String,
    DATA: Array,
    REQUIRED: String,
    EXTRA_CLASSES: String,
    FIELD_ERROR_CLASS: String,
    ARIA_REQUIRED: String,
    HELP_MESSAGE: String,
    ERROR_MESSAGE: String,
    HAS_ERROR: String
  },

  setup(props){
    const selectMultiData = props.DATA ? props.DATA : reactive(null);
    const fieldErrorClass = props.FIELD_ERROR_CLASS ? props.FIELD_ERROR_CLASS : ref('fsa-field--error');
    const extraFieldClasses = ref('');
    let triggers = reactive([]);

    const {
      hasError,
      setHasError,
      errorMessage,
      setErrorMessage,
    } = useErrorState();

    const { getClosest } = useUtilities();

    onMounted(() => {
      if(props.HAS_ERROR == 'true') setHasError(true); 
      triggers = document.querySelectorAll('[data-behavior~="select-multi"]');
      let setIndeterminate = null;
      triggers.forEach( (el) => {
        el.addEventListener('click', resetCheckboxes, false);
        if(el.value == 'checked') {
          el.checked = true;
          setIndeterminate = el
        }
      })
      let cb = setIndeterminate != null ? setIndeterminate : triggers[0];
      resetCheckboxes(cb);
    })

    function resetCheckboxes(e){
      let cb = e.currentTarget ? e.currentTarget : e;
      let id = cb.id;
      let par = getClosest(cb, '.fsa-select-multi');
      let selectAll = par.querySelector('[data-behavior~="select-multi-all"]');
      if(selectAll){
        if(cb != selectAll){
          let len = par.querySelectorAll('[data-behavior~="select-multi"]').length;
          let lenChecked = par.querySelectorAll('[data-behavior~="select-multi"]:checked').length
          let count = len - lenChecked;

          if( cb.checked){
            if(!selectAll.checked){
              if( count <= 1 ){
                selectAll.indeterminate = false;
                selectAll.checked = true;
              } else {
                selectAll.indeterminate = true;
                selectAll.checked = false;
              }
            }
          } else {
            if(selectAll.checked){
              selectAll.indeterminate = true;
              selectAll.checked = false;
            } else if(count == (len)) {
              selectAll.indeterminate = false;
              selectAll.checked = false;
            }
          }
        } else {
          triggers.forEach( (el) => {el.checked = selectAll.checked} );
          selectAll.indeterminate = false;
        }
      }
    }

    return {
      hasError,
      setHasError,
      fieldErrorClass,
      selectMultiData,
      extraFieldClasses,
      resetCheckboxes
    }
  }

}
</script>