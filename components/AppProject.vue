<template>
    <section class="v-app-project"
    >
      <nuxt-link class="v-app-project__link"
                 :href="`projects/${slug}`"
      >
        <div class="v-app-project__text">
          <div class="v-app-project__title">
            <h3 class="app-rm-margins v-app-project__title__content"
            >{{title}}</h3>
          </div>
          <div class="v-app-project__subtitle v-app-project__project-hover-transition">{{subtitle}}</div>
          <div class="v-app-project__year v-app-project__project-hover-transition">{{year}}</div>
        </div>

        <img class="v-app-project__img app-display-block"
             :src="src"
             alt="image de couverture pour le projet"/>

        <div class="v-app-project__category v-app-project__project-hover-transition">{{category}}</div>
      </nuxt-link>
    </section>
</template>


<script setup lang="ts">
import {defineProps} from 'vue'
import type {ApiCategories} from "~/_utils/ApiDefinitions";

const props = defineProps<{
    src: string
    title: string
    year: string
    category: ApiCategories
    slug: string
    subtitle: string
}>()
</script>





<style lang="scss" scoped >
.v-app-project {
  overflow: hidden;
  background: var(--app-color-blue);
  color: white;
  position: relative;
  user-select: none;
  cursor: pointer;
}

a {
  display: block;
  color: inherit;
}

.v-app-project__title {
  position: relative;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding-top: 1rem;
  padding-left: 2rem;

  .v-app-project__title__content {
    position: relative;
    z-index: 10;
    font-size: 2rem;
  }

  &:before {
    --v-app-project__title__content__gradient-height: 20px;

    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--app-color-blue);
    transition: box-shadow .25s .25s ease-in-out, transform .5s ease-in-out;
    box-shadow: 0 0 0 0 var(--app-color-blue);
    transform: translate3d(0, calc(-100% - (var(--v-app-project__title__content__gradient-height) * 2) ), 0) ;

    .v-app-project:hover & {
      transform: translate3d(0, 0%, 0) ;
      box-shadow: 0 0 var(--v-app-project__title__content__gradient-height) var(--v-app-project__title__content__gradient-height) var(--app-color-blue)
    }
  }
}

.v-app-project__text {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
}

.v-app-project__subtitle {
  box-sizing: border-box;
  padding-left: 2rem;
  z-index: 10;
  position: relative;
}

.v-app-project__year {
  box-sizing: border-box;
  padding-left: 2rem;
  z-index: 10;
  position: relative;
}

.v-app-project__category {
  z-index: 100;
  position: absolute;
  bottom: var(--app-gutter);
  right: calc( 2 * var(--app-gutter));
  box-sizing: border-box;
  color: var(--app-color-blue);
}

.v-app-project__project-hover-transition {
  opacity: 0;

  .v-app-project:hover & {
    opacity: 1;
    transition: opacity 500ms ease-in-out;
  }
}

.v-app-project__img {
  z-index: 10;
  width: 100%;
  aspect-ratio: 2/1;
  object-fit: cover;
  position: relative;

  transition: transform 1s ease-in-out;
  opacity: 1;
  transform: scale(1);

  .v-app-project:hover & {
    transition-duration: 2.5s;
    transition-timing-function: linear;
    transform: scale(1.05);
  }
}
</style>
