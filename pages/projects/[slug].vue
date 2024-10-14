<template>
    <section
        class="v-projects-slug"
    >
      <AppPage
              v-if="project"
              :content="project"
      />

      <div style="width: 100%; display: flex; justify-content: center; padding-top: 10rem; padding-bottom: 10rem;">
        <nuxt-link href="/" class="v-projects-slug__link-button" ><div>Retour aux projets</div></nuxt-link>
      </div>

    </section>
</template>





<script setup lang="ts">

import type {Ref, UnwrapRef} from "vue";
import type {ApiPageContent} from "~/_utils/ApiDefinitions";
import {fetchProjectBySlug} from "~/_utils/ApiFetch";
import {useAppArrayOfCurrentProjectFilter} from "~/composable";

const project: Ref<UnwrapRef<null | ApiPageContent>> = ref(null)
const route = useRoute()

onMounted(() => {
    loadPageContent().then(() => {
        useAppArrayOfCurrentProjectFilter().value = project.value?.tags.map(value => value.title) || []
    })
})

async function loadPageContent() {
    if( typeof route.params.slug !== 'string') return
    project.value = await fetchProjectBySlug(route.params.slug)
}


</script>





<style lang="scss" scoped >
.v-projects-slug {
  background-color: var(--app-color-beige);
}

.v-projects-slug__link-button {
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
  //background-color: rgba(21, 120, 225, .15);
  box-shadow: 0px 0px 10px 10px var(--app-color-blue);
}
</style>
