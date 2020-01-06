<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img
            class="gallery-img"
            src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
            alt="">
        </swiper-slide>
        <swiper-slide>
          <img
            class="gallery-img"
            src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
            alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Gallery",
      data() {
        return {
          swiperOption: {
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            observer:true,
            observeParents:true,
          }
        }
      },
      methods: {
        handleGalleryClick() {
          this.$emit('changeStatus')
        }
      }
    }
</script>

<style scoped lang="stylus">
  .container >>> .swiper-pagination
    overflow: inherit
    color: #fff
    bottom: 0
  .container
    z-index: 1
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    justify-content: center
    .wrapper
      width: 100%
      .gallery-img
        width: 100%
</style>
