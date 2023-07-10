<script setup>
import { ref, computed } from 'vue'
import Paginate from "vuejs-paginate-next";
import { ITEMS_PER_PAGE_COUNT, ROUTE_NAMES } from '../constants'
import { useRouter } from 'vue-router'

const props = defineProps({
  rates: Array,
})

const router = useRouter()

const currentPage = ref(1)

const pagesCount = computed(() => {
  return Math.ceil(props.rates.length / ITEMS_PER_PAGE_COUNT)
})

const paginatedRates = computed(() => {
  const lastIndex = currentPage.value * ITEMS_PER_PAGE_COUNT
  const firstIndex = (currentPage.value - 1) * ITEMS_PER_PAGE_COUNT

  return props.rates.slice(firstIndex, lastIndex)
})

const showPagination = computed(() => {
  return props.rates.length > ITEMS_PER_PAGE_COUNT
})

function onRateClick(id) {
  router.push({ name: ROUTE_NAMES.EDIT, params: { id } })
}

</script>

<template>
  <div class="rates">

    <div class="rates-list">
      <div class="row title">
        <div class="col code">Digital code</div>
        <div class="col letter-code">Letter code</div>
        <div class="col name">Currency name</div>
        <div class="col currency-rate">Rate</div>
      </div>
      <div class="row item" v-for="rate in paginatedRates" :key="rate.r030" @click="onRateClick(rate.r030)">
        <div class="col code">{{ rate.r030 }}</div>
        <div class="col letter-code">{{ rate.cc }}</div>
        <div class="col name">{{ rate.txt }}</div>
        <div class="col currency-rate">{{ rate.rate }}</div>
      </div>
    </div>

    <Paginate v-if="showPagination" v-model="currentPage" :page-count="pagesCount" break-view-class="break"
      prev-text="<img src='/src/assets/img/arrow-left.svg' alt='arrow'>"
      next-text="<img src='/src/assets/img/arrow-right.svg' alt='arrow'>" prev-class="arrow page-item"
      next-class="arrow page-item" />

  </div>
</template>

<style lang="scss" scoped>
.rates {
  width: 100%;
}

.rates-list {
  text-align: center;
  margin-bottom: 40px;

  .row {
    display: flex;

    &:last-of-type {
      .col {
        border-bottom: 1px solid #000;
      }
    }

    &:nth-child(odd) {
      background-color: $gray;
    }

    .col {
      flex-shrink: 0;
      flex-grow: 1;
      width: 20%;
      padding: 10px 0;
      border-top: 1px solid #000;
      border-left: 1px solid #000;

      &.name {
        width: 40%;
      }

      &:last-of-type {
        border-right: 1px solid #000;
      }
    }

    &.title {

      .col {
        background-color: $secondaryGreen;
        font-weight: 600;
      }
    }

    &.item {
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: $secondaryGreen;
      }
    }
  }
}

.pagination :deep {
  display: flex;
  justify-content: center;
  gap: 7px;

  .page-item {

    .page-link {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 30px;
      border: 1px solid black;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
      user-select: none;

      &:hover {
        border-color: $mainGreen;
      }
    }

    &.active {

      .page-link {
        border-color: $mainGreen;
        color: $mainGreen;
      }
    }

    &.disabled {

      .page-link {
        cursor: initial;
        color: #d1d1d1;
        border-color: #d1d1d1;

        &:hover {
          color: #d1d1d1;
          border-color: #d1d1d1;
        }

        img {
          opacity: 0.15;
        }
      }
    }

    &.break {

      .page-link {
        border: none;
        color: #000;

        &:hover {
          color: #000;
        }
      }
    }

    &.arrow {

      img {
        height: 20px;
        width: 20px;
      }
    }
  }
}
</style>
