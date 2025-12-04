<template>
    <section
        class="v-a-propos"
    >
      <main class="v-a-propos__page"
      >
        <div class="app-flex app-flex--justify-center">
          <div class="app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-22">
            <h2 class="v-a-propos__page__title" >{{aProposContent?.data.aboutTitle || 'Contact'}}</h2>
          </div>
        </div>
        <div class="app-flex app-flex--justify-center">

          <template v-for="blockContent of aProposContent?.data.textabout">

            <template v-if="blockContent.type === 'heading'">
              <div class="app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-22">
                <h2 v-if="blockContent.content.level === 'h2'">{{ blockContent.content.text }}</h2>
                <h3 v-else-if="blockContent.content.level === 'h3'">{{ blockContent.content.text }}</h3>
                <div v-else>{{ blockContent.content.text }}</div>
              </div>
            </template>

            <template v-if="blockContent.type === 'image'">
              <div class="v-a-propos__block__image v-a-propos__block__image--full app-flex__col-24 app--width-sm--flex__col-22"
                   v-if="blockContent.content.isfullwidth === 'true'"
              >
                <img :src="blockContent.images[0]?.url" :alt="blockContent.images[0]?.alt || 'Image du projet'">
                <div class="v-a-propos__block__image__credits"
                     v-if="blockContent.images[0]?.photoCredit"
                     :style="{color: (blockContent.images[0].textColor && blockContent.images[0].textColor.value === 'dark' )? 'black' : 'var(--app-color-beige)'}"
                >{{blockContent.images[0].photoCredit}}</div>
              </div>
              <div class="v-a-propos__block__image app-flex__col-14 app--width-reg--flex__col-16 app--width-sm--flex__col-22"
                   v-else
                   :class="{
                      'v-a-propos__block__image--horizontal': blockContent.images[0]?.height > blockContent.images[0]?.width
                   }"
              >
                <img :src="blockContent.images[0]?.url" alt="image de projet">
                <div class="v-a-propos__block__image__credits"
                     v-if="blockContent.images[0]?.photoCredit"
                     :style="{color: (blockContent.images[0].textColor && blockContent.images[0].textColor.value === 'dark' )? 'black' : 'var(--app-color-beige)'}"
                >{{blockContent.images[0].photoCredit}}</div>
              </div>
            </template>

            <template v-if="blockContent.type === 'video'">
              <div class="v-a-propos__block__image v-a-propos__block__image--full app-flex__col-24 app--width-sm--flex__col-22"
                   v-if="blockContent.content.isfullwidth === 'true'"
              >
                <iframe width="560" height="315"
                        :src="`https://www.youtube.com/embed/${youtubeGetVideoIDFromURL(blockContent.content.url)}` || ''"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div class="v-a-propos__block__image__credits"
                     v-if="blockContent.content.credit"
                >{{blockContent.content.credit}}</div>
              </div>
              <div class="v-a-propos__block__image app-flex__col-14 app--width-reg--flex__col-16 app--width-sm--flex__col-22"
                   v-else
              >
                <iframe width="560" height="315"
                        :src="`https://www.youtube.com/embed/${youtubeGetVideoIDFromURL(blockContent.content.url)}` || ''"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div class="v-a-propos__block__image__credits"
                     v-if="blockContent.content.credit"
                >{{blockContent.content.credit}}</div>
              </div>
            </template>



            <template v-if="blockContent.type === 'imageGallery'">
              <div class="v-a-propos__block__gallery app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-24">
                <div class="v-a-propos__gallery-cache">
                  <div class="v-a-propos__gallery"
                       style="padding-top: 0"
                       v-if="blockContent.images.length > 0"
                  >
                    <div class="v-a-propos__gallery__item--scroll-spacing"></div>
                    <div v-for="item of blockContent.images"
                         class="v-a-propos__gallery__item"
                    >
                      <img :src="item.resize.xxl"
                           alt="image"
                           class="v-a-propos__gallery__item__img"
                      />
                      <div v-if="item.photoCredit" class="v-a-propos__gallery__item__credit">{{item.photoCredit}}</div>
                    </div>
                    <div class="v-a-propos__gallery__item--scroll-spacing"></div>
                  </div>
                </div>
              </div>
            </template>

            <template v-if="blockContent.type === 'text'">
              <div class="app-flex__col-16 app--width-reg--flex__col-18 app--width-sm--flex__col-22"
                   v-html="blockContent.content.text"
              ></div>
            </template>

            <template v-if="blockContent.type === 'quote'">
              <div class="v-a-propos__block__quote app-flex__col-16 app--width-reg--flex__col-18 app--width-sm--flex__col-22"
                   v-html="blockContent.content.text"
              ></div>
            </template>

            <template v-if="blockContent.type === 'listOfDetails'">
              <div class="app-flex__col-16 app--width-reg--flex__col-18 app--width-sm--flex__col-22 v-a-propos__list-details">
                <AppListOfDetails
                        :data="blockContent"
                />
              </div>
            </template>

          </template>
        </div>
      </main>
    </section>
</template>





<script setup lang="ts">
import {type UnwrapRef} from 'vue'
import {youtubeGetVideoIDFromURL} from "~/_utils/YouTube";
import type {ApiPageAbout} from "~/_utils/ApiDefinitions";
import {fetchAPropos} from "~/_utils/ApiFetch";
import {scrollToTop} from "~/composable/scrollToTop";

definePageMeta({
  pageTransition: {
    onBeforeEnter: () => {
      scrollToTop()
    },
  },
})

const aProposContent: Ref<UnwrapRef<null | ApiPageAbout>> = ref(null)

onMounted(async () => {
    aProposContent.value = await fetchAPropos()
})
</script>





<style lang="scss" scoped >
.v-a-propos {
  background: var(--app-color-beige);
}

.v-a-propos__page__title {
  color: var(--app-color-blue);
}

img {
  display: block;
  width: 100%;
}

.v-a-propos__page {
  min-height: calc( 100vh - var(--app-footer-height) - var(--app-nav-height));
  box-sizing: border-box;
}

.v-a-propos__block__image__credits {
  position: absolute;
  bottom: 0;
  color: var(--app-color-beige);
  font-size: .75rem;
  padding: .5rem;
}

.v-a-propos__block__image {
  margin-top:     3rem;
  margin-bottom:  3rem;
  position: relative;

  & + & {
    margin-top: -2rem;
  }

  &:last-child {
    margin-bottom: 0;
  }


  &.v-a-propos__block__image--horizontal {
    @media (min-width: 1200px) {
      box-sizing: border-box;
      padding-left: calc(100% / 24 * 1);
      padding-right: calc(100% / 24 * 1);
      width: calc(100% / 24 * 12);
    }
  }
}



.v-a-propos__block__quote {
  color: var(--app-color-blue);
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.v-a-propos__gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  gap: var(--app-gutter);
  box-sizing: border-box;
  scroll-snap-type: x mandatory;
  padding-top: 1rem;
}

.v-a-propos__gallery-cache {
  position: relative;

  &:before,
  &:after {
    content: '';
    display: block;
    height: 100%;
    width: 1rem;
    position: absolute;
    top: 0;
  }
  &:after {
    background: linear-gradient(to left, #fff5e6FF, #fff5e600);
    right: 0;
  }
}

.v-a-propos__list-details {
  margin-bottom: 1rem;
}

.v-a-propos__gallery__item {
  display: block;
  scroll-snap-align: start;
  position: relative;
}

.v-a-propos__gallery__item__credit {
  position: absolute;
  bottom: 0;
  background: var(--app-color-beige);
  font-size: .75rem;
  padding: .5rem;
}

.v-a-propos__gallery__item__img {
  display: block;
  height: 50vh;
  width: auto;
}

.v-a-propos__gallery__item--scroll-spacing {
  display: block;
  padding-left: 50vw;
}


iframe {
  display: block;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
}
</style>
