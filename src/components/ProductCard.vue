<template>
  <button class="main-container">
    <img :src="item.imageSrc" :alt="item.name" />
    <div class="info-container">
      <h2>{{ item.name }}</h2>
      <h3>${{ item.price }}</h3>
      <p>{{ handleDescription() }}</p>
    </div>
  </button>
</template>

<script setup lang="ts">
import type { Product } from "src/store";
import type { PropType } from "vue";

const props = defineProps({
  item: { required: true, type: Object as PropType<Product> },
});

function handleDescription() {
  try {
    let description = props.item.description;
    if (typeof description !== "string") throw "invalid type";

    const CUTOFF = 70;
    if (description.length > CUTOFF)
      description = description.substring(0, CUTOFF);

    return description;
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  width: 12em;
  height: 16em;
  transition: all 0.2s ease-in-out;
}
.main-container:hover {
  transform: scale(1.05);
}
img {
  float: top;
  width: 100%;
  height: 50%;
}
* {
  text-align: left;
}
h2 {
  font-weight: bold;
}
p {
  color: gray;
  font-size: 0.75em;
  text-align: left;
}
</style>
