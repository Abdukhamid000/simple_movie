<template>
  <div>
    <v-card>
      <v-btn :icon="liked ? 'mdi-heart' : 'mdi-heart-outline'" @click="toggle"></v-btn>
      <v-img :src="movie.posterImage" :alt="`${movie.title} Poster`" height="400px" />

      <v-card-title>{{ movie.title }}</v-card-title>
      <v-card-subtitle>
        <span><strong>Genre:</strong> {{ movie.genre }} </span> |
        <span><strong>Release Date:</strong> {{ movie.releaseDate }}</span>
      </v-card-subtitle>
      <v-card-text>
        <p>{{ movie.description }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="$router.back">Back to Movies</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import type { TMovieList } from '@/types'
import type { Ref } from 'vue'

import { ref, computed, inject } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movieList = inject<Ref<TMovieList>>('movieList')

const movieId = computed(() => Number(route.params.id as string) - 1)
const movie = ref(movieList!.value[movieId.value])
const liked = ref(movieList!.value[movieId.value].isFavorite)

function toggle() {
  liked.value = !liked.value
  movieList!.value[movieId.value].isFavorite = true
}
</script>
