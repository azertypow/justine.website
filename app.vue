<template>
  <div class="v-app">
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

function mapScrollTopInWindow() {
    if(!useAppShowIntro().value) return 0

    const docHeight = document.documentElement.scrollHeight - window.innerHeight

    if (docHeight === 0) return 1

    const valueToReturn = Math.max(0, Math.min(1, 1 - (useAppScrollTopPosition().value / (docHeight / 2))))

    if(valueToReturn === 0) useAppShowIntro().value = false

    return valueToReturn
}

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
