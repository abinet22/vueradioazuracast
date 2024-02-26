<template>
    <button :class="{ 'active': isFavorites }" class="favBtn" @click.stop="toggleFavorite" aria-label="Favorite">
      <i v-if="isFavorites" class="fas fa-heart text-primary fx fx-drop-in" key="on"></i>
      <i v-else class="far fa-heart fx fx-drop-in" key="off"></i>
    </button>
  </template>
  
  <script>
  import { computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    name: 'favBtn',
    props: {
      id: { type: Number, default: '', required: true },
    },
    setup(props) {
      const store = useStore();
  
      onMounted(() => {
        store.dispatch('favorites/fetchFavorites');
      });
  
      const isFavorites = computed(() => store.getters['favorites/isFavorites'](props.id));
  
      const toggleFavorite = () => {
        store.dispatch('favorites/toggleFavorite', props.id);
      };
  
      return {
        isFavorites,
        toggleFavorite,
      };
    },
  };
  </script>
  