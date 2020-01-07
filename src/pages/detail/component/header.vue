<template>
  <div>
    <router-link
      v-show="showD"
      tag="div"
      to="/"
      class="header-abs">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div class="header-fixed"
         v-show="!showD"
         :style="opacityStyle"
    >
      <p class="header-detail">景点详情</p>
      <router-link
        tag="span"
        to="/" class="iconfont header-detail-back"
      >&#xe624;</router-link>
    </div>
  </div>
</template>

<script>
    export default {
      name: "detailHeader",
      data() {
        return {
          showD: true,
          opacityStyle: {
            opacity: ''
          }
        }
      },
      methods: {
        showHeader() {
          const top = document.documentElement.scrollTop;
          let style = top / 150;
          this.opacityStyle = {
            opacity: style
          };
          if (top > 60) {
            this.showD = false;
            style = style > 1 ? 1 : this.opacity
          } else {
            this.showD = true
          }
        }
      },
      activated() {
        window.addEventListener('scroll', this.showHeader)
      }
    }
</script>

<style scoped lang="stylus">
  @import "~styles/varibel.styles"
  .header-abs
    position: absolute
    top: .2rem
    left: .2rem
    width: .8rem
    height: .8rem
    border-radius: .4rem
    background: #000
    .header-abs-back
      display: inline-block
      width: 100%
      height: 100%
      line-height: .8rem
      text-align: center
      font-size: .4rem
      color: #fff
  .header-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    width: 100%
    height: .86rem
    background: $bgColor
    .header-detail
      line-height: .86rem
      font-size: .32rem
      color: #fff
      text-align: center
    .header-detail-back
      display: inline-block
      top: 0
      left: 0
      position: absolute
      width: 1.2rem
      height: 100%
      padding-left: .2rem
      box-sizing: border-box
      line-height: .86rem
      font-size: .35rem
      color: #fff
  .test
    width: 100%
    height: 0
    padding-bottom: 50rem

</style>
