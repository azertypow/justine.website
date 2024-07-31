<template>
    <main class="v-app-page"
    >
      <header class="v-app-page__header"
              :style="{
                backgroundImage: `url(${content.imageCover})`,
              }"
      >
        <div class="app-flex app-flex--justify-center">
          <div class="app-flex__col-18">
            <h2 class="v-app-page__title" >{{content.title}}</h2>
            <h3 class="v-app-page__category" >{{content.category}}</h3>
          </div>
        </div>
      </header>
      <div class="app-flex app-flex--justify-center">

        <div class="app-flex__col-18"
             v-if="content.intro"
        >
          <div class="v-app-page__intro" v-html="content.intro"/>
        </div>

        <template v-for="blockContent of content.content">

          <template v-if="blockContent.type === 'title'">
            <div class="app-flex__col-18">
              <h2 v-if="blockContent.level === 'h2'">{{blockContent.value}}</h2>
              <h3 v-else-if="blockContent.level === 'h3'">{{blockContent.value}}</h3>
              <div v-else>{{blockContent.value}}</div>
            </div>
          </template>

          <template v-if="blockContent.type === 'image'">
            <div class="app-flex__col-24"
                 v-if="blockContent.isFull"
            >
              <img :src="blockContent.src">
            </div>
            <div class="app-flex__col-14"
                 v-else
            >
              <img :src="blockContent.src">
            </div>
          </template>

          <template v-if="blockContent.type === 'body'">
            <div class="app-flex__col-16"
                 v-html="blockContent.content"
            ></div>
          </template>

        </template>
      </div>
    </main>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'
import type {ApiPageContent} from "~/_utils/ApiDefinitions";

const props = defineProps<{
    content: ApiPageContent
}>()
</script>





<style lang="scss" scoped >
.v-app-page__header {
  height: calc(100vh - var(--app-nav-height) );
  background-size: cover;
  margin-bottom: 2rem;
}

.v-app-page__intro {
  font-size: 1.25rem;
}

img {
  display: block;
  width: 100%;
}

.v-app-page__title {
  color: var(--app-color-blue);
}

.v-app-page__category {
  color: var(--app-color-blue);
}
</style>
