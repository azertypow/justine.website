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
          <p>Justine Ruchat actrice, autrice et créatrice de spectacles.</p>
        </div>
      </div>

      <div class="v-app-intro__img--null-for-opacity">
        <img class="v-app-intro__img"
             v-if="mixBlendMode"
             alt="background"
             src="/img/Layer-3.jpg"
             :style="{
                opacity: opacity,
             }"
        />
      </div>
    </div>
</template>





<script setup lang="ts">
import {useAppShowIntro} from "~/composable";
import type {UnwrapRef} from "vue";
import type {LocationQueryValue} from "vue-router";

const opacity = ref(1)
const scrollContainer: Ref<UnwrapRef<null | HTMLElement>> = ref(null)
const scrollerHeightElement: Ref<UnwrapRef<null | HTMLElement>> = ref(null)

const mixBlendMode: string | null | LocationQueryValue[] = useRoute().query.mix_blend_mode
const opacityFromQuery: string | null | LocationQueryValue[] = useRoute().query.opacityFromQuery

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
  font-size: max(2rem, 5vw);
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
  z-index: 10;
}

.v-app-intro__text-wrap__text {
  max-width: 25em;
  width: 100%;
  box-sizing: border-box;
  padding: var(--app-gutter);
}

.v-app-intro__img--null-for-opacity {
  --opacity-from-query: v-bind(opacityFromQuery);
  opacity: calc( var(--opacity-from-query) / 100 );
}

.v-app-intro__img {
  --mix-blend-mode-from-query: v-bind(mixBlendMode);
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  mix-blend-mode: var(--mix-blend-mode-from-query);
}
</style>
