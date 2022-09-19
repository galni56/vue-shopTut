<template>
  <div class='v-main-page'>
    <h1>Online-shop</h1>
    <p>
      <router-link :to="{name: 'catalog'}">
        TO CATALOG
      </router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: "v-main-page",
    props: {},
    data() {
      return {}
    },
    computed: {}
  }
</script>

<style scoped>
  a {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 25px;
    border: 1px solid;
    text-transform: uppercase;
    background: #8d3e8d;
    color: white;
    text-decoration: none;
    display: inline-block;
    border: none;
    transition: 0.4s;
  }
  a:hover {
    transform: scale(1);
    transition: 0.4s;
  }
</style>
