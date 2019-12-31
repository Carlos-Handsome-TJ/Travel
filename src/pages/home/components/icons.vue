<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page">
          <div class="icon-img">
            <img class="icon-content" :src="item.imgUrl" alt="">
            <p class="icon-des">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "homeIcons",
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          autoplay: false,
        }
      }
    },
    computed: {
      pages() {
        let pages = [];
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/varibel.styles"
  @import "~styles/mixins.styles"
  .icons >>> .swiper-container
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 50%

    .icons
      margin-top: .1rem

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
          ellipsis()
</style>
