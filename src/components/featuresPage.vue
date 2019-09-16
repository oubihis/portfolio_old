<template>

  <div grid-list-md text-xs-center>
<h1 class="blue-grey--text darken-4 font-weight-bold my-4 text-xs-left" >
    {{titleOfThelogos}}
  </h1>
    <v-layout row wrap>
      <v-flex v-for="feature in features" :key="feature.title" v-bind="{ [`lg${feature.lg} md${feature.md} sm${feature.sm} xs${feature.xs} mr${feature.mr}`]: true }">
          <v-img :src="feature.src" aspect-ratio="2" contain class="mx-1 my-3"></v-img>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
 export default {
    data: () => ({
        titleOfThelogos: 'Technical Skill Set',
        features: [
            {
              lg: 2,
              md: 4,
              sm: 6,
              xs: 6,
              src: require('../assets/features/html5.png'),
            },
            {
              lg: 2,
              md: 4,
              sm: 6,
              xs: 6,
              src: require('../assets/features/css3.png'),
            },
            {
              lg: 2,
              md: 4,
              sm: 6,
              xs: 6,
              src: require('../assets/features/sass.png'),
            },
            {
              lg: 2,
              md: 4,
              sm: 6,
              xs: 6,
              src: require('../assets/features/bootstrap.png'),
            },
            {
              lg: 2,
              md: 4,
              sm: 6,
              xs: 6,
              src: require('../assets/features/javascript.png'),
            },
            {
              lg: 2,
              md: 4,
              sm: 6,
              xs: 6,
              src: require('../assets/features/jquery.png'),
            },
            {
              lg: 2,
              md: 4,
              sm: 6,
              xs: 6,
              src: require('../assets/features/vuejs.png'),
            },
            {
              lg: 2,
              md: 4,
              sm: 6,
              xs: 6,
              src: require('../assets/features/photoshop.png'),
            },
            {
              lg: 2,
              md: 4,
              sm: 6,
              xs: 6,
              src: require('../assets/features/gulp.png'),
            },
            {
              lg: 2,
              md: 4,
              sm: 6,
              xs: 6,
              src: require('../assets/features/mysql.png'),
            },
            {
              lg: 2,
              md: 4,
              sm: 6,
              xs: 6,
              src: require('../assets/features/scrapy.png'),
            },
            {
              lg: 2,
              md: 4,
              sm: 6,
              xs: 6,
              src: require('../assets/features/ux-ui.svg'),
            }
        ]
    })
  }
</script>