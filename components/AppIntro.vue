<template>
    <div class="v-app-intro"
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
</template>





<script setup lang="ts">
import {useAppMapScrollTopInWindow, useAppShowIntro} from "~/composable";

</script>





<style lang="scss" scoped >
.v-app-intro {
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
</style>
