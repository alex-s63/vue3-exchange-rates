<script setup>
import RatesList from '../components/RatesList.vue'
import Search from '../components/Search.vue'
import { useRatesStore } from '@/stores/rates'
import { storeToRefs } from "pinia"
import Datepicker from 'vuejs3-datepicker'
import { ref, onBeforeMount } from 'vue'

const { filteredRates, rates } = storeToRefs(useRatesStore())
const { fetchRatesByDate } = useRatesStore()

const selectedDate = ref(new Date())

onBeforeMount(async () => {
  if (!rates.value.length) {
    await fetchRatesByDate(new Date())
  }
})

function disabledDates() {
  const disabledDate = new Date();
  disabledDate.setDate(disabledDate.getDate() + 2)
  
  return {
    from: new Date(disabledDate.getFullYear(), disabledDate.getMonth(), disabledDate.getDate()),
    preventDisableDateSelection: true
  }
}
async function onDateChanged() {
  await fetchRatesByDate(selectedDate.value)
}
</script>

<template>
  <main class="container">
    <div class="page-title">
      <h1>Serach rates by date</h1>
      <Search />
    </div>

    <div class="datepicker">
      <div class="label">Select date:</div>
      <Datepicker @input="onDateChanged" v-model="selectedDate" :disabled-dates="disabledDates()" />
    </div>

    <RatesList :rates="filteredRates" />
  </main>
</template>

<style lang="scss" scoped>
.datepicker {
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  .label {
    margin-right: 20px;
  }

  :deep .vuejs3-datepicker__value {
    padding: 10px;
    border-radius: 20px;
  }
}
</style>
