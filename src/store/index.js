import Vue from 'vue'
import Vuex from 'vuex'
import cpc_data from "@/store/data";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cpc_data,
        selected_index:"/"

    },
    mutations: {
        set_selected_index(state,index){
            state.selected_index = index;
        }
    },
    actions: {
        change_route({commit},index){
            commit("set_selected_index",index);
        }
    },
    modules: {}
})
