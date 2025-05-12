<template>
    <section
        class="v-agenda-list"
    >
        <main class="v-agenda-list__page"
              v-if="projectsInfos && projectsInfos.length > 0"
        >
            <div class="app-flex app-flex--justify-center">
                <div class="app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-22">
                    <h2 class="v-agenda-list__page__title" >Agenda</h2>
                </div>
            </div>

            <div class="app-flex app-flex--justify-center"
                 v-if="projectInfos_now && projectInfos_now.length > 0"
            >

                <div class="app-flex__col-18">
                  <template v-for="project of projectInfos_now">
                    <div class="v-agenda__card">
                        <h3 class="v-agenda__card__title">{{ project.title }}</h3>
                        <p class="v-agenda__card__subtitle">{{ project.subtitle }}</p>
                        <div class="v-agenda__card__img-box">
                            <img class="v-agenda__card__img-box__img"
                                 :src="project.cover[0]?.url || ''"
                                 alt="image de l'événement"
                            />
                            <div class="v-agenda__card__img-box__date" v-if="project.with_dateEnd && project.dateEnd">{{
                                formatDateFromString(project.date)
                              }} - {{ formatDateFromString(project.date) }}</div>
                            <div class="v-agenda__card__img-box__date" v-else>{{
                                formatDateFromString(project.date)
                              }}</div>
                        </div>
                    </div>
                  </template>

                </div>
            </div>

            <div class="app-flex app-flex--justify-center"
                 style="margin-top: 10rem; padding-bottom: 25vh"
            >

                <div class="app-flex__col-18 app--width-reg--flex__col-20 app--width-sm--flex__col-22"
                >
                    <h3 class="v-agenda-list__subtitle">Passé</h3>
                </div>

                <div class="app-flex__col-18 app--width-sm--flex__col-22"
                     v-for="project of projectInfos_past"
                >
                    <nuxt-link  class="v-agenda-list__card"
                                :to="`/projects/${project.slug}`"
                    >
                        <div class="v-agenda-list__card__left">
                            <h3 class="v-agenda-list__card__title">{{project.title}}</h3>
                            <p class="v-agenda-list__card__subtitle">{{project.subtitle}}</p>
                        </div>
                        <div class="v-agenda-list__card__right">
                        <div class="v-agenda-list__card__img-box">
                            <img class="v-agenda-list__card__img-box__img"
                                 :src="project.cover[0]?.url || ''"
                                 alt="image de l'événement"
                            />
                            <div class="v-agenda-list__card__img-box__date" v-if="project.with_dateEnd && project.dateEnd">{{ formatDateFromString(project.date) }} - {{ formatDateFromString(project.dateEnd) }}</div>
                            <div class="v-agenda-list__card__img-box__date" v-else                >{{ formatDateFromString(project.date) }}</div>
                            <div class="v-agenda-list__card__img-box__tags">
                                <div class="v-agenda-list__card__img-box__tags__tag"
                                     v-for="tag of project.tags"
                                >
                                    {{tag.title}}
                                </div>
                            </div>
                        </div>
                        </div>
                    </nuxt-link>

                </div>
            </div>

        </main>
    </section>
</template>





<script setup lang="ts">
import {useAppSiteInfo} from "~/composable";
import AppProject from "~/components/AppProject.vue";
import {formatDateFromString} from "~/_utils/formatDateFromString";
import type {ApiSiteInfo_Project} from "~/_utils/ApiDefinitions";

const siteInfos = useAppSiteInfo()

const projectsInfos: ComputedRef<ApiSiteInfo_Project[] | undefined> = computed(() => siteInfos.value?.projectsInfos.toReversed())

const projectInfos_now    = computed(() => projectsInfos.value?.filter(project => project.with_dateEnd && project.dateEnd ? new Date(project.dateEnd) >= new Date() : new Date(project.date) >= new Date() ))
const projectInfos_past   = computed(() => projectsInfos.value?.filter(project => project.with_dateEnd && project.dateEnd ? new Date(project.dateEnd) < new Date()  : new Date(project.date) < new Date()))

function dateCompare(a: ApiSiteInfo_Project, b: ApiSiteInfo_Project) {

}

</script>





<style lang="scss" scoped >
.v-agenda-list {
    background: var(--app-color-beige);
}

.v-agenda-list__page__title {
    color: var(--app-color-blue);
}

.v-agenda-list__subtitle {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 2rem;
}

.v-agenda-list__card {
    box-sizing: border-box;
    padding: calc( var(--app-gutter) / 2 );
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-bottom: solid 2px;
    color: inherit;

    * {
        margin: 0 !important;
    }

    &:hover {
        background: var(--app-color-blue);
        color: var(--app-color-beige);
    }
}

.v-agenda-list__card__left {
    width: calc(100% / 12 * 6);
    display: flex;
    flex-direction: column;
    gap: .25rem;

    @media (max-width: 750px) {
        width: 100%;
    }
}

.v-agenda-list__card__right {
    width: calc(100% / 12 * 6);
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 750px) {
        width: 100%;
        align-items: flex-start;
        margin-top: 1rem !important;
    }
}

.v-agenda-list__card__title {
    margin-bottom: 1rem;
}

.v-agenda-list__card__subtitle {
    font-size: 1rem;
    line-height: 1em;
    margin-top: 1rem;
}

.v-agenda-list__card__img-box {
    position: relative;
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: .25rem;

    @media (max-width: 750px) {
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
}

.v-agenda-list__card__img-box__img {
    display: none;
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    position: absolute;
    top: 100%;
    right: calc(-1 * var(--app-gutter--small) );
    z-index: 10;
    pointer-events: none;

    .v-agenda-list__card:hover & {
        display: block;
    }
}

.v-agenda-list__card__img-box__date {
    bottom: var(--app-gutter);
    left: var(--app-gutter);
}

.v-agenda-list__card__img-box__tags {
    display: flex;
    justify-content: flex-end;
    gap: var(--app-gutter--small);
    color: var(--app-color-beige);
}

.v-agenda-list__card__img-box__tags__tag {
    font-size: .75rem;
    padding: .25rem .75rem;
    background: var(--app-color-blue);
    display: inline-block;
    border-radius: 1rem;
    white-space: nowrap;
}


//-----
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
