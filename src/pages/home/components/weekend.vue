<template>
  <div class="wrapper">
    <div class="item-destination">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of imgList" :key="item.id">
        <div class="item-wrapper">
          <img class="item-img"
               :src="item.imgUrl" alt="">
        </div>
        <div class="item-content">
          <p class="item-title">{{item.itemTitle}}</p>
          <p class="item-desc">{{item.itemDesc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "homeWeekend",
    data () {
      return {
        imgList: [{
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
          itemTitle: '精致暖汤',
          itemDesc: '天然高品质温泉，这是冬天秀美容颜首选之地，让你疲惫的身影在这里消失的无影无踪'
        }, {
          id: '002',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
          itemTitle: '精致暖汤',
          itemDesc: '天然高品质温泉，这是冬天秀美容颜首选之地，让你疲惫的身影在这里消失的无影无踪'
        }, {
          id: '003',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
          itemTitle: '精致暖汤',
          itemDesc: '天然高品质温泉，这是冬天秀美容颜首选之地，让你疲惫的身影在这里消失的无影无踪'
        }]
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styles"
  .wrapper
    margin-top: .2rem
    .item-destination
      line-height: .8rem
      background: #eee
      text-indent: .2rem
      margin-top: .2rem
    .item
      width: 100%
      height: 4.2rem
      margin-top: .2rem

      .item-wrapper
        width: 100%
        height: 0
        padding-bottom: 36.7%
        overflow: hidden

      .item-content
        width: 100%
        height: 0
        padding-bottom: 15%
        overflow: hidden

        .item-title
          width: 100%
          height: .6rem
          padding-left: .3rem
          line-height: .6rem

        .item-desc
          width: 100%
          padding: .1rem .3rem
          color: #aaa
          ellipsis()
</style>
