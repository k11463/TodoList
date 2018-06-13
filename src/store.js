import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        title: "",
        date: "",
        comment: "",
        star: false,
        open: false,
        checked: false,
      },
      {
          title: "",
          date: "",
          comment: "",
          star: false,
          open: false,
          checked: false,
      },
    ]
  },
  mutations: {
    addNewList(state, val){
      state.items.push({
        title: val,
        date: "",
        comment: "",
        star: false,
        open: true,
        checked: false
      })
    }
  },
  actions: {

  },
});
