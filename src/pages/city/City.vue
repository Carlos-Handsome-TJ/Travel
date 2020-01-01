<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
  import cityHeader from "./components/cityHeader";
  import citySearch from "./components/citySearch";
    export default {
        name: "City",
      components: {
        cityHeader,
        citySearch
      }
    }
</script>

<style scoped>

</style>
