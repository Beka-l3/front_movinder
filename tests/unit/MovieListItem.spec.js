import { mount } from '@vue/test-utils';
import MovieListItem from '@/components/MovieListItem.vue';
import { store } from '../../src/store.js';

describe('MovieListItem.vue', () => {
  it('renders ranking props', async () => {
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
        }
      });
      expect(wrapper.text()).toMatch(ranking.likedUsers.length + "");
  });
  it('renders movie info', async () => {
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
  })
})