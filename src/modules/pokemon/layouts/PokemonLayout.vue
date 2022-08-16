<template>
  <div class="pokemon-layout">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<style lang="scss" scoped>
.pokemon-layout {
  width: 100%;
  height: 100%;
}
</style>