import { defineStore } from "pinia";

export const useMyDataStore = defineStore("mydata", {
  state: () => ({
    counter: 0,
    maklumat: {},
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    showdata(state) {
      return state.maklumat;
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
