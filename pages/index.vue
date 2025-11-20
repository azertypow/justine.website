<template>
    <section class="v-index"
    >
      <div class="app-flex app-flex--justify-center"
           v-if="siteInfos"
      >
        <div class="app-flex__col-12 app--width-reg--flex__col-24 v-index__project-box"
                v-for="project of projectToShow">
          <AppProject
                  :title="project.title"
                  :category="project.tags"
                  :src="project.cover[0]?.url || ''"
                  :year="project.date"
                  :slug="project.slug"
                  :subtitle="project.subtitle"
                  :focus="project.cover[0]?.focus"
          />
        </div>
        <div class="app-flex__col-12 app--width-reg--flex__col-24 v-index__project-box app-flex app-flex--justify-center"
             style="padding-top: 2rem; padding-bottom: 2rem"
        >
          <AppButtonCircle :variant="true" href="/a-propos" text="À propos"/>
        </div>
      </div>
    </section>
</template>





<script setup lang="ts">
import AppProject from "~/components/AppProject.vue";
import {
    useAppActiveFilter,
    useAppSiteInfo
} from "~/composable";
import type {ApiImage, ApiTags} from "~/_utils/ApiDefinitions";
import {scrollToTop} from "~/composable/scrollToTop";

definePageMeta({
  pageTransition: {
    onBeforeEnter: () => {
      scrollToTop()
    },
  },
})

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

    const projectsToShow = siteInfos.value?.projectsInfos.filter((value) => !value.hidde_in_home)

    if(activeFilter === null) return projectsToShow?.slice().reverse()

    return siteInfos.value?.projectsInfos.filter((value) => {
        return value.tags.map(value => value.uri).includes(activeFilter)
    }).slice().reverse()
})

onBeforeMount(() =>{
    const urlQueryPram = useRouter().currentRoute.value.query.q

    if(typeof urlQueryPram !== 'string') return

    useAppActiveFilter().value =  urlQueryPram
})

</script>





<style lang="scss" >
</style>
