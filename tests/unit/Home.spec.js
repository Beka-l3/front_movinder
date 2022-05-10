import { flushPromises, mount, shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import { store } from '../../src/store.js';
import router from '../../src/router/index.js';
import axios from 'axios';

const mockRoute = {
  params: {
    id: 1
  }
}

const mockRouter = {
  push: jest.fn()
}

describe('Home.vue', () => {
  test('component check', async () => {
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [store, router],
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        }
      }
    });
    expect(true).toBeTruthy();
  });
  
});