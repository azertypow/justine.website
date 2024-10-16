<template>
    <section class="v-app-list-of-details"
    >
      <div class="v-app-list-of-details__detail"
           v-for="detail of data?.content.listofdetails"
      >
        <div class="v-app-list-of-details__detail__name"  v-html="detail.name"></div>
        <div>&nbsp;—&nbsp;</div>
        <div class="v-app-list-of-details__detail__value" v-html="detail.value"></div>
      </div>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'
import type {ApiPageContentListOfDetails} from "~/_utils/ApiDefinitions";

defineProps<{
    data?: ApiPageContentListOfDetails
}>()
</script>





<style lang="scss" scoped >
.v-app-list-of-details {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.v-app-list-of-details__detail {
  > * {
    display: inline;
  }

  @media (max-width: 1200px) {
    & + & {
      margin-top: 1rem;
    }
  }
}

.v-app-list-of-details__detail__name {
  display: inline;

}
:global(.v-app-list-of-details__detail__name > p) {
  display: inline;
  margin: 0;
}

.v-app-list-of-details__detail__value {
  font-weight: 600;
  display: inline;

}
:global(.v-app-list-of-details__detail__value > *) {
  display: inline;
  margin: 0;
}
</style>
