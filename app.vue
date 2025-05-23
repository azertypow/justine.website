<template>
  <div class="v-app"
       :class="{
          'v-app--intro-is-active': useAppShowIntro().value
       }"
       ref="appElement"
  >
    <div class="v-app__nav">
      <AppNav/>
    </div>
    <AppIntro/>
    <NuxtPage/>
    <div class="v-app__footer">
      @2025
    </div>
  </div>
</template>

<script setup lang="ts">

import {nextTick, type UnwrapRef} from "vue";
import {
    useAppArrayOfCurrentProjectFilter,
    useAppMapScrollTopInWindow,
    useAppScrollToBottom,
    useAppScrollTopPosition,
    useAppShowIntro,
    useAppSiteInfo, useAppTextIntro
} from "~/composable";
import {fetchSiteInfo, fetchTextIntro} from "~/_utils/ApiFetch";


const appElement: Ref<UnwrapRef<null | HTMLElement>> = ref(null)

onMounted(async () => {
    useAppTextIntro().value = await fetchTextIntro()
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

useRouter().afterEach(() => {
    scrollToTop()

    useAppArrayOfCurrentProjectFilter().value = []
})

function scrollToTop() {
    if(!(appElement.value instanceof HTMLElement)) return
    appElement.value.scrollTo({
        top: 0,
        behavior: 'instant',
    })
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

.v-app__footer {
  height: var(--app-footer-height);
  display: flex;
  box-sizing: border-box;
  padding-right: var(--app-gutter);
  justify-content: flex-end;
  align-items: center;
  color: var(--app-color-beige);
  font-size: .75rem;
}
</style>
