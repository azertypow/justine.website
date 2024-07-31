<template>
    <section class="v-app-project"
    >
      <nuxt-link class="v-app-project__link"
                 :href="`projects/${slug}`"
      >
        <div class="v-app-project__text">
          <h3 class="v-app-project__title app-rm-margins"
          >{{title}}</h3>
          <div class="v-app-project__subtitle">{{subtitle}}</div>
          <div class="v-app-project__year">{{year}}</div>
          <div class="v-app-project__category">{{category}}</div>
        </div>

        <img class="v-app-project__img app-display-block"
             :src="src"
             alt="image de couverture pour le projet"/>
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

  //&:hover {
  //  box-shadow: inset 0 0 20px 12px var(--app-color-beige);
  //}
}

a {
  display: block;
  color: inherit;
}

.v-app-project__title {
  font-size: 2rem;
  display: block;
  width: 100%;

  .v-app-project:hover & {
    background: var(--app-color-blue);
    box-shadow: 0 0 50px 50px var(--app-color-blue);
  }
}

.v-app-project__text {
  position: absolute;
  padding-top: 1rem;
  padding-left: 2rem;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
}

.v-app-project__category {
  opacity: 0;

  .v-app-project:hover & {
    opacity: 1;
    transition: opacity 150ms 250ms ease-in-out;
  }
}

.v-app-project__year {
  opacity: 0;

  .v-app-project:hover & {
    opacity: 1;
    transition: opacity 150ms 350ms ease-in-out;
  }
}

.v-app-project__img {
  z-index: 10;
  width: 100%;
  aspect-ratio: 2/1;
  object-fit: cover;
  position: relative;

  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  opacity: 1;
  transform: scale(1);

  //.v-app-project:hover & {
  //  opacity: 0;
  //  transform: scale(1.05);
  //}
}
</style>
