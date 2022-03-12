import { reactive } from 'vue';

export const store = reactive({
  loggedIn: false,
  logIn(){
    this.loggedIn = true;
  },
  logOut(){
    this.loggedIn = false;
  }
});
