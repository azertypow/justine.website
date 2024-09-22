<template>
    <div class="v-app-intro"
         v-if="useAppShowIntro().value"
         @click="useAppShowIntro().value = false"
         ref="scrollContainer"
         :style="{
            opacity: opacity,
         }"
         @scroll="updateIntroStatus"
    >
      <div class="v-app-intro__scroller-height" ref="scrollerHeightElement"></div>

      <div class="v-app-intro__text-wrap">
        <div class="v-app-intro__text-wrap__text" >
          <p>Je suis furieuse contre une société qui m'a éduqué dans jamais apprendre a blesser un homme s'il m'écarte les cuisses de force, alors que cette même société m'a inculqué l'idée que c'était un crime dont je ne devais pas me remettre.</p>
          <p>Virginie Despente, King Kong Théorie</p>
        </div>
      </div>
    </div>
</template>





<script setup lang="ts">
import {useAppMapScrollTopInWindow, useAppScrollTopPosition, useAppShowIntro} from "~/composable";
import type {UnwrapRef} from "vue";

const opacity = ref(1)
const scrollContainer: Ref<UnwrapRef<null | HTMLElement>> = ref(null)
const scrollerHeightElement: Ref<UnwrapRef<null | HTMLElement>> = ref(null)

function updateIntroStatus() {
    if( !(scrollContainer.value instanceof HTMLElement)) return
    if( !(scrollerHeightElement.value instanceof HTMLElement)) return

    const scrollerHeight        = scrollerHeightElement.value.getBoundingClientRect().height
    const scrollContainerHeight = scrollContainer.value.getBoundingClientRect().height
    const scrollHeightRef       = scrollerHeight - scrollContainerHeight

    opacity.value = Math.max(0, Math.min(1, 1 - (scrollContainer.value.scrollTop / scrollHeightRef)))

    if(opacity.value === 0) useAppShowIntro().value = false
}


</script>





<style lang="scss" scoped >
.v-app-intro {
  background: var(--app-color-blue);
  box-sizing: border-box;
  padding-left: var(--app-gutter);
  padding-right: var(--app-gutter);
  width: 100%;
  height: calc( 100% - var(--app-nav-height));
  position: fixed;
  top: var(--app-nav-height);
  left: 0;
  z-index: 1000;
  color: var(--app-color-beige);
  text-align: center;
  font-size: 2.5vw;
  user-select: none;
  cursor: pointer;
  overflow: auto;
}

.v-app-intro__scroller-height {
  height: 500%;
}

.v-app-intro__text-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: calc( 100% - var(--app-nav-height));
  top: var(--app-nav-height);
  left: 0;
  pointer-events: none;
}

.v-app-intro__text-wrap__text {
  max-width: 25em;
  width: 100%;
}
</style>
