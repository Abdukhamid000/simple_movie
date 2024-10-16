<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { provide } from 'vue'
import list from '@/data/movieList.json'
import Header from '@/components/layouts/LHeader.vue'

if (!localStorage.getItem('movies')) {
  localStorage.setItem('movies', JSON.stringify(list.movies))
}

const movies = ref(JSON.parse(localStorage.getItem('movies')!))

provide('movieList', movies)
</script>
