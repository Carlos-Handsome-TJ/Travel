<template>
  <div>
    <banner
      :bannerImg="bannerImg"
      :sightName="sightName"
      :gallaryImgs="gallaryImgs"
    />
    <detail-header></detail-header>
  </div>
</template>

<script>
  import axios from 'axios'
  import banner from "./component/banner";
  import detailHeader from "./component/header";
    export default {
      name: "Detail",
      components: {
        banner,
        detailHeader
      },
      data() {
        return {
          bannerImg: '',
          sightName: '',
          gallaryImgs: [],
        }
      },
      methods: {
        getDetailInfo() {
          axios.get('/api/detail.json').then(this.getDetailSucc)
        },
        getDetailSucc(res) {
          res = res.data;
          const data = res.data;
          if (res.ret) {
            this.bannerImg = data.bannerImg;
            this.sightName = data.sightName;
            this.gallaryImgs = data.gallaryImgs;
          }
        }
      },
      mounted() {
        this.getDetailInfo();
      }
    }
</script>

<style scoped lang="stylus">
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 55%
    .detail-img
      width: 100%
</style>
