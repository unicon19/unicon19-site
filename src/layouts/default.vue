<template lang="pug">
  div
    main-navbar
    nuxt
    main-footer
</template>

<script>
import MainNavbar from './MainNavbar.vue';
import MainFooter from './MainFooter.vue';

export default {
  components: { MainNavbar, MainFooter }
}
</script>


