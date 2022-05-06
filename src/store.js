import { keyFor } from 'core-js/fn/symbol';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';


//const authState = ref(false);

const store = new Vuex.store({
  state: {
    justEntered: null,

    curImg: null,
    curTitle: null,
    curYear: null,
    curRating: null,
    curVotesFor: null,
    curVotesAgainst: null,
  },
  plugins: [createPersistedState()],
  mutations: {
    alreadyRated(state){
      state.justEntered = true;
    },
    justEntered(state){
      state.justEntered = false;
    },
    curImgUpdate(state, newImg){
      state.curImg = newImg;
    },
    curTitleUpdate(state, newTitle){
      state.curTitle = newTitle;
    },
    curYearUpdate(state, newYear){
      state.curYear = newYear;
    },
    curRatingUpdate(state, newRating){
      state.curRating = newRating;
    },
    curVotesForUpdate(state, newVotesFor){
      state.curVotesFor = newVotesFor;
    },
    curVotesAgainstUpdate(state, newVotesAgainst){
      state.curVotesAgainst = newVotesAgainst;
    }
  },
  actions: {
    nextMovie({ commit }, movie){
      commit('curImgUpdate', movie.img);
      commit('curTitleUpdate', movie.title);
      commit('curYearUpdate', movie.year);
      commit('curRatingUpdate', movie.rating);
      commit('curVotesForUpdate', movie.votesFor);
      commit('curVotesAgainstUpdate', movie.votesAgainst);
    }
  }
});