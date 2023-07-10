<script setup>
import RatesList from '../components/RatesList.vue'
import Search from '../components/Search.vue'
import { useRatesStore } from '@/stores/rates'
import { storeToRefs } from "pinia";
import { onBeforeMount } from 'vue'
import Loader from '../components/Loader.vue'

const ratesStore = useRatesStore()
const { rates, filteredRates, loading } = storeToRefs(ratesStore);
const { fetchRatesByDate } = ratesStore

onBeforeMount(async () => {
  await fetchRatesByDate(new Date())
})

</script>

<template>
  <main class="container">
    <div class="page-title">
      <h1>Exchange rates on {{ rates[0]?.exchangedate }}</h1>
      <Search />
    </div>

    <RatesList :rates="filteredRates"/>
  </main>
  <Loader v-if="loading" />
</template>
