<script setup lang="ts">
import ProductCard from "../components/ProductCard.vue";
import type { Product } from "src/store";

const items = new Set<Product>([
  {
    id: 0,
    name: "item1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est lorem ipsum dolor sit amet consectetur adipiscing. Commodo viverra maecenas accumsan lacus vel.",
    imageSrc: "src/assets/spice.png",
    price: 20,
    quantity: 50,
  },
  {
    id: 1,
    name: "item2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est lorem ipsum dolor sit amet consectetur adipiscing. Commodo viverra maecenas accumsan lacus vel.",
    imageSrc: "src/assets/spice.png",
    price: 20,
    quantity: 50,
  },
  {
    id: 2,
    name: "item3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est lorem ipsum dolor sit amet consectetur adipiscing. Commodo viverra maecenas accumsan lacus vel.",
    imageSrc: "src/assets/spice.png",
    price: 20,
    quantity: 50,
  },
  {
    id: 3,
    name: "item4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est lorem ipsum dolor sit amet consectetur adipiscing. Commodo viverra maecenas accumsan lacus vel.",
    imageSrc: "src/assets/spice.png",
    price: 20,
    quantity: 50,
  },
  {
    id: 4,
    name: "item5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est lorem ipsum dolor sit amet consectetur adipiscing. Commodo viverra maecenas accumsan lacus vel.",
    imageSrc: "src/assets/spice.png",
    price: 20,
    quantity: 50,
  },
]);
</script>

<template>
  <main class="store">
    <ul class="carousel">
      <ProductCard v-for="item in items" :key="item.id" :item="item" />
    </ul>
  </main>
</template>

<style scoped>
.store {
  padding: 1em;
}
.carousel {
  width: 80%;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
</style>
