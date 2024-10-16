<template>
    <section
        class="v-agenda"
    >
      <h1>agenda</h1>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    message?: string
}>()
</script>





<style lang="scss" scoped >
.v-agenda {
}
</style>
