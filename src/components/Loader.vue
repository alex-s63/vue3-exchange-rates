<script setup>
import Spinner from '../components/icons/Spinner.vue'
</script>

<template>
    <div class="loader">
        <Spinner />
    </div>
</template>

<style lang="scss" scoped>
.loader {
    height: 100vh;
    display: flex;
    background: rgba(255, 255, 255, 0.5);
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;

    svg {
        background: transparent!important;  
    }
}
</style>
