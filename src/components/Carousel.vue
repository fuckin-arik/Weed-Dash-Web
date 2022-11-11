<template>
  <section class="slider">
    <div class="slider-head">
      <label>{{ props.title }}</label>
      <div class="controls">
        <button class="previous">
          <i>L</i>
        </button>
        <button class="next">
          <i>R</i>
        </button>
      </div>
    </div>
    <ul class="carousel">
      <ProductCard v-for="item in props.list" :key="item.id" :item="item" />
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Product } from "src/store";

const props = defineProps({
  title: { type: String },
  list: { type: Array<Product> },
});
</script>

<style scoped></style>
