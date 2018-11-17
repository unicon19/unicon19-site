<template lang="pug">
navbar(
    position="fixed",
    :transparent="transparent",
    :color-on-scroll="400",
    menu-classes="ml-auto"
  )
  template(slot-socpe="{toggle, isToggled}")
    span
      a(href="/") UniCon
</template>

<script>
import { Navbar } from '@/components';
export default {
  name: 'main-navbar',
  components: { Navbar },
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  }
}
</script>

