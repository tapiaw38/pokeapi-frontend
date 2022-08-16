<template>
  <div class="pagination">
    <a class="pagination-change" @click="props.changePage('previous')">&lt;</a>
    <a class="pagination-change" @click="props.changePage('next')">&gt;</a>
  </div>
</template>

<script setup>
// eslint-disable-next-line
const props = defineProps({
  changePage: {
    type: Function,
  },
});
</script>

<style lang="scss" scoped>
.pagination {
  justify-content: center;
  margin-top: 2%;
  margin-bottom: 2%;
  display: inline-block;
  a {
    color: $black;
    float: left;
    padding: 9px 9px;
    text-decoration: none;
    margin-left: 0.5em;
    margin-right: 0.5em;
    font-size: 0.8em;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  a.active {
    background-color: $primary;
    color: $white;
    border-radius: 50%;
  }
  a:hover:not(.active) {
    background-color: $secondary;
    border-radius: 50%;
  }
  .pagination-change {
    background-color: $primary;
    color: $white;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5em;
    font-size: 0.8em;
    &:hover {
      background-color: $secondary;
      border-radius: 50%;
      color: $black;
    }
  }
  @media (max-width: 750px) {
    a {
      font-size: 0.7em;
      margin-left: 0.18em;
      margin-right: 0.18em;
      padding: 8px 11px;
    }
  }
}
</style>
