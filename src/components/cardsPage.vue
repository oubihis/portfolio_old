<template>

        <v-layout row wrap align-start justify-center>
            <v-flex v-for="card in cards" :key="card.title"  v-bind="{ [`lg${card.lg} md${card.md} sm${card.sm} xs${card.xs} mr${card.mr}`]: true }"  >
            <v-card class="mx-1 my-2">
                <v-img :src="card.src" height="190"></v-img>
                <v-card-title primary-title>
                <div>
                    <div class="headline" v-text="card.title"></div>
                    <span class="grey--text" v-text="card.subtitle"></span>
                </div>
                </v-card-title>
                <v-card-actions>
                <a :href="card.url" :target="card.target">
                <v-btn flat color="blue-grey darken-4">See Github Repo</v-btn>
                </a>
                </v-card-actions>
            </v-card>
            </v-flex>
        </v-layout>

</template>


<script>
  export default {
    data: () => ({
      cards: [
          {
              lg: 3,
              md: 6,
              sm: 6,
              xs: 12,
              src: require('../assets/projects/weather.png'),
              title: 'Weather Widget',
              subtitle: 'Vanilla Javascript - Darksky API - Skycons animated weather glyphs',
              url: 'https://github.com/oubihis/weather-widget',
              target: '_blank',
          },
          {
              lg: 3,
              md: 6,
              sm: 6,
              xs: 12,
              src: require('../assets/projects/viralboom.png'),
              title: 'Viralebom',
              subtitle: 'ViraleBom is a template for the news of the buzz, Html5 & Css - Scss',
              url: 'https://github.com/oubihis/Viralebom',
              target: '_blank',
          },
          {
              lg: 3,
              md: 6,
              sm: 6,
              xs: 12,
              src: require('../assets/projects/store.png'),
              title: 'Template for E-store',
              subtitle: 'The is Open source Project, The project is a template for e-commerce.',
              url: 'https://github.com/oubihis/Template-store-bootstrap-4',
              target: '_blank',
          },
          {
              lg: 3,
              md: 6,
              sm: 6,
              xs: 12,
              src: require('../assets/projects/profile.png'),
              title: 'Profile in Moroccan Darija',
              subtitle: 'Profile in Moroccan Darija, using Moroccan Fonts',
              url: 'https://github.com/oubihis/oubihis.github.io',
              target: '_blank',
          },
          {
              lg: 3,
              md: 6,
              sm: 6,
              xs: 12,
              mr: '-auto',
              src: require('../assets/projects/travel-to-marrakech.png'),
              title: 'Travel To Marrakech',
              subtitle: 'Travel To Marrakech is Loading page for booking ',
              url: 'https://github.com/oubihis/Travel-To-Marrakech',
              target: '_blank',
          },
      ]
    })
  }
</script>