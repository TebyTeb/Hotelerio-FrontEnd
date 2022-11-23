import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core' // conecta piña con localStorage

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: useStorage('token', null),
      email: useStorage('email', null)
    }
  },
  getters: {
    isLoggedIn() {
      return this.token != null
    },
    userEmail() {
      return this.email
    }
  },
  actions: {
    logout() {
      this.token = null
      this.email = null
    },
    login(token, email) {
      this.token = token
      this.email = email
    },
  },
})
export const useReservationStore = defineStore('reservation',{
  state:() =>{
    return {
      type: useStorage('type',null),
      checkin: useStorage('checkin',null),
      checkout: useStorage('checkout',null),
      id:useStorage('id',null)
    }
  },
  getters:{
    getRoomInfo(){
      return {
        type:this.type,
        checkin:this.checkin,
        checkout:this.checkout,
        id:this.id
      }
    }
  },
  actions:{
    setRoomInfo(type, checkin, checkout, id){
        this.type = type
        this.checkin = checkin
        this.checkout = checkout
        this.id = id
    }
  }
})