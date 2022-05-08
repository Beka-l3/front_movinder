import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';


//const authState = ref(false);

export const store = new Vuex.Store({
  state: {
    authorized: false,
    authToken: "string",
    roomSlug: "string",

    justEntered: null,
    roomCreator: false,

    curMovie: {
      id: "string",
      name: "string",
      posterUrl: "../assets/sample_poster.jpg",
      description: "string",
      rating: {
        kinopoisk: 0,
        imdb: 0,
        tmdb: 0,
      },
      genres: [
        "string",
      ],
      actors: [
        {
          name: "string",
          photoUrl: "string",
        },
      ],
    },
  },
  plugins: [createPersistedState()],
  mutations: {
    alreadyRated(state){
      state.justEntered = true;
    },
    justEntered(state){
      state.justEntered = false;
    },
    loggedIn(state){
      state.authorized = true;
    },
    loggedOut(state){
      state.authorized = false;
    },
    updateAuthToken(state, authToken){
      state.authToken = authToken;
    },
    updateRoomSlug(state, roomSlug){
      state.roomSlug = roomSlug;
    }, 
  
    updateMovie(state, movie){
      state.curMovie = movie;
    },
    /*
    updateId(state, id){
      state.id = id;
    },
    updateName(state, name){
      state.name = name;
    },
    updatePosterUrl(state, posterUrl){
      state.posterUrl = posterUrl;
    },
    updateDescription(state, description){
      state.description = description;
    },
    updateRating(state, rating){
      state.rating = rating;
    },
    updateGenres(state, genres){
      state.genres = genres;
    },
    updateActors(state, actors){
      state.actors = actors;
    },*/
    
  },
  actions: {
    nextMovie({ commit }, movie){
      commit('updateMovie', movie);
      /*commit('curImgUpdate', movie.img);
      commit('curTitleUpdate', movie.title);
      commit('curYearUpdate', movie.year);
      commit('curRatingUpdate', movie.rating);
      commit('curVotesForUpdate', movie.votesFor);
      commit('curVotesTotalUpdate', movie.votesTotal);*/
    }
  }
});