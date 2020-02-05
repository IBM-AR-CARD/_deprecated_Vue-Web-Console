import Vue from "vue";
import Vuex from "vuex";

import Auth from './modules/auth';
import Profile from './modules/profile';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        auth:Auth,
        profile:Profile
    }
});