<template>
    <div class="wrapper">
      <router-link to="/">
        <div class="city-arrow iconfont">&#xe624;</div>
      </router-link>
      <div class="city-choose">
        <p class="city-select">城市选择</p>
        <div class="click-select">
          <span class="in-select">境内</span>
          <span class="out-select">境外·港澳台</span>
        </div>
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
    height: 0
    overflow: hidden
    padding-bottom: 18%
    display: flex
    background: $bgColor
    .city-arrow
      width: 1.2rem
      height: 0
      padding-bottom: 100%
      padding-left: .2rem
      box-sizing: border-box
      line-height: 1rem
      font-size: .35rem
      color: #fff
    .city-choose
      flex: 1
      margin-right: 1.2rem
      height: 0
      padding-bottom: 100%
      text-align: center
      .city-select
        font-size: .32rem
        line-height: .88rem
        color: #fff
      .click-select
        width: 100%
        height: 0
        padding-bottom: 7%
        overflow: hidden
        display: flex
        box-sizing: border-box
        border: .028rem solid #fff
        border-radius: .05rem
        .in-select
          display: inline-block
          width: 50%
          height: 0.4rem
          line-height: 0.4rem
          padding-bottom: 100%
          background: #fff
          text-align: center
        .out-select
          display: block
          width: 50%
          height: 0.4rem
          line-height: 0.4rem
          text-align: center
          padding-bottom: 100%
          background: $bgColor
</style>
