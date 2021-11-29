import Vue from 'vue'
import Vuex from 'vuex'
import params from './params'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ...params,
    }
})
