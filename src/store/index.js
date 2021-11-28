import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
      {tittle: "one", description:"Not Vegan",stars:"one"},
      {tittle: "two", description:"Vegan",stars:"five"},
      {tittle: "three", description:"Not Vegan",stars:"four"},
      {tittle: "four", description:"Vegan",stars:"three"},
      {tittle: "five", description:"Vegan",stars:"one"},
      {tittle: "six", description:"Not Vegan",stars:"two"},
      {tittle: "seven", description:"Not Vegan",stars:"five"},
      {tittle: "eight", description:"Not Vegan",stars:"two"}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
