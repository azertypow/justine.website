<template>
    <section
        class="v-index"
    >

      <div class="app-flex"
           v-if="siteInfos"
      >
        <div class="app-flex__col-12 v-index__project-box"
                v-for="project of siteInfos.projectsInfos">
          <AppProject
                  :title="project.title"
                  :category="project.tags.title"
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
import {defineProps, type Ref, type UnwrapRef} from 'vue'
import AppProject from "~/components/AppProject.vue";
import type {ApiSiteInfo} from "~/_utils/ApiDefinitions";
import {fetchSiteInfo} from "~/_utils/ApiFetch";

const siteInfos: Ref<UnwrapRef<null | ApiSiteInfo>> = ref(null)

onMounted(async () => {
    siteInfos.value = await fetchSiteInfo()
})
</script>





<style lang="scss" scoped >
.v-index__project-box {
  &:first-child {
    width: 100%;
  }
}
</style>
