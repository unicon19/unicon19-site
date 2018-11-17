<template>
  <div>
    <template-navbar :color-on-scroll="400"/>
    <nuxt/>
    <template-footer background-color="black"/>
  </div>
</template>

<script>
import TemplateNavbar from './TemplateNavbar.vue';
import TemplateFooter from './TemplateFooter.vue';

export default {
  components: { TemplateNavbar, TemplateFooter }
};
</script>
