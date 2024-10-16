<template>
  <div>
    <v-row class="mt-3">
      <template v-if="!favoriteMovies.length">No Favorite Movies</template>
      <v-col v-for="movie in favoriteMovies" :key="movie.id" cols="12" md="4">
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

import { computed, inject } from 'vue'

const movieList = inject<Ref<TMovieList>>('movieList')
const favoriteMovies = computed(() => movieList!.value.filter((movie) => movie.isFavorite))
</script>
