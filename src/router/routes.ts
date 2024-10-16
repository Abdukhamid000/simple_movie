export default [
  {
    redirect: '/movies',
    path: '/'
  },

  {
    path: '/movies',
    name: 'Movies',
    component: () => import('@/pages/PHome.vue')
  },

  {
    path: '/movies/:id',
    name: 'MoviesSingle',
    component: () => import('@/pages/PMovieSingle.vue')
  },

  {
    path: '/favorites',
    name: 'MoviesFavorite',
    component: () => import('@/pages/PMovieFavorite.vue')
  }
]
