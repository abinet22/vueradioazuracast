import { createStore } from 'vuex';
import nowplaying from "./nowplaying";
import playerConfig from "./playerConfig";

import favorites from './Favorites';
export default createStore({
  modules: {
    nowplaying,
    playerConfig,
    favorites
  },
});