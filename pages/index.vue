<template>
    <section class="v-index"
    >
      <div class="v-index__intro"
           v-if="useAppShowIntro().value"
           @click="useAppShowIntro().value = false"
           :style="{
              opacity: useAppMapScrollTopInWindow().value,
           }"
      >
        <div>
          <p>Je suis furieuse contre une société qui m'a éduqué dans jamais apprendre a blesser un homme s'il m'écarte les cuisses de force, alors que cette même société m'a inculqué l'idée que c'était un crime dont je ne devais pas me remettre.</p>
          <p>Virginie Despente, King Kong Théorie</p>
        </div>
      </div>
      <div class="app-flex"
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
          />
        </div>
      </div>
    </section>
</template>





<script setup lang="ts">
import AppProject from "~/components/AppProject.vue";
import {
    useAppActiveFilter, useAppMapScrollTopInWindow,
    useAppShowIntro,
    useAppSiteInfo
} from "~/composable";
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

    if(activeFilter === null) return siteInfos.value?.projectsInfos.toReversed()

    return siteInfos.value?.projectsInfos.filter((value) => {
        return value.tags.map(value => value.title).includes(activeFilter)
    }).toReversed()
})

</script>





<style lang="scss" scoped >
.v-index {
  padding-bottom: 1.5rem;
}

.v-index__intro {
  background: var(--app-color-blue);
  box-sizing: border-box;
  padding-left: var(--app-gutter);
  padding-right: var(--app-gutter);
  width: 100%;
  height: calc( 100% - var(--app-nav-height));
  position: fixed;
  top: var(--app-nav-height);
  left: 0;
  z-index: 1000;
  color: var(--app-color-beige);
  text-align: center;
  font-size: 2.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;

  > * {
    max-width: 25em;
  }
}

.v-index__project-box {
  &:first-child {
    width: 100%;
  }
}
</style>
