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
          h6 자세한 일정, 장소는 추후 공지합니다.
    div(class="main")
      div(
        class="section section-description"
      )
        div.container.text-center
          div(class="row")
            div.col-md-12
              h3 청년들을 위한 청년들의 지식 공유 컨퍼런스
          div(class="row")
            div.col-md-12
              h5 행사 개요
              span
                | Uni-Con(University Conference)는 대학생 개발자/비개발자가
                | 함께 참가하는 지식 공유 컨퍼런스입니다.
          div(class="row")
            div.col-md-12
              h5 코드가 있는 세션
              span 코드가 있는 세션
                | 개발자 친구들을 위해 코드가 포함한 내용을 공유합니다.
                br
                | 웹, 블록체인, AI, 보안 등 코딩에 대한 이해가 필요한 세션입니다.
          div(class="row")
            div.col-md-12
              h5 코드가 없는 세션
              span
                | 비개발자도 가벼운 마음으로 들을 수 있는 코드가 없는 세션입니다.
                br
                | 커뮤니티와 네트워킹, 커뮤니케이션, 경험담 등
                | 다양한 주제에 대해서 공유합니다.
          div(class="row")
            n-button(class="btn-proposal" type="primary", size="lg") 발표 제안하기
      div(
        class="section scection-subscribe"
        style="background-image: url('img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 200px;"
      )
        div.container
          div.row
            div.col-md-12
              div.card-subscribe.text-center
                h3.card-title.title-up FOREVER YOUNG,
                  br
                  |WAVES LIKE
                div.div-subscribe
                  fg-input(class="input-subscribe no-border", placeholder="email")
                  n-button(class="btn-subscribe") 구독하기
          div.row
            div.col-md-12.text-center
              div 컨퍼런스 일정, 장소, 시간표등을 보내드립니다.
      sponsor-section

</template>

<script>
import { Card, Parallax, FormGroupInput, Button } from '@/components';
import SponsorSection from '@/components/SponsorSection.vue'

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    [FormGroupInput.name]: FormGroupInput,
    [Button.name]: Button,
    Card,
    SponsorSection
  }
}
</script>

<style lang="scss">

.card-subscribe {
  margin: 0 auto;
  max-width: 350px;
}
.div-subscribe {
  vertical-align: middle;
  min-height: 40px;
}

.input-subscribe {
  float: left;
  margin: 0px 10px 0px 0px;
  width: 240px;
}

.btn-subscribe {
  float: right;
  margin: 0px;
}

.span-confinfo {
  margin-top: 10px;
}

.section-sponsor img {
  margin-left: auto;
  margin-right: auto;
}

.btn-proposal {
  margin: 20px auto auto auto;
}

.section-description {
  h5 {
    margin: 20px 0px 10px 0px;
  }
}
</style>


