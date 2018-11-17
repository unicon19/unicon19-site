<template lang="pug">
  div
    div(class="page-header clear-filter", filter-color="orange")
      parallax(
        class="page-header-image",
        style="background-image:url('img/header.jpg')")
      div(class="container")
        div(class="content-center brand")
          img(class="n-logo", src="img/now-logo.png")
          h1 UNIVERSITY CONFERENCE
          h3 2019 1분기, 서울
    div(class="main")
      div(
        class="section"
        style="background-image: url('img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 200px;"
      )
        div(class="container")
          div(class="row")
            card(class="card-subscribe")
              h3(class="card-title title-up") FOREVER YOUNG, WAVES LIKE
              div(class="div-subscribe")
                fg-input(class="input-subscribe no-border", placeholder="email")
                n-button(class="btn-subscribe") 구독하기

</template>

<script>
import { Parallax, FormGroupInput, Button } from '@/components';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    [FormGroupInput.name]: FormGroupInput,
    [Button.name]: Button
  }
}
</script>

<style lang="scss">
.card-subscribe {
  margin: 0 auto;
}
.div-subscribe {
  vertical-align: middle;
}

.input-subscribe {
  float: left;
  margin: 0px 10px 0px 0px;
  width: 300px;
}

.btn-subscribe {
  float: right;
  margin: 0px;
}

</style>


