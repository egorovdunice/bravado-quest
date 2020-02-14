import Vue from 'vue';
import Vuex from 'vuex';

import users from './modules/users';

Vue.use(Vuex);

Vue.config.devtools = (process.env.NODE_ENV && process.env.NODE_ENV === 'development') || true;

export default new Vuex.Store({
  modules: {
    users,
  },
});
