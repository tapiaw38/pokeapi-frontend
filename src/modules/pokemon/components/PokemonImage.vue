<template>
  <div class="container-image justify-content-center">
    <img :src="imageUrl" :alt="imageId" />
  </div>
</template>

<script setup>
import { computed } from "vue";
// eslint-disable-next-line
const props = defineProps({
  imageId: {
    type: Number,
    default: 1,
  },
});

const imageUrl = computed(
  () =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.imageId}.svg`
);
</script>


<style lang="scss" scoped>
.container-image {
    height: 8rem;

    img {
        height: 100%;
        max-width: 125px;
        margin-top: 6%;
        z-index: 2;
    }
}
</style>