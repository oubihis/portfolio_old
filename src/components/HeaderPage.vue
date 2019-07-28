<template>


  <v-container fluid>
    <v-layout row wrap>
      <v-flex md6 xs12 order-xs1 text-xs-center text-md-left>
          <h2 class="font-weight-regular grey--text darken-3">
              <span class="font-weight-thin">{</span> 
              {{myTitle}}
              <span class="font-weight-thin">}</span>
          </h2>
      </v-flex>

      <v-flex md6 xs12 text-md-right order-xs2 text-xs-center>
        <v-btn v-for="resume in resumes" :key="resume" class="mr-3" dark icon solo>
        <a :href="resume.url" :target="resume.target" class="font-weight-medium grey--text darken-4">resume </a>
        </v-btn>
        <v-btn v-for="icon in icons" :key="icon" class="mx-1" dark icon>
            <a :href="icon.url" :target="icon.target"><v-icon size="24px" class="grey--text darken-4">{{ icon.name }}</v-icon></a>
            
        </v-btn>
      </v-flex>
    </v-layout>
    <MainPage/>
    <cardsPage/>
  </v-container>

  
</template>

<script>
import MainPage from './MainPage'
import cardsPage from './cardsPage'
 export default {
    name: 'App',
    components: {
      MainPage,
      cardsPage
    },
    data: () => ({
      resumes: [
        {
          url: 'https://www.dropbox.com/s/ghjciji892gv47c/Resume_oubihis.pdf?dl=0',
          target: '_blank'
        }
      ],
      icons: [
        {
          name: 'fas fa-envelope',
          url: 'mailto:oubihis@gmail.com',
          target: '_blank'
        },
        {
            name:'fab fa-github',
            url: 'https://www.github.com/oubihis',
            target: '_blank'
        },
        {
            name:'fab fa-codepen',
            url: 'https://codepen.io/oubihis',
            target: '_blank'
        },
        {
            name:'fab fa-linkedin',
            url: 'https://www.linkedin.com/in/oubihis',
            target: '_blank'
        },

      ],
      myTitle: "I'am Oubihis" ,
    })
  }
</script>

<style>

</style>
