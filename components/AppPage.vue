<template>
    <main class="v-app-page"
    >
      <header class="v-app-page__header"
              :style="{
                backgroundImage: `url(${content.cover[0].resize.xxl})`,
                backgroundPosition: content.cover[0].focus || '50% 50%',
              }"
      >
        <div class="app-flex app-flex--justify-center">
          <div class="app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-22">
            <h2 class="v-app-page__title" >{{content.title}}</h2>
            <h3 class="v-app-page__subtitle">{{content.subtitle}}</h3>
          </div>
        </div>
        <div class="v-app-page__header__credit"
             v-if="content.cover[0].photoCredit"
             :style="{color: (content.cover[0].textColor && content.cover[0].textColor.value === 'dark' )? 'black' : 'var(--app-color-beige)'}"
        >{{content.cover[0].textColor}}</div>
      </header>
      <div class="app-flex app-flex--justify-center">

        <div class="app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-22"
             v-if="content.introduction"
        >
          <div class="v-app-page__intro" v-html="content.introduction"/>
        </div>

        <template v-for="blockContent of content.htmlcontent">

          <template v-if="blockContent.type === 'heading'">
            <div class="app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-22">
              <h2 v-if="blockContent.content.level === 'h2'">{{ blockContent.content.text }}</h2>
              <h3 v-else-if="blockContent.content.level === 'h3'">{{ blockContent.content.text }}</h3>
              <div v-else>{{ blockContent.content.text }}</div>
            </div>
          </template>

          <template v-if="blockContent.type === 'image'">
            <div class="v-app-page__block__image v-app-page__block__image--full app-flex__col-24 app--width-sm--flex__col-22"
                 v-if="blockContent.content.isfullwidth === 'true'"
            >
              <img :src="blockContent.images[0]?.url" :alt="blockContent.images[0]?.alt || 'Image du projet'">
            </div>
            <div class="v-app-page__block__image app-flex__col-14 app--width-reg--flex__col-16 app--width-sm--flex__col-22"
                 v-else
                 :class="{
                    'v-app-page__block__image--horizontal': blockContent.images[0]?.height > blockContent.images[0]?.width
                 }"
            >
              <img :src="blockContent.images[0]?.url" alt="image de projet">
              <div class="v-app-page__block__image__credits"
                   v-if="blockContent.images[0]?.photoCredit"
                   :style="{color: (blockContent.images[0].textColor && blockContent.images[0].textColor.value === 'dark' )? 'black' : 'var(--app-color-beige)'}"
              >{{blockContent.images[0].photoCredit}}</div>
            </div>
          </template>

          <template v-if="blockContent.type === 'imageGallery'">
            <div class="v-app-page__block__gallery app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-24">
              <div class="v-app-page__gallery-cache">
                <div class="v-app-page__gallery"
                     style="padding-top: 0"
                     v-if="blockContent.images.length > 0"
                >
                  <div class="v-app-page__gallery__item--scroll-spacing"></div>
                  <div v-for="item of blockContent.images"
                       class="v-app-page__gallery__item"
                  >
                    <img :src="item.resize.xxl"
                         alt="image"
                         class="v-app-page__gallery__item__img"
                    />
                    <div v-if="item.photoCredit" class="v-app-page__gallery__item__credit">{{item.photoCredit}}</div>
                  </div>
                  <div class="v-app-page__gallery__item--scroll-spacing"></div>
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
            <div class="v-app-page__block__quote app-flex__col-16 app--width-reg--flex__col-18 app--width-sm--flex__col-22"
                 v-html="blockContent.content.text"
            ></div>
          </template>

          <template v-if="blockContent.type === 'listOfDetails'">
            <div class="app-flex__col-16 app--width-reg--flex__col-18 app--width-sm--flex__col-22 v-app-page__list-details">
              <AppListOfDetails
                      :data="blockContent"
              />
            </div>
          </template>

        </template>
      </div>

      <div class="app-flex app-flex--justify-center">
        <div class="app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-24">
          <div class="v-app-page__gallery-cache">
            <div class="v-app-page__gallery"
                 v-if="content.galleryproject.length > 0"
            >
              <div class="v-app-page__gallery__item--scroll-spacing"></div>
              <div v-for="item of content.galleryproject"
                   class="v-app-page__gallery__item"
              >
                <img :src="item.images[0].resize.xxl"
                     alt="image"
                     class="v-app-page__gallery__item__img"
                />
                <div v-if="item.images[0].photoCredit" class="v-app-page__gallery__item__credit">{{item.images[0].photoCredit}}</div>
              </div>
              <div class="v-app-page__gallery__item--scroll-spacing"></div>
            </div>
          </div>
        </div>
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
  background-position: 75% center;
  position: relative;
}

.v-app-page__header__credit {
  position: absolute;
  bottom: 0;
  background: var(--app-color-beige);
  font-size: .75rem;
  padding: .5rem;
}
.v-app-page__block__image__credits {
  position: absolute;
  bottom: 0;
  color: var(--app-color-beige);
  font-size: .75rem;
  padding: .5rem;
}

.v-app-page__block__image {
    margin-top:     3rem;
    margin-bottom:  3rem;
    position: relative;

    & + & {
        margin-top: -2rem;
    }

    &:last-child {
        margin-bottom: 0;
    }


    &.v-app-page__block__image--horizontal {
      @media (min-width: 1200px) {
        box-sizing: border-box;
        padding-left: calc(100% / 24 * 1);
        padding-right: calc(100% / 24 * 1);
        width: calc(100% / 24 * 12);
      }
    }
}

.v-app-page__intro {
  :deep(p) {
    font-size: 1.325rem;
    line-height: 1.25em;
  }
}

img {
  display: block;
  width: 100%;
}

.v-app-page__title {
  color: var(--app-color-blue);
}

.v-app-page__subtitle {
  color: var(--app-color-blue);
}

.v-app-page__category {
  color: var(--app-color-blue);
}

.v-app-page__block__quote {
  color: var(--app-color-blue);
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.v-app-page__gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  gap: var(--app-gutter);
  box-sizing: border-box;
  scroll-snap-type: x mandatory;
  padding-top: 1rem;
}

.v-app-page__gallery-cache {
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

.v-app-page__list-details {
  margin-bottom: 1rem;
}

.v-app-page__gallery__item {
  display: block;
  scroll-snap-align: start;
  position: relative;
}

.v-app-page__gallery__item__credit {
  position: absolute;
  bottom: 0;
  background: var(--app-color-beige);
  font-size: .75rem;
  padding: .5rem;
}

.v-app-page__gallery__item__img {
  display: block;
  height: 50vh;
  width: auto;
}

.v-app-page__gallery__item--scroll-spacing {
  display: block;
  padding-left: 50vw;
}
</style>
