<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
  import cityHeader from "./components/cityHeader";
  import citySearch from "./components/citySearch";
  import cityList from "./components/cityList"
    export default {
        name: "City",
      components: {
        cityHeader,
        citySearch,
        cityList
      }
    }
</script>

<style scoped>

</style>
