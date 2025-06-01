<template>
  <label class="form-label" :class="labelClass" v-if="label">{{ label }}</label>
  <b-form-select
    :id="id"
    :options="options"
    class="js-choice"
    :class="customClass"
    :multiple="multiple"
    @change="updateValue"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import Choices from 'choices.js'

type SelectFormInputProps = {
  label?: string
  placeholder?: string
  customClass?: string
  labelClass?: string
  id: string
  multiple?: boolean
  modelValue?: string | string[]
  options?: { value: string; text: string }[]
  choiceOptions?: object
}

const props = defineProps<SelectFormInputProps>()
const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  const target = e.target as HTMLSelectElement
  const value = target.multiple ? Array.from(target.selectedOptions, option => option.value) : target.value
  emit('update:modelValue', value)
}

const initializeChoices = () => {
  nextTick(() => {
    const ele = document.getElementById(props.id) as HTMLSelectElement
    if (ele) {
      const choices = new Choices(ele, {
        ...props.choiceOptions,
        placeholder: true,
        placeholderValue: 'Type and hit enter',
        allowHTML: true,
        shouldSort: false
      })

      // Set selected values
      if (props.modelValue) {
        choices.setValue(Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue])
      }
    }
  })
}

onMounted(() => {
  initializeChoices()
})

// Watch for changes in modelValue prop and update Choices instance
watch(() => props.modelValue, (newValue) => {
  nextTick(() => {
    const ele = document.getElementById(props.id) as HTMLSelectElement
    if (ele) {
      const choices = (ele as any)._choices // Accessing Choices instance

      if (choices) {
        choices.setValue(Array.isArray(newValue) ? newValue : [newValue])
      }
    }
  })
}, { immediate: true })
</script>
