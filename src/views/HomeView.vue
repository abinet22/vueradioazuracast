<template>
  <!-- player middle content area -->
  <main class="player-content flex-autorow stationView">
    <div class="player-greet flex-1" id="home">
      <div class="fx fx-slide-left push-bottom">
        <h1>Pick a Station</h1>
        <div v-html="$t('pick_a_station')"></div>
      </div>

      <div class="fx fx-slide-up fx-delay-2 pad-top">
        <button class="cta-btn" @click="toggleSidebar(true)">
          <i class="fa fa-headphones" aria-label="OpenSidebar">&nbsp;</i>
          {{$t('view_stations')}}
        </button>
      </div>
    </div>
    <ul class="flex-grid home-station-list">
      <router-link
        class="card fx flex-grid-sm flex-1"
        id="station"
        v-for="(c, i) of channels"
        :class="'fx-slide-left fx-delay-' + (i + 2)"
        :key="c.station.id"
        :to="{ name: 'station', params: { id: c.station.id, shortcode: c.station.shortcode }}"
      >
        <div class="flex-row flex-middle flex-space">
          <div class="player-stations-list-title text-bright text-clip">{{ c.station.name }}</div>
          <div class="text-nowrap">
            <favBtn :id="c.station.id"></favBtn>
          </div>
        </div>
        <figure class="station-play">
          <div id="station-logo">
            <img
              width="100"
              height="100"
              :src="c.station.image"
              :alt="c.station.name"
              @error="c.station.image='/img/icon.png'"
            />
          </div>
          <div class="station-hover">
            <i class="far fa-play-circle fx fx-drop-in"></i>
          </div>
        </figure>

        <aside class="flex-1">
          <div class="text-small nowplaying">
            <div v-if="c.live.islive" id="live">LIVE </div>
            <div class="text-uppercase text-small" id="title">{{ c.now_playing.song.title | str_limit(30) }}</div>
            <div class="text-condense" id="artist">{{ c.now_playing.song.artist | toText }}</div>
          </div>
        </aside>
      </router-link>
    </ul>
  </main>
</template>

<script>
/**
 * Home
 */
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import favBtn from '@/views/components/favBtn';

export default {
  name: 'HomeView',
  components: {
    favBtn,
  },
  methods: {
    toText(text) {
      // Your implementation for converting text goes here
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const channels = computed(() => store.state.nowplaying.channels);

    const toggleSidebar = () => {
      // Assuming your toggleSidebar method is in the store
      store.dispatch('toggleSidebar', true);
    };

    return {
      channels,
      toggleSidebar,
    };
  },
};
</script>

