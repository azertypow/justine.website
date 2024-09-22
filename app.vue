<template>
  <div class="v-app"
       :class="{
          'v-app--intro-is-active': useAppShowIntro().value
       }"
  >
    <div class="v-app__nav">
      <AppNav/>
    </div>
    <AppIntro/>
    <NuxtPage/>
  </div>
</template>

<script setup lang="ts">
import {nextTick} from "vue";
import {
    useAppMapScrollTopInWindow,
    useAppScrollToBottom,
    useAppScrollTopPosition,
    useAppShowIntro,
    useAppSiteInfo
} from "~/composable";
import {fetchSiteInfo} from "~/_utils/ApiFetch";

onMounted(async () => {
    useAppSiteInfo().value = await fetchSiteInfo()
})

nextTick(() => {
    window.addEventListener('scroll', () => {
        useAppScrollToBottom().value = (window.scrollY > useAppScrollTopPosition().value) ? 'toBottom' : 'toTop'
        useAppScrollTopPosition().value = window.scrollY
        useAppMapScrollTopInWindow().value = mapScrollTopInWindow()
    })
    window.addEventListener('click', () => useAppShowIntro().value = false)
})

/**
 * return value between 0 and 1
 * */
function mapScrollTopInWindow() {
    if(!useAppShowIntro().value) return 0

    const docHeight = document.documentElement.scrollHeight - window.innerHeight

    if (docHeight === 0) return 1

    return Math.max(0, Math.min(1, 1 - (useAppScrollTopPosition().value / (docHeight / 2))))
}

</script>

<style lang="scss">
.v-app {
  box-sizing: border-box;
  height: 100%;
  padding-top: var(--app-nav-height);
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  &.v-app--intro-is-active {
    overflow: hidden;
  }
}

.v-app__nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100000;
}
</style>
