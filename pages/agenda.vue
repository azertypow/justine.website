<template>
  <section
          class="v-agenda"
  >
    <main class="v-agenda__page"
    >
      <div class="app-flex app-flex--justify-center">
        <div class="app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-22">
          <h2 class="v-agenda__page__title" >Agenda</h2>
        </div>
      </div>

      <div class="app-flex app-flex--justify-center">

        <div class="app-flex__col-18 app--width-reg--flex__col-24">
          <h3 class="v-agenda__subtitle">Actuellement</h3>
        </div>

        <div class="app-flex__col-18"
             v-for="project of siteInfos?.projectsInfos">

          <div class="v-agenda__card">
            <h3 class="v-agenda__card__title">{{project.title}}</h3>
            <p class="v-agenda__card__subtitle">{{project.subtitle}}</p>
            <div class="v-agenda__card__img-box">
              <img class="v-agenda__card__img-box__img"
                   :src="project.cover[0]?.url || ''"
                   alt="image de l'événement"
              />
              <div class="v-agenda__card__img-box__date">{{ formatDateFromString(project.date) }} - {{ formatDateFromString('10.01.2025') }}</div>
            </div>
          </div>

        </div>
      </div>

      <div class="app-flex app-flex--justify-center"
           style="margin-top: 10rem; padding-bottom: 25vh"
      >

        <div class="app-flex__col-18 app--width-reg--flex__col-24"
        >
          <h3 class="v-agenda__subtitle">Passé</h3>
        </div>

        <div class="app-flex__col-18"
             v-for="project of siteInfos?.projectsInfos"
        >

          <div class="v-agenda__card">
            <h3 class="v-agenda__card__title">{{project.title}}</h3>
            <p class="v-agenda__card__subtitle">{{project.subtitle}}</p>
            <div class="v-agenda__card__img-box">
              <img class="v-agenda__card__img-box__img"
                   :src="project.cover[0]?.url || ''"
                   alt="image de l'événement"
              />
              <div class="v-agenda__card__img-box__date">{{ formatDateFromString(project.date) }} - {{ formatDateFromString('10.01.2025') }}</div>
            </div>
          </div>

        </div>
      </div>

    </main>
  </section>
</template>





<script setup lang="ts">
import {useAppSiteInfo} from "~/composable";
import AppProject from "~/components/AppProject.vue";
import {formatDateFromString} from "~/_utils/formatDateFromString";

const siteInfos = useAppSiteInfo()

</script>





<style lang="scss" scoped >
.v-agenda {
  background: var(--app-color-beige);
}

.v-agenda__page__title {
  color: var(--app-color-blue);
}

.v-agenda__subtitle {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 2rem;
}

.v-agenda__card {
  box-sizing: border-box;
  padding: calc( var(--app-gutter) / 2 );
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: solid 2px;

  * {
    margin: 0 !important;
  }

  &:hover {
    background: var(--app-color-blue);
    color: var(--app-color-beige);
  }
}

.v-agenda__card__title {
  margin-bottom: 1rem;
  width: calc(100% / 12 * 6);
}

.v-agenda__card__subtitle {
  font-size: 1rem;
  line-height: 1em;
  margin-top: 1rem;
  width: calc(100% / 12 * 3);
}

.v-agenda__card__img-box {
  position: relative;
  width: calc(100% / 12 * 3);
  text-align: right;
}

.v-agenda__card__img-box__img {
  display: none;
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  position: absolute;
  z-index: 10;

  .v-agenda__card:hover & {
    display: block;
  }
}

.v-agenda__card__img-box__date {
  bottom: var(--app-gutter);
  left: var(--app-gutter);
}

</style>
