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

        <div class="app-flex__col-18">

          <div class="v-agenda__card">
            <h3 class="v-agenda__card__title">{{siteInfos?.projectsInfos[0].title}}</h3>
            <p class="v-agenda__card__subtitle">{{siteInfos?.projectsInfos[0].subtitle}}</p>
            <div class="v-agenda__card__img-box">
              <img class="v-agenda__card__img-box__img"
                   :src="siteInfos?.projectsInfos[0].cover[0]?.url || ''"
                   alt="image de l'événement"
              />
              <div class="v-agenda__card__img-box__date">{{siteInfos?.projectsInfos[0].date}}</div>
            </div>
          </div>

        </div>
      </div>


      <div class="app-flex app-flex--justify-center"
             style="margin-top: 10rem; padding-bottom: 25vh"
      >

        <div class="app-flex__col-2"></div>

        <div class="app-flex__col-20">
          <h3 class="v-agenda__subtitle">Passé</h3>
        </div>


        <div class="app-flex__col-18">
          <div class="app-flex app-flex--justify-center"
               style="row-gap: 2rem"
          >
            <div class="app-flex__col-8"
                 v-for="project of siteInfos?.projectsInfos">

              <div class="v-agenda__card">
                <h3 class="v-agenda__card__title">{{project.title}}</h3>
                <p class="v-agenda__card__subtitle">{{project.subtitle}}</p>
                <div class="v-agenda__card__img-box">
                  <img class="v-agenda__card__img-box__img"
                       :src="project.cover[0]?.url || ''"
                       alt="image de l'événement"
                  />
                  <div class="v-agenda__card__img-box__date">{{project.date}}</div>
                </div>
              </div>

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
}

.v-agenda__card__title {
  margin-bottom: .5rem;
  margin-top: 0;
}

.v-agenda__card__subtitle {
  line-height: 1em;
  margin-top: 0;
}

.v-agenda__card__img-box {
  position: relative;

}

.v-agenda__card__img-box__img {
  display: block;
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
}

.v-agenda__card__img-box__date {
  color: white;
  position: absolute;
  bottom: var(--app-gutter);
  left: var(--app-gutter);
}

</style>
