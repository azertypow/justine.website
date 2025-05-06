<template>
    <div class="v-app-intro"
         v-if="useAppShowIntro().value"
         @click="useAppShowIntro().value = false"
         :style="{
            opacity: opacity,
         }"
    >

      <div class="v-app-intro__text-wrap">
        <div class="v-app-intro__text-wrap__text" >
          <p>{{useAppTextIntro().value?.textIntro}}</p>
        </div>
      </div>

      <div class="v-app-intro__img-wrap">
        <img class="v-app-intro__img-wrap__img"
             v-if="useAppTextIntro().value?.cover_intro && useAppTextIntro().value?.cover_intro?.length"
             alt="background"
             :src="useAppTextIntro().value?.cover_intro[0].resize.xxl"
             :style="{
                opacity: opacity,
             }"
        />
        <img class="v-app-intro__img-wrap__img"
             v-else
             alt="background"
             src="/img/Layer-3.jpg"
             :style="{
                opacity: opacity,
             }"
        />
      </div>

      <div class="v-app-intro__scroller-height__wrap"
           @scroll="updateIntroStatus"
           ref="scrollContainer"
      >
        <div class="v-app-intro__scroller-height" ref="scrollerHeightElement"></div>
      </div>

    </div>
</template>





<script setup lang="ts">
import {useAppShowIntro, useAppTextIntro} from "~/composable";
import type {UnwrapRef} from "vue";
import type {LocationQueryValue} from "vue-router";

const opacity = ref(1)
const scrollContainer: Ref<UnwrapRef<null | HTMLElement>> = ref(null)
const scrollerHeightElement: Ref<UnwrapRef<null | HTMLElement>> = ref(null)

const mixBlendMode: string | null | LocationQueryValue[] = 'soft-light'
const opacityFromQuery: string | null | LocationQueryValue[] = '100'

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
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  color: var(--app-color-beige);
  text-align: center;
  font-size: max(2rem, 5vw);
  user-select: none;
  cursor: pointer;
}

.v-app-intro__scroller-height__wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.v-app-intro__scroller-height {
  height: 500%;
}

.v-app-intro__text-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
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

.v-app-intro__img-wrap {
  --opacity-from-query: v-bind(opacityFromQuery);
  opacity: calc( var(--opacity-from-query) / 100 );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.v-app-intro__img-wrap__img {
  --mix-blend-mode-from-query: v-bind(mixBlendMode);
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  mix-blend-mode: var(--mix-blend-mode-from-query);
}
</style>
