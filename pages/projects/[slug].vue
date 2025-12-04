<template>
    <section
        class="v-projects-slug"
    >
      <AppPage
              v-if="project"
              :content="project"
      />

      <div style="width: 100%; display: flex; justify-content: center; padding-top: 10rem; padding-bottom: 10rem;">
        <AppButtonCircle text="Retour aux projets" href="/" />
      </div>

    </section>
</template>





<script setup lang="ts">

import type {Ref, UnwrapRef} from "vue";
import type {ApiPageContent} from "~/_utils/ApiDefinitions";
import {fetchProjectBySlug} from "~/_utils/ApiFetch";
import {useAppArrayOfCurrentProjectFilter} from "~/composable";
import AppButtonCircle from "~/components/AppButtonCircle.vue";
import {scrollToTop} from "~/composable/scrollToTop";

definePageMeta({
  pageTransition: {
    onBeforeEnter: () => {
      scrollToTop()
    },
  },
})

const project: Ref<UnwrapRef<null | ApiPageContent>> = ref(null)
const route = useRoute()

onMounted(() => {
    loadPageContent().then(() => {
        useAppArrayOfCurrentProjectFilter().value = project.value?.tags.map(value => value.uri) || []
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

</style>
