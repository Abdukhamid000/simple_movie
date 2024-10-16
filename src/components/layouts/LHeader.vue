<template>
  <v-app-bar app>
    <v-toolbar-title>Movie App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text :to="{ name: 'Movies' }">Home</v-btn>
    <v-btn text :to="{ name: 'MoviesFavorite' }">Favorites</v-btn>
  </v-app-bar>
</template>

<script setup lang="ts"></script>
