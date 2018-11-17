<template lang="pug">
div(class="section section-sponsor")
  div(class="container text-center")
    h3(class="title") 스폰서
    div(class="row")
      div(class="col-md-12")
        img(src="/img/sponsor_kmu.jpg")
    div(class="row")
      n-button(class="btn-sponsor" type="primary" size="lg") 스폰서 되기
</template>

<script>
import { Button } from '@/components';
export default {
  components: {
    [Button.name]: Button
  }
}
</script>

<style lang="scss">
.btn-sponsor {
  margin-left: auto;
  margin-right: auto;
}
</style>


