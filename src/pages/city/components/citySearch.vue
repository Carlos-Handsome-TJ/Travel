<template>
  <div class="wrapper">
    <input  class="search" type="text" placeholder="请输入城市/景点/游玩主题">
  </div>
</template>
<script>
    export default {
        name: "citySearch"
    }
</script>

<style scoped lang="stylus">
  @import "~styles/varibel.styles"
  .wrapper
    width: 100%
    height: .86rem
    padding: 0.1rem
    box-sizing: border-box
    background: $bgColor
    .search
      width: 100%
      height 0.62rem
      line-height 0.62rem
      text-align: center
      outline: none
      border-radius: .08rem
      color: #000
</style>
