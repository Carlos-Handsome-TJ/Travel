<template>
  <div>
    <div class="recommend">
      热销推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img"
             :src="item.itemUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.itemTitle}}</p>
          <p class="item-desc">{{item.itemDesc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "hoemRecommend",
    data () {
      return {
        recommendList: [{
          id: '001',
          itemUrl: 'http://img1.qunarzz.com/sight/p0/1603/c5/c5e2b211d10d4bb90.img.jpg_200x200_2a971b62.jpg',
          itemTitle: '千岛湖天迹热气球',
          itemDesc: '详情信息详情信息详情信息详情信息详情信息'
        }, {
          id: '002',
          itemUrl: 'http://img1.qunarzz.com/sight/p0/1603/c5/c5e2b211d10d4bb90.img.jpg_200x200_2a971b62.jpg',
          itemTitle: '千岛湖天迹热气球',
          itemDesc: '详情信息详情信息详情信息详情信息详情信息'
        }, {
          id: '003',
          itemUrl: 'http://img1.qunarzz.com/sight/p0/1603/c5/c5e2b211d10d4bb90.img.jpg_200x200_2a971b62.jpg',
          itemTitle: '千岛湖天迹热气球',
          itemDesc: '详情信息详情信息详情信息详情信息详情信息'
        },]
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styles"
  .recommend
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    margin-top: .2rem

  .item
    display: flex
    height: 1.9rem
    overflow: hidden


    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem

    .item-info
      flex: 1
      padding: 0.1rem
      ellipsis()

      .item-title
        line-height: .54rem
        font-size: .32rem

      .item-desc
        line-height: .4rem
        color: #ccc

      .item-button
        line-height: .44rem
        margin-top: 0.16rem
        background: #ff9300
        padding: 0 .1rem
        border-radius .06rem
        color: #fff
</style>
