<template>
  <div class="wrapper">
    <img
      class="banner-img"
      :src="bannerImg"
      @click="handleBannerClick"
      alt="">
    <div class="banner-info">
      <div class="banner-title">{{this.sightName}}</div>
      <div class="banner-num">
        <span class="iconfont banner-icon">&#xe692;</span>
        {{ this.numImgs }}
      </div>
    </div>
    <gallery v-show="handleClick"
             @changeStatus="handleGalleryClick"
    />
  </div>
</template>

<script>
  import Gallery from "common/gallery/Gallery";
    export default {
      name: "banner",
      props: {
        bannerImg: String,
        sightName: String,
        gallaryImgs: Array,
      },
      data() {
        return {
          handleClick: '',
        }
      },
      methods: {
        handleBannerClick() {
          this.handleClick = true;
        },
        handleGalleryClick() {
          this.handleClick = false;
        }
      },
      components: {
        Gallery
      },
      computed: {
        numImgs() {
          return this.gallaryImgs.length
        }
      }
    }
</script>

<style scoped lang="stylus">
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      height: .7rem
      width: 100%
      left: 0
      bottom: 0
      display: flex
      background: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        color: #fff
        font-size: 0.32rem
        line-height: .7rem
        padding-left: .2rem
        flex: 1
      .banner-num
        width: 1rem
        height: 100%
        line-height: .6rem
        color: #fff
        .banner-icon
          padding: 0 .1rem
</style>
