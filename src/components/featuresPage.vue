<template>


    <v-layout row wrap align-start justify-center>


        <v-flex v-for="feature in features" :key="feature.title"  v-bind="{ [`lg${feature.lg} md${feature.md} sm${feature.sm} xs${feature.xs} mr${feature.mr}`]: true }"  >
        <v-feature class="mx-1 my-2">
            <v-img :src="feature.src" height="40"></v-img>
            <v-feature-title primary-title>
            <div>
                <div class="headline" v-text="feature.title"></div>
                <span class="grey--text" v-text="feature.subtitle"></span>
            </div>
            </v-feature-title>
            <v-feature-actions>
            <a :href="feature.url" :target="feature.target">
            <v-btn flat color="blue-grey darken-4">See Github Repo</v-btn>
            </a>
            </v-feature-actions>
        </v-feature>
        </v-flex>
    </v-layout>

</template>

<script>
 export default {
    data: () => ({
        features: [
            {
              lg: 3,
              md: 6,
              sm: 6,
              xs: 12,
              src: require('../assets/features/nodejs.png'),
              title: 'Weather Widget',
              subtitle: 'Vanilla Javascript - Darksky API - Skycons animated weather glyphs',
            }
        ]
    })
  }
</script>

