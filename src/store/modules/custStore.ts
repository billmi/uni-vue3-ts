import { defineStore } from 'pinia'

const custStore = defineStore('cust', {
  state: () => ({
    name: "",
    age : 0
  }),
  getters: {
    getAge: (state) => state.age,
    getName: (state) => state.name
  },
  actions: {
    saveUserInfo(name :string,age :number) {
      this.name = name
      this.age = age
    },
    async asyncIncrease() {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      this.age += 1
    }
  }
})

export default custStore
