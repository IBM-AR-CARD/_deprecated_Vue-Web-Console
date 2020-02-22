import Vue from "vue";
import Vuex from "vuex";

import Auth from './modules/auth';
import Profile from './modules/profile';
import mutations from './mutations';
Vue.use(Vuex);

const state = {
    token:''
}
export default new Vuex.Store({
    state,
    mutations,
    modules:{
        auth:Auth,
        profile:Profile
    }
});