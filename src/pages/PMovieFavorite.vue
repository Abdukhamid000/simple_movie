<template>
  <div>
    <v-row class="mt-3">
      <template v-if="!favoriteMovies.length">No Favorite Movies</template>
      <v-col v-for="movie in favoriteMovies" :key="movie.id" cols="12" md="2">
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import type { TMovie } from '@/types'
import type { Ref } from 'vue'
import MovieCard from '@/components/MovieCard.vue'

import { computed, inject } from 'vue'

const movieList = inject<Ref<TMovie[]>>('movieList')
const favoriteMovies = computed(() => movieList!.value.filter((movie) => movie.isFavorite))
</script>
