<template>
    <div class="wrapper">
      <router-link to="/">
        <div class="city-arrow iconfont">&#xe624;</div>
      </router-link>
      <div class="city-choose">
        <p class="city-select">城市选择</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "cityHeader"
    }
</script>

<style scoped lang="stylus">
  @import "~styles/varibel.styles"
  .wrapper
    width: 100%
    height 0.86rem
    line-height 0.86rem
    display: flex
    background: $bgColor
    .city-arrow
      width: 1.2rem
      height: 100%
      padding-left: .2rem
      box-sizing: border-box
      line-height: 1rem
      font-size: .35rem
      color: #fff
    .city-choose
      margin-right: 1.2rem
      width: 100%
      height: 100%
      text-align: center
      font-size: .32rem
      color: #fff
</style>
