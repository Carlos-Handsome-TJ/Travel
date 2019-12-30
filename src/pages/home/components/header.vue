<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
  export default {
    name: "homeHeader"
  }
</script>

<style scoped lang="stylus">
  .header
    height 0.86rem
    line-height 0.86rem
    background #00bcd4
    display flex
    color #fff
  .header-left
    width 0.85rem
    text-align center
  .header-input
    flex 1
    background: #fff
    border-radius 0.1rem
    height 0.62rem
    line-height 0.62rem
    margin-top 0.12rem
    margin-left 0.1rem
    color #ccc
  .header-right
    width 1.24rem
    text-align center
</style>
