<template>
    <div class="icons">
      <div class="icon">
        <div class="icon-img">
          <img  class="icon-content" src="https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png" alt="">
          <p class="icon-des">旅游景区</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "homeIcons"
    }
</script>

<style scoped lang="stylus">
  @import "~styles/varibel.styles"
  .icons
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 50%;
    .icon
      width: 25%
      height: 0
      padding-bottom: 25%
      float: left
      position: relative
      .icon-img
        position: absolute
        top: 0
        right: 0
        left: 0
        bottom: 0.44rem
        box-sizing: border-box
        padding 0.2rem
        .icon-content
          height: 100%
          display: block
          margin: 0 auto
        .icon-des
          width: 100%
          height: 0.44rem
          line-height: 0.44rem
          text-align: center
          color: $darkTextColor
</style>
