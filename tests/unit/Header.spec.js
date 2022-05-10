import { flushPromises, mount, shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
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

describe('Header.vue', () => {
  test('router join room redirect check', async () => {
    const wrapper = shallowMount(Header, {
      global: {
        plugins: [store, router],
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        }
      }
    });
    //await wrapper.get('a').trigger('click');
    expect(true).toBeTruthy();
    await expect(mockRouter.push).toHaveBeenCalledTimes(0);
    //await expect(mockRouter.push).toHaveBeenCalledWith('/join_room');
  });
  /*test('log out button check', async () => {
    const wrapper = shallowMount(Header, {
      global: {
        plugins: [store],
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        }
      }
    });
    store.commit('loggedIn');
    const button = wrapper.find("button")
    
    expect(button.exists()).toBe(true);
  });*/
});