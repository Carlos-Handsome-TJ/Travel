<template>
  <div class="wrapper">
    <ul class="city-item">
      <li class="item"
          v-for="item of letters"
          :ref="item"
          @click="handelLetterClick"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
      >{{item}}
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "cityAphabet",
      props: {
        cities: Object
      },
      data() {
        return {
          startY: 0,
          timer: null
        }
      },
      computed: {
        letters() {
          const letters = [];
          for (let i in this.cities) {
            letters.push(i)
          }
          return letters;
        }
      },
      updated() {
        this.startY = this.$refs['A'][0].offsetTop;
      },
      methods: {
        handelLetterClick(e) {
          this.$emit("change", e.target.innerText);
        },
        handleTouchStart() {
          this.touchStatus = true;
        },
        handleTouchMove(e) {
          if (this.touchStatus) {
            if (this.timer) {
              clearInterval(this.timer)
            }
            this.timer = setTimeout( ()=> {
              const touchY = e.touches[0].clientY;
              const index = Math.floor((touchY - this.startY) / 25);
              if (index >= 0 && index < this.letters.length) {
                this.$emit('change', this.letters[index]);
              }
            }, 16);
          }
        },
        handleTouchEnd() {
          this.touchStatus = false;
        }
      },
    }
</script>

<style scoped lang="stylus">
  @import "~styles/varibel.styles"
  .wrapper
    position: absolute
    right: 0
    top: 0
    padding-top: 3.2rem
    .city-item
      height: 100%
      width: .8rem
      display: flex
      flex-direction: column
      text-align: center
      justify-content: center
      .item
        width: 100%
        height: .5rem
        line-height: .5rem
        color: $bgColor
</style>
