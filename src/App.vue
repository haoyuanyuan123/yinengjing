<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style>
@import './assets/css/mycss.css';
@import './assets/css/common.css';
</style>
