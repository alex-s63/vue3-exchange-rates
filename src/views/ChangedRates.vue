<script setup>
import RatesList from '../components/RatesList.vue'
import Search from '../components/Search.vue'
import { useRatesStore } from '@/stores/rates'
import { storeToRefs } from "pinia";

const { changedRates, filteredChangedRates } = storeToRefs(useRatesStore());

</script>

<template>
  <main class="container">
    <div class="page-title">
      <h1>Changed rates</h1>
      <Search v-if="changedRates.length" />
    </div>

    <RatesList v-if="changedRates.length" :rates="filteredChangedRates"/>
    <div v-else class="no-changes">
      You have no changed rates yet
    </div>
  </main>
</template>

<style lang="scss" scoped>
.no-changes {
  text-align: center;
}
</style>
