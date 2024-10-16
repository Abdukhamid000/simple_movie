<template>
  <div>
    <h1>Movie List</h1>
    <v-row class="mt-3">
      <v-col v-for="movie in movieList" :key="movie.id" cols="12" md="2">
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue'
import type { TMovie } from '@/types'
import type { Ref } from 'vue'

import { inject } from 'vue'

const movieList = inject<Ref<TMovie[]>>('movieList')
</script>

<style scoped></style>
