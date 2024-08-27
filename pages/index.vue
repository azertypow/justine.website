<template>
    <section class="v-index"
    >
      <div class=""></div>
      <div class="app-flex"
           v-if="siteInfos"
      >
        <div class="app-flex__col-12 v-index__project-box"
                v-for="project of projectToShow">
          <AppProject
                  :title="project.title"
                  :category="project.tags"
                  :src="project.cover[0]?.url || ''"
                  :year="project.date"
                  :slug="project.slug"
                  :subtitle="project.subtitle"
          />
        </div>
      </div>
    </section>
</template>





<script setup lang="ts">
import AppProject from "~/components/AppProject.vue";
import {useAppActiveFilter, useAppSiteInfo} from "~/composable";
import type {ApiImage, ApiTags} from "~/_utils/ApiDefinitions";

const siteInfos = useAppSiteInfo()
const appActiveFilter: Ref<string | null> = useAppActiveFilter()

const projectToShow: ComputedRef<{
    cover: ApiImage[];
    title: string;
    date: string;
    tags: ApiTags[];
    slug: string;
    subtitle: string
}[] | undefined> = computed(() => {
    const activeFilter = appActiveFilter.value

    if(activeFilter === null) return siteInfos.value?.projectsInfos

    return siteInfos.value?.projectsInfos.filter((value) => {
        return value.tags.map(value => value.title).includes(activeFilter)
    })
})

</script>





<style lang="scss" scoped >
.v-index {
  padding-bottom: 1.5rem;
}

.v-index__project-box {
  &:first-child {
    width: 100%;
  }
}
</style>
