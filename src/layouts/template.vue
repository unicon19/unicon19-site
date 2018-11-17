<template>
  <div>
    <main-navbar :color-on-scroll="400"/>
    <nuxt/>
    <main-footer background-color="black"/>
  </div>
</template>

<script>
import TemplateNavbar from './TemplateNavbar.vue';
import TemplateFooter from './TemplateFooter.vue';

export default {
  components: { TemplateNavbar, TemplateFooter }
};
</script>
