<template>
    <section
        class="v-app-button-circle"
        :class="{
          'is-variant': variant
        }"
    >
      <nuxt-link :href="href" class="v-app-button-circle__link-button" ><div>{{text}}</div></nuxt-link>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    text: string
    href: string
    variant?: boolean
}>()
</script>





<style lang="scss" scoped >
.v-app-button-circle {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.v-app-button-circle__link-button {
  background-color: var(--app-color-blue);
  color: var(--app-color-beige);
  font-weight: 600;
  padding: var(--app-gutter);
  border-radius: 10rem;
  margin: auto;
  user-select: none;
  cursor: pointer;
  text-align: center;
  height: 10rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
  box-shadow: 0 0 10px 10px var(--app-color-blue);

  .is-variant & {
    box-shadow: 0 0 10px 10px var(--app-color-beige);
    background-color: var(--app-color-beige);
    color: var(--app-color-blue);
  }
}
</style>
