<template>
  <v-app>
      <HeaderPage/>
        <v-footer>
      <p class="ml-4">© 2019 Oubihis </p>
        </v-footer>
  </v-app>
</template>

<script>
import HeaderPage from './components/HeaderPage'
export default {
  name: 'App',
  components: {
    HeaderPage,
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>

