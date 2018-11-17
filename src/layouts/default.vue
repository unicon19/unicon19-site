<template>
  <div>
    <main-navbar :color-on-scroll="400"/>
    <nuxt/>
    <main-footer background-color="black"/>
  </div>
</template>

<script>
import MainNavbar from './MainNavbar.vue';
import MainFooter from './MainFooter.vue';

export default {
  components: { MainNavbar, MainFooter }
};
</script>
