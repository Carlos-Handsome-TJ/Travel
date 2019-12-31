<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide  v-for="item of list" :key="item.id">
<!--        这里是有个大bug的，学完之后再回来检查-->
<!--        <img class="swiper-img" src="../../../assets/images/banner2.jpg" alt="">-->
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "homeSwiper",
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: true,
        }
      }
    },
    computed: {
      showSwiper() {
        return this.list.length;
      }
    }
  }
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom 35%
    background: #fff;
    .swiper-img
      width: 100%
</style>
