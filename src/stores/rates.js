import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { API } from '../constants'
import getDateInYYYYMMDD from '../utils/getDateInYYYYMMDD'

export const useRatesStore = defineStore('rates', () => {
  // State
  const rates = ref([])
  const changedRates = ref([])
  const loading = ref(false)
  const searchValue = ref('')

  // Actions
  async function fetchRatesByDate(date) {
    try {
      loading.value = true

      const resp = await fetch(API.GET_RATES_URL + new URLSearchParams({
        date: getDateInYYYYMMDD(date),
        json: ''
      }))
      rates.value  = await resp.json()

      // Overwritting local changed rates after fetch
      if (changedRates.value.length) {
        changedRates.value.forEach((rate) => {
          const index = rates.value.findIndex((element) => element.r030 === rate.r030)
          rates.value[index] = {
            txt: rate.txt,
            rate: rate.rate,
            cc: rate.cc,
            r030: rate.r030
          }
        })
      }

      loading.value = false
    } catch (e) {
      loading.value = false
      throw new Error(e)
    }
  }

  // Getters
  const filteredRates = computed(() => {
    if (searchValue.value) {
      return rates.value.filter((rate) => {
        return rate.txt.toLowerCase().includes(searchValue.value.toLowerCase())
      })
    }
    else {
      return rates.value  
    }
  })

  const filteredChangedRates = computed(() => {
    if (searchValue.value) {
      return changedRates.value.filter((rate) => {
        return rate.txt.toLowerCase().includes(searchValue.value.toLowerCase())
      })
    }
    else {
      return changedRates.value  
    }
  })

  const getRateByCode = computed(() => {
    return (code) => {
      return rates.value.find((rate) => {
        return rate.r030 == code
      })
    }
  })

return { rates, filteredRates, fetchRatesByDate, loading, searchValue, getRateByCode, changedRates, filteredChangedRates }
})
