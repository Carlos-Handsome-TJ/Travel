<template>
  <div class="wrapper">
    <div class="item-destination">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <div class="item-wrapper">
          <img class="item-img"
               :src="item.imgUrl" alt="">
        </div>
        <div class="item-content">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "homeWeekend",
    props: {
      list: Array
    },
    data () {
      return {

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
