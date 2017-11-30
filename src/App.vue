<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "assets/scss/husky/variable";
  @import "assets/scss/husky/mixin";
  @import "assets/scss/husky/reset";
  #app {
    min-width:320px;
    /*max-width:1920px;*/
    max-width:1320px;
    width: 100%;
    margin:0 auto;
  }
</style>
