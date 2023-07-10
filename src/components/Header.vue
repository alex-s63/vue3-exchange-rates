<script setup>
import { ROUTE_NAMES } from '../constants'
import Logo from '../components/icons/Logo.vue'
</script>

<template>
  <header>
    <div class="container flex">
      <router-link class="logo" :to="{ name: ROUTE_NAMES.HOME }">
        <Logo />
      </router-link>

      <nav>
        <ul>
          <li><router-link :to="{ name: ROUTE_NAMES.HOME }">Home</router-link></li>
          <li><router-link :to="{ name: ROUTE_NAMES.CHANGED_RATES }">Changed Exchange rates</router-link></li>
          <li><router-link :to="{ name: ROUTE_NAMES.SEARCH }">Search rates</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.3);

  .container {
    justify-content: space-between;
    align-items: stretch;
  }

  .logo {

    svg {
      width: 60px;
      height: 60px;
    }
  }

  ul {
    display: flex;
    height: 100%;

    li {

      a {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 20px;
        transition: all 0.3s ease;

        &:hover, &.router-link-active {
          background-color: $secondaryGreen;
        }
      }
    }
  }

}
</style>
