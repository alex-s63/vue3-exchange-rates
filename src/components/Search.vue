<script setup>
import SearchIcon from '../components/icons/SearchIcon.vue'
import { useRatesStore } from '@/stores/rates'

const ratesStore = useRatesStore()

</script>

<template>
  <div class="search">
    <SearchIcon class="icon" />
    <input placeholder="Search by name" v-model="ratesStore.searchValue" type="text">
  </div>
</template>

<style lang="scss" scoped>
.search {
  position: relative;

  .icon {
    position: absolute;
    width: 30px;
    height: 20px;
    left: 5px;
    top: 10px;
  }

  input {
    border: 1px solid #000;
    border-radius: 20px;
    padding: 10px 5px;
    outline: none;
    width: 300px;
    padding-left: 35px;
  }
}
</style>
