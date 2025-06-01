<template>
  <label v-if="label" class="form-label">{{ label }}</label>

  <CustomDropDown custom-class="guest-selector me-2">
    <input type="text" class="form-guest-selector form-control selection-result" :class="inputClass"
      :value="getGuestsValue()" data-bs-auto-close="outside" data-bs-toggle="dropdown"
      :style="{ width: `${inputWidth}px` }" />

    <ul class="dropdown-menu guest-selector-dropdown">
      <!-- Adults Section -->
      <li class="d-flex justify-content-between">
        <div>
          <h6 class="mb-0">Adults</h6>
          <small>Ages 13 or above</small>
        </div>
        <div class="hstack gap-1 align-items-center">
          <b-button variant="link" class="adult-remove p-0 mb-0" @click="() => updateGuests('adults', false)">
            <BIconDashCircle class="fs-5 fa-fw" />
          </b-button>
          <h6 class="guest-selector-count mb-0 adults">{{ formValue.guests?.adults ?? 0 }}</h6>
          <b-button variant="link" class="adult-add p-0 mb-0" @click="() => updateGuests('adults')">
            <BIconPlusCircle class="fs-5 fa-fw" />
          </b-button>
        </div>
      </li>

      <li class="dropdown-divider"></li>

      <!-- Children Section -->
      <li class="d-flex justify-content-between">
        <div>
          <h6 class="mb-0">Child</h6>
          <small>Ages 18 below</small>
        </div>
        <div class="hstack gap-1 align-items-center">
          <b-button variant="link" class="adult-remove p-0 mb-0" @click="() => updateGuests('children', false)">
            <BIconDashCircle class="fs-5 fa-fw" />
          </b-button>
          <h6 class="guest-selector-count mb-0 child">{{ formValue.guests?.children ?? 0 }}</h6>
          <b-button variant="link" class="adult-add p-0 mb-0" @click="() => updateGuests('children')">
            <BIconPlusCircle class="fs-5 fa-fw" />
          </b-button>
        </div>
      </li>

      <li v-if="formValue.guests?.children > 0" class="dropdown-divider"></li>

      <!-- Child Ages Section -->
      <li v-if="formValue.guests?.children > 0">
        <div v-for="(age, index) in childAges" :key="index"
          class="d-flex justify-content-between align-items-center mb-2">
          <label :for="'child-age-' + index" class="me-2">Child {{ index + 1 }} Age:</label>
          <select :id="'child-age-' + index" v-model="childAges[index]" class="form-select">
            <option v-for="age in ageOptions" :key="age" :value="age">{{ age + ' Year old' }}</option>
          </select>
        </div>
      </li>

      <li class="dropdown-divider"></li>

      <!-- Rooms Section -->
      <li class="d-flex justify-content-between">
        <div>
          <h6 class="mb-0">Rooms</h6>
          <small>Max room 8</small>
        </div>
        <div class="hstack gap-1 align-items-center">
          <b-button variant="link" class="adult-remove p-0 mb-0" @click="() => updateGuests('rooms', false)">
            <BIconDashCircle class="fs-5 fa-fw" />
          </b-button>
          <h6 class="guest-selector-count mb-0 rooms">{{ formValue.guests?.rooms ?? 0 }}</h6>
          <b-button variant="link" class="adult-add p-0 mb-0" @click="() => updateGuests('rooms')">
            <BIconPlusCircle class="fs-5 fa-fw" />
          </b-button>
        </div>
      </li>
    </ul>
  </CustomDropDown>
</template>

<script setup lang="ts">
import CustomDropDown from '@/components/CustomDropDown.vue'
import { BIconDashCircle, BIconPlusCircle } from 'bootstrap-icons-vue'
import { ref, watch, computed } from 'vue'
import type { GuestAndRoomFormType } from '@/types'

type GuestAndRoomFormPropType = {
  id?: string
  label?: string
  modelValue?: GuestAndRoomFormType
  inputWidth?: number
  inputClass?: string
}

const props = defineProps<GuestAndRoomFormPropType>()

const initialValue: GuestAndRoomFormType = {
  guests: {
    adults: 2,
    rooms: 1,
    children: 0,
    childAges: []
  }
}

const formValue = ref<GuestAndRoomFormType>(props.modelValue ?? initialValue)
const childAges = computed(() => formValue.value.guests.childAges ?? ref<number[]>([]))
const ageOptions = Array.from({ length: 18 }, (_, i) => i + 1) // Start from 1 to 18

const updateGuests = (type: keyof GuestAndRoomFormType['guests'], increase: boolean = true) => {
  if (formValue.value.guests) {
    const val = formValue.value.guests[type]
    formValue.value = {
      ...formValue.value,
      guests: {
        ...formValue.value.guests,
        [type]: increase ? val + 1 : val > 0 ? val - 1 : 0
      }
    }
    if (type === 'children') {
      updateChildAgesArray(formValue.value.guests.children)
    }
    updateValue()
  }
}

const updateChildAgesArray = (newChildrenCount: number) => {
  while (childAges.value.length < newChildrenCount) {
    childAges.value.push(0) // Default age for new children
  }
  while (childAges.value.length > newChildrenCount) {
    childAges.value.pop()
  }
}

const getGuestsValue = (): string => {
  let value = ''
  const guests = formValue.value.guests
  if (guests) {
    if (guests.adults) {
      value += guests.adults + (guests.adults > 1 ? ' Adults ' : ' Adult ')
    }
    if (guests.children) {
      value += guests.children + (guests.children > 1 ? ' Children ' : ' Child ')
    }
    if (guests.rooms) {
      value += guests.rooms + (guests.rooms > 1 ? ' Rooms ' : ' Room ')
    }
  }
  return value
}

const emit = defineEmits(['update:modelValue', 'guestData'])

const updateValue = () => {
  emit('update:modelValue', formValue.value)
  emit('guestData', {
    Adults: formValue.value.guests?.adults ?? 1,
    Children: formValue.value.guests?.children ?? 0,
    Rooms: formValue.value.guests?.rooms ?? 1,
    ChildAges: childAges.value
  })
}

watch(() => formValue.value.guests?.children, (newChildrenCount) => {
  updateChildAgesArray(newChildrenCount ?? 0)
})
</script>