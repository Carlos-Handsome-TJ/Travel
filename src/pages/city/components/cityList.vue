<template>
  <div class="list">
    <div class="wrapper">
      <p class="current-city border-topbottom">当前城市</p>
      <div class="item-wrapper border-bottom">
        <button class="item-city">北京</button>
      </div>
    </div>
    <div class="wrapper-hot">
      <p class="current-city border-topbottom">当前城市</p>
      <div class="city-hot">
        <button class="item-city">北京</button>
        <button class="item-city">北京</button>
        <button class="item-city">北京</button>
        <button class="item-city">北京</button>
        <button class="item-city">北京</button>
      </div>
    </div>
    <div class="wrapper-choose">
      <p class="city-search border-topbottom">A</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>
      <p class="city-item border-bottom">阿拉尔</p>

    </div>
  </div>
</template>

<script>
    export default {
        name: "cityList"
    }
</script>

<style scoped lang="stylus">
  .border-bottom
    &:before
      background: #ccc
  .border-topbottom
    &:before
      background: #ccc
    &:after
      background: #ccc
  .list
    position: absolute
    overflow: hidden
    top: 1.72rem
    left: 0
    right: 0
    bottom: 0
    .wrapper
      width: 100%
      .current-city
        width: 100%
        height: .54rem
        line-height: .54rem
        background: #eee
        padding-left: .2rem
        box-sizing: border-box
      .item-wrapper
        width: 100%
        height: 1rem
        line-height: 1rem
        box-sizing: border-box
        padding-left: .2rem
        .item-city
          width: 2rem
          height: .5rem
          line-height: .5rem
          text-align: center
          background: #fff
          border: .01rem solid #ccc
          border-radius: .06rem
          outline: none
    .wrapper-hot
      width: 100%
      .current-city
        width: 100%
        height: .54rem
        line-height: .54rem
        outline: none
        background: #eee
        padding-left: .2rem
        box-sizing: border-box
      .city-hot
        width: 100%
        line-height: .7rem
        padding: .1rem .2rem
        box-sizing: border-box
        .item-city
          width: 2rem
          height: .5rem
          line-height: .5rem
          text-align: center
          background: #fff
          border: .01rem solid #ccc
          border-radius: .09rem
          outline: none
          margin-right: .57rem
    .wrapper-choose
      .city-search
        width: 100%
        height: .54rem
        line-height: .54rem
        background: #eee
        padding-left: .2rem
        box-sizing: border-box
      .city-item
        width: 100%
        height: .76rem
        padding-left: .2rem
        line-height: .76rem
</style>
