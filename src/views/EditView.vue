<script setup>
import { useRoute } from 'vue-router'
import { useRatesStore } from '@/stores/rates'
import { storeToRefs } from "pinia";

const { getRateByCode, changedRates } = storeToRefs(useRatesStore());
const route = useRoute()

function onRateChanged() {
  const rate = getRateByCode.value(route.params.id)

  if (!changedRates.value.some(item => item.r030 === +route.params.id)) {
    changedRates.value.push(rate)
  }
}
</script>

<template>
  <main class="container">

    <div class="page-title">
      <h1>Edit exchange rate</h1>
    </div>

    <form @change="onRateChanged">

      <div class="form-row">
        <label for="name">Name</label>
        <input v-model="getRateByCode(route.params.id).txt" type="text" name="name">
      </div>

      <div class="form-row">
        <label for="code">Code</label>
        <input v-model="getRateByCode(route.params.id).cc" type="text" name="code">
      </div>


      <div class="form-row">
        <label for="rate">Rate</label>
        <input v-model="getRateByCode(route.params.id).rate" type="number" name="rate">
      </div>

    </form>
  </main>
</template>

<style lang="scss" scoped>
label {
  margin-right: 20px;
  width: 150px;
  display: block;
}

.form-row {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

input {
  padding: 5px;
}
</style>
