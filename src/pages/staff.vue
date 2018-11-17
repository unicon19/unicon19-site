<template lang="pug">
div
  div(class="page-header page-header-small clear-filter" filter-color="orange")
    parallax(
      class="page-header-image"
      style="background-image:url('img/bg6.jpg')"
    )
    div(class="content-center")
      div(class="container")
        h1.title 준비위원회

  div.main
    div(class="section section-staff")
      div(class="container content-center text-center")
        div.row
          div.col-md-12
            h5
              | UniCon 2019 준비위원회는 아래 인원이 참가하여 행사를 준비하고
              | 있습니다.(가나다순)
        div.row
          div.col-md-12
            table.table-staff
              tr
                td 고유림
                td 김지원
                td 노종원
                td 문성욱
                td 박영조
                td 서현석
              tr
                td 송재학
                td 신수철
                td 장순호
                td 진유림
                td 최희재
                td 허준희

  
</template>

<script>
import { Card, Parallax, FormGroupInput, Button } from '@/components';

export default {
  name: 'staff',
  bodyClass: 'staff-page',
  components: {
    Parallax,
    [FormGroupInput.name]: FormGroupInput,
    [Button.name]: Button,
    Card
  }
}
</script>

<style lang="scss">
.table-staff {
  font-size: 15px;
  margin: auto;
  
  td {
    width: 70px;
  }
}

</style>

