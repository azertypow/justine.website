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

onMounted(() => {
    project.value = fetchProjectBySlug()
})


</script>





<style lang="scss" scoped >
.v-projects-slug {
  background-color: var(--app-color-beige);
}
</style>
