<template>
  <label class="form-label" :class="labelClass" v-if="label">{{ label }}</label>
  <b-form-input
    :type="type ?? 'text'"
    :id="id"
    :placeholder="placeholder"
    :value="modelValue"
    :class="customClass"
    @input="updateValue"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import flatpickr from 'flatpickr'
import { ref, onMounted, watch } from 'vue'
import type { InputType } from 'bootstrap-vue-next'

type FlatPickerProps = {
  label?: string
  type?: InputType
  customClass?: string
  labelClass?: string
  placeholder?: string
  id: string
  modelValue?: Date[] | string
  options?: object
}

const props = defineProps<FlatPickerProps>()
const emit = defineEmits(['update:modelValue', 'dateData'])

const flatpickrInstance = ref<flatpickr.Instance | null>(null)

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

const emitDates = (dates: Date[]) => {
  emit('update:modelValue', dates)
  emit('dateData', {
    checkIn: dates[0],
    checkOut: dates[1],
  })
}

onMounted(() => {
  const ele = document.getElementById(props.id)
  if (ele) {
    flatpickrInstance.value = flatpickr(ele, {
      ...props.options,
      defaultDate: props.modelValue ? (Array.isArray(props.modelValue) ? props.modelValue : [new Date(props.modelValue)]) : [],
      onChange: (dates: Date[]) => {
        emitDates(dates) // Emit the selected dates
      }
    })
  }
})

watch(() => props.modelValue, (newValue: any) => {
  if (flatpickrInstance.value) {
    const dateValue = Array.isArray(newValue) ? newValue : [new Date(newValue)]
    flatpickrInstance.value.setDate(dateValue, false)
  }
})
</script>


