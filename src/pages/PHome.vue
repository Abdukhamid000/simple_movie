<template>
  <div>
    <h1>Movie List</h1>
    <v-row class="mt-3">
      <v-col v-for="movie in movieList" :key="movie.id" cols="12" md="2">
        <v-card>
          <v-img :src="movie.posterImage"></v-img>
          <v-card-title>{{ movie.title }}</v-card-title>
          <v-btn
            :to="{ name: 'MoviesSingle', params: { id: movie.id } }"
            color="orange-lighten-2"
            text="View
 more details"
          ></v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import type { TMovieList } from '@/types'
import type { Ref } from 'vue'

import { inject } from 'vue'

const movieList = inject<Ref<TMovieList>>('movieList')
</script>

<style scoped></style>
