<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <router-link class="header-city" to="/city">城市</router-link>
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "homeHeader",
    props: {
      city: String
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibel.styles"
  .header
    height 0.86rem
    line-height 0.86rem
    background: $bgColor
    display flex
    color #fff
  .header-left
    width 0.85rem
    text-align center
    .back-icon
      display block
      font-size 0.4rem
  .header-input
    flex 1
    background: #fff
    border-radius 0.1rem
    height 0.62rem
    line-height 0.62rem
    margin-top 0.12rem
    margin-left 0.1rem
    padding-left 0.1rem
    color #ccc
  .header-right
    width 1.24rem
    text-align center
    .header-city
      color #fff
    .arrow-icon
      font-size 0.24rem
</style>
