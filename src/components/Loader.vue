<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
.loader {
  border: 16px solid $white;
  border-radius: 50%;
  border-top: 16px solid $secondary;
  border-bottom: 16px solid $secondary;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>