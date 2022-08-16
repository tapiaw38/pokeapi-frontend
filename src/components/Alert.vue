<template>
  <div class="alert row justify-content-center align-items-center">
    <span>{{ props.message }}</span>
    <span @click="$emit('close')" class="close-icon"><i class="las la-times"></i></span>
  </div>
</template>

<script setup>
// eslint-disable-next-line
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
// eslint-disable-next-line
const emit = defineEmits({
  close: {
    type: Function,
    default: () => {},
  },
});

</script>

<style lang="scss" scoped>
.alert {
  max-width: 40%;
  background-color: $danger;
  color: $white;
  padding: 10px;
  border-radius: 14px;

  span {
    font-size: 0.9rem;
  }

  .close-icon {
    display: flex;
    cursor: pointer;
    font-size: 1rem;
    color: $white;
    float: right;
    padding-left: 5px;
  }

  @media (max-width: $screen-sm) {
    max-width: 80%;
  }
}
</style>
