<template>
  <div class="v-app">
    <div class="v-app__nav">
      <AppNav/>
    </div>
    <NuxtPage/>
  </div>
</template>

<script setup lang="ts">
import {nextTick} from "vue";
import {useAppScrollToBottom, useAppScrollTopPosition} from "~/composable";

nextTick(() => {
    window.addEventListener('scroll', () => {
        console.log( window.scrollY > useAppScrollTopPosition().value, window.scrollY,  useAppScrollTopPosition().value)
        useAppScrollToBottom().value = (window.scrollY > useAppScrollTopPosition().value) ? 'toBottom' : 'toTop'
        useAppScrollTopPosition().value = window.scrollY
    })
})
</script>

<style lang="scss">
.v-app {
  padding-top: var(--app-nav-height);
}

.v-app__nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100000;
}
</style>
