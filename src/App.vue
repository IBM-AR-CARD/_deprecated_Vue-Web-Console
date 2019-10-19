<template>
  <div>
  <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app'
  }
</script>

<style>
  div {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-duration: 0.7s;
  }

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
