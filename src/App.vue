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
import { ref, watch } from 'vue'
import { provide } from 'vue'
import list from '@/data/movieList.json'
import Header from '@/components/layouts/LHeader.vue'

const movies = ref(list.movies)

provide('movieList', movies)
</script>
