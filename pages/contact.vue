<template>
    <section
        class="v--slug"
    >
      <main class="v--slug__page"
      >
        <div class="app-flex app-flex--justify-center">
          <div class="app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-22">
            <h2 class="v--slug__page__title" >Contact</h2>
          </div>
        </div>
        <div class="app-flex app-flex--justify-center">

          <div class="app-flex__col-16 app--width-reg--flex__col-18 app--width-sm--flex__col-22"
               v-if="contactContent"
          >
            <div v-html="contactContent.data.textcontact"/>
          </div>

          <div class="v--slug__page__block__image app-flex__col-14 app--width-reg--flex__col-16 app--width-sm--flex__col-22"
               v-if="contactContent?.data.mapImage && !contactContent.data.mapLien"
          >
            <img :src="contactContent?.data.mapImage.resize.large" alt="image de projet">
            <div class="v--slug__page__block__image__credits"
                 v-if="contactContent?.data.mapImage.photoCredit"
                 :style="{color: (contactContent?.data.mapImage.textColor && contactContent?.data.mapImage.textColor.value === 'dark' )? 'black' : 'var(--app-color-beige)'}"
            >{{contactContent?.data.mapImage.photoCredit}}</div>
          </div>

          <a class="v--slug__page__block__image app-flex__col-14 app--width-reg--flex__col-16 app--width-sm--flex__col-22"
             v-else-if="contactContent?.data.mapImage && contactContent.data.mapLien"
             :href="contactContent.data.mapLien"
             target="_blank"
          >
            <img :src="contactContent?.data.mapImage.resize.large" alt="image de projet">
            <div class="v--slug__page__block__image__credits"
                 v-if="contactContent?.data.mapImage.photoCredit"
                 :style="{color: (contactContent?.data.mapImage.textColor && contactContent?.data.mapImage.textColor.value === 'dark' )? 'black' : 'var(--app-color-beige)'}"
            >{{contactContent?.data.mapImage.photoCredit}}</div>
          </a>

        </div>


      </main>
    </section>
</template>





<script setup lang="ts">
import {fetchContact} from "~/_utils/ApiFetch";
import {youtubeGetVideoIDFromURL} from "~/_utils/YouTube";
import type {UnwrapRef} from "vue";
import type {ApiPageContact} from "~/_utils/ApiDefinitions";

const contactContent: Ref<UnwrapRef<null | ApiPageContact>> = ref(null)


onMounted(async () => {
    contactContent.value = await fetchContact()
})


</script>





<style lang="scss" scoped >
.v--slug {
  background: var(--app-color-beige);
}

.v--slug__page {
  min-height: calc( 100vh - var(--app-footer-height) - var(--app-nav-height));
  box-sizing: border-box;
  padding-bottom: 2rem;
}

.v--slug__page__block__image__credits {
  position: absolute;
  bottom: 0;
  color: var(--app-color-beige);
  font-size: .75rem;
  padding: .5rem;
}

.v--slug__page__block__image {
  margin-top:     3rem;
  margin-bottom:  3rem;
  position: relative;

  & + & {
    margin-top: -2rem;
  }

  &:last-child {
    margin-bottom: 0;
  }


  &.v--slug__page__block__image--horizontal {
    @media (min-width: 1200px) {
      box-sizing: border-box;
      padding-left: calc(100% / 24 * 1);
      padding-right: calc(100% / 24 * 1);
      width: calc(100% / 24 * 12);
    }
  }
}

.v--slug__page__intro {
  :deep(p) {
    font-size: 1.325rem;
    line-height: 1.25em;
  }
}


img {
  display: block;
  width: 100%;
}

.v--slug__page__title {
  color: var(--app-color-blue);
}

.v--slug__page__subtitle {
  color: var(--app-color-blue);
}

.v--slug__page__category {
  color: var(--app-color-blue);
}

.v--slug__page__block__quote {
  color: var(--app-color-blue);
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.v--slug__page__gallery {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  gap: var(--app-gutter);
  box-sizing: border-box;
  scroll-snap-type: x mandatory;
  padding-top: 1rem;
}

.v--slug__page__gallery-cache {
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

.v--slug__page__list-details {
  margin-bottom: 1rem;
}

.v--slug__page__gallery__item {
  display: block;
  scroll-snap-align: start;
  position: relative;
}

.v--slug__page__gallery__item__credit {
  position: absolute;
  bottom: 0;
  background: var(--app-color-beige);
  font-size: .75rem;
  padding: .5rem;
}

.v--slug__page__gallery__item__img {
  display: block;
  height: 50vh;
  width: auto;
}

.v--slug__page__gallery__item--scroll-spacing {
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
