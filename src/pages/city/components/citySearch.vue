<template>
  <div>
    <div class="wrapper">
      <input v-model="keyword" class="search" type="text" placeholder="请输入城市/景点/游玩主题">
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li class="item"
            v-for="item of list"
            :key="item.id"
            @click="handleCity(item.name)"
        >{{item.name}}</li>
        <li class="item" v-show="hasNoData">没有找到匹配城市</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
    export default {
      name: "citySearch",
      props: {
        cities: Object
      },
      data() {
        return {
          keyword: '',
          list: [],
          timer: null
        }
      },
      methods: {
        handleCity(city) {
          this.$store.dispatch('changeCity', city);
          this.$router.push('/');
        }
      },
      computed: {
        hasNoData() {
          return !this.list.length;
        }
      },
      watch: {
        keyword() {
          if (this.timer) {
            clearInterval(this.timer)
          }
          this.timer = setTimeout(() => {
            const result = [];
            for (let i in this.cities) {
              this.cities[i].forEach( value => {
                if (value.name.indexOf(this.keyword) > -1 || value.spell.indexOf(this.keyword) > -1 ) {
                  result.push(value);
                }
              })
            }
            this.list = result;
          }, 50)
        }
      },
      mounted() {
        this.scroll = new BScroll(this.$refs.search);
      }
    }
</script>

<style scoped lang="stylus">
  @import "~styles/varibel.styles"
  .wrapper
    width: 100%
    height: .86rem
    padding: 0.1rem
    box-sizing: border-box
    background: $bgColor
    .search
      width: 100%
      height 0.62rem
      line-height 0.62rem
      text-align: center
      outline: non  e
      border-radius: .08rem
      color: #000
  .search-content
    position: absolute
    top: 1.72rem
    height: 100%
    width: 100%
    z-index: 1
    background: #333
    overflow: hidden
    .item
      width: 100%
      height: 0.62rem
      line-height: .62rem
      color: #fff
      padding-left: .2rem
</style>
