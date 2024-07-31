<template>
    <section class="v-app-nav"
             :class="{
                'v-app-nav--with-gradient': useAppIsScrolled().value
             }"
    >
      <div class="app-flex app-flex--justify-between app-flex--nowrap">
        <div class="v-app-nav__sections app-flex app-flex--align-center app-flex__col-24">
          <div class="app-with_gutter">Actrice</div>
          <div class="app-with_gutter">Écriture</div>
          <div class="app-with_gutter">Cie Théâtre En Quete</div>
        </div>
        <div class="app-flex__col-24 app-flex app-flex--justify-center app-flex--align-center">
          <NuxtLink href="/">
            <img class="v-app-nav__logo app-display-block"
                 src="/logo.png"
                 alt="logo"
            />
          </NuxtLink>
        </div>
        <div class="v-app-nav__pages app-flex app-flex--justify-end app-flex--align-center app-flex__col-24">
          <div class="app-with_gutter">À propos</div>
          <div class="app-with_gutter">Agenda</div>
          <div class="app-with_gutter">Contact</div>
        </div>
      </div>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'
import {useAppIsScrolled} from "~/composable";

const props = defineProps<{
    message?: string
}>()
</script>





<style lang="scss" scoped >
.v-app-nav {
  height: var(--app-nav-height);
  background: var(--app-color-beige);
}

.v-app-nav--with-gradient {
  box-shadow: 0 10px 20px 0 var(--app-color-blue);
}

.v-app-nav__sections {
  user-select: none;
}

.v-app-nav__logo {
  height: var(--app-nav-height);
}
</style>
