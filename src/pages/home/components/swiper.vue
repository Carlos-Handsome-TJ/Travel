<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide  v-for="item of imgList" :key="item.id">
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
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
        },
        imgList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/vs_ceph_vs_tts/e3c66e31-3bab-4c5a-a1ff-a7d637716a0f.jpg'
        },{
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/vs_ceph_vs_tts/f1ad20aa-0ede-4283-b844-b13c0d980415.jpg'
        }, {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/vs_ceph_vs_tts/73a9307d-892d-4e3f-b7e7-85e4b3aced18.jpg'
          }],
      }
    }
  }
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet
    background: red
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom 35%
    background: #fff;
    .swiper-img
      width: 100%
</style>
