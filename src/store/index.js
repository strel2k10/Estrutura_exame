import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Badjoras: [
      /* podes ter aqui objetos tipo assim bro: {
           id: 0,
           nome: "Su",
           prova: "Natacinha",
           ano: 2020,
           kms: 253,
           tempo: 25
         } */
    ],
  },
  getters: {
    getBadjoras: state => state.Badjoras
  },
  mutations: {
    // METER AQUI CENOS DE LÓGICA TIPO ADDS E REMOVES E CENAS
    ADD_PERFORMANCE(state, payload) {
      //adicionar novo performance ao array
      state.Performances.push({
        id: payload.id,
        nome: payload.nome,
        prova: payload.prova,
        ano: payload.ano,
        kms: payload.kms,
        tempo: payload.tempo
      });

      localStorage.setItem("Performances", JSON.stringify(state.Performances));
    },
  },
  actions: {},
  modules: {}
});