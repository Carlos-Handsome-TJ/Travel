<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hot="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities"
    @change="handleChange"></city-alphabet>
  </div>
</template>

<script>
  import aixos from "axios"
  import cityHeader from "./components/cityHeader";
  import citySearch from "./components/citySearch";
  import cityList from "./components/cityList"
  import cityAlphabet from "./components/city-aphabet"
    export default {
      name: "City",
      data() {
        return {
          cities: {},
          hotCities: [],
          letter: '',
        }
      },
      methods: {
        getCityInfo() {
          aixos.get('/api/city.json').then(this.getCitySucc);
        },
        getCitySucc(res) {
          res = res.data;
          if (res.ret && res.data) {
            const data = res.data;
            this.cities = data.cities;
            this.hotCities = data.hotCities;
          }
        },
        handleChange(passLetter) {
          this.letter = passLetter;
        }
      },
      mounted() {
          this.getCityInfo()
      },
      components: {
        cityHeader,
        citySearch,
        cityList,
        cityAlphabet
      }
    }
</script>

<style scoped>

</style>
