<template>
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
</template>

<script setup lang="ts">
import type { TMovie } from '@/types'
interface Props {
  movie: TMovie
}

defineProps<Props>()
</script>
