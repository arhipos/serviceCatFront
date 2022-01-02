<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <yandex-map
        style="width:500px;height:500px;"
        :settings="settings"
        :coords="coords"
        :zoom="14"
        @click="onClick"
    >
      <ymap-marker
          :coords="coords"
          marker-id="123"
          hint-content="some hint"
      />
    </yandex-map>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'



export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    yandexMap, ymapMarker
  },
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    },
  },
  data () {
    return {
      coords: [59.96905106412616,30.30560050000002],
       settings: {
        apiKey: '86ab941c-dc80-4228-9273-5bb0372b6c16',
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1'
      }
    }
  }
}
</script>
