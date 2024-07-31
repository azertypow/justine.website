<template>
  <div class="v-app">
    <div class="v-app__nav">
      <AppNav/>
    </div>
    <NuxtPage/>
  </div>
</template>

<script lang="ts">
import {nextTick} from "vue";
import {useAppIsScrolled} from "~/composable";

nextTick(() => {
    window.addEventListener('scroll', () => {
        useAppIsScrolled().value = window.scrollY > 10
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
