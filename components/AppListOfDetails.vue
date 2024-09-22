<template>
    <section class="v-app-list-of-details"
    >
      <div class="v-app-list-of-details__detail app-flex"
           v-for="detail of data?.content.listofdetails"
      >
        <div class="v-app-list-of-details__detail__name app-flex__col-12 app--width-sm--flex__col-24"  v-html="detail.name"></div>
        <div class="v-app-list-of-details__detail__value app-flex__col-12 app--width-sm--flex__col-24" v-html="detail.value"></div>
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
  &:hover {
    color: var(--app-color-blue);
  }

  @media (max-width: 1200px) {
    & + & {
      margin-top: 1rem;
    }
  }
}

.v-app-list-of-details__detail__name {
  font-weight: 700;

  > :global(*) {
    margin: 0;
  }
}

.v-app-list-of-details__detail__value {
  > :global(*) {
    margin: 0;
  }
}
</style>
