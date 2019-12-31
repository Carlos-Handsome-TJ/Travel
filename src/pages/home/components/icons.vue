<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page">
          <div class="icon-img">
            <img class="icon-content" :src="item.iconUrl" alt="">
            <p class="icon-des">{{item.iconContent}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "homeIcons",
    data() {
      return {
        iconList: [{
          id: '0001',
          iconContent: '旅游景区',
          iconUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png'
        }, {
          id: '0002',
          iconContent: '度假',
          iconUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png'
        }, {
          id: '0003',
          iconContent: '海外酒店',
          iconUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png'
        }, {
          id: '0004',
          iconContent: '汽车-船票',
          iconUrl: 'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png'
        }, {
          id: '0005',
          iconContent: '旅游景区',
          iconUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png'
        }, {
          id: '0006',
          iconContent: '度假',
          iconUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png'
        }, {
          id: '0007',
          iconContent: '海外酒店',
          iconUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png'
        }, {
          id: '0008',
          iconContent: '汽车-船票',
          iconUrl: 'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png'
        }, {
          id: '0009',
          iconContent: '旅游景区',
          iconUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png'
        }]
      }
    },
    computed: {
      pages() {
        let pages = [];
        this.iconList.forEach((item, index) => {
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
