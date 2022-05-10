import { mount } from '@vue/test-utils';
import MovieRatings from '@/views/MovieRatings.vue';
import { store } from '../../src/store.js';
import axios from 'axios';

const mockPostData = {
  data: {
    matchedMovies: [
      "string"
    ],
    ranking: [
      {
        movieId: "string",
        likedUsers: [
          "string"
        ]
      }
    ]
  }
}
jest.spyOn(axios, 'get').mockResolvedValue(mockPostData);

const mockRoute = {
  params: {
    id: 1
  }
}

const mockRouter = {
  push: jest.fn()
}

describe('MovieRatings.vue', () => {
  it('get requests check', async () => {

      const wrapper = mount(MovieRatings, {
        global: {
          plugins: [store]
        }
      });
    
      await expect(axios.get).toHaveBeenCalledTimes(1);

      let headers = {
        'Authorization': `Bearer ${wrapper.vm.$store.state.authToken}`,
      }
      await expect(axios.get).toHaveBeenCalledWith(wrapper.vm.backendUrl + wrapper.vm.roomSlug + "/stats", { headers });
  });
  /*it('renders movie info', async () => {
    const ranking = {
      movieId: "string",
      likedUsers: [
        "string"
      ]
    };
    const wrapper = mount(MovieListItem, {
      props: { ranking },
      global: {
        plugins: [store]
      },
      data(){
        return {
          movieInfo: {
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
        };
      }
    });
    expect(wrapper.text()).toMatch(wrapper.vm.movieInfo.name);
  })*/
})