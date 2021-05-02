<template>
  <div id="app">
    <img alt="image header" src="./assets/header.jpg"  >
      <Menu/>
        <div class="text-center" v-show="$store.state.mostrarLoader">
            <b-spinner variant="secondary" label="Text Centered Large Spinner" style="width: 3rem; height: 3rem;" ></b-spinner>
        </div>
      <router-view />
  </div>
</template>

<script>
import Menu from "./components/Menu.vue"

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  min-height: 44rem;
  padding-bottom: 5rem;
  background-color: #16101A;

}
</style>
