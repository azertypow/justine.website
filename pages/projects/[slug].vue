<template>
    <section
        class="v-projects-slug"
    >
      <AppPage
              v-if="project"
              :content="project"
      />
    </section>
</template>





<script setup lang="ts">

import type {Ref, UnwrapRef} from "vue";
import type {ApiPageContent} from "~/_utils/ApiDefinitions";
import {fetchProjectBySlug} from "~/_utils/ApiFetch";

const project: Ref<UnwrapRef<null | ApiPageContent>> = ref(null)
const route = useRoute()

onMounted(() => {
    loadPageContent()
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
