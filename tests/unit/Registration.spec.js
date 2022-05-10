import { flushPromises, mount, shallowMount } from '@vue/test-utils';
import Registration from '@/views/Registration.vue';
import { store } from '../../src/store.js';
import axios from 'axios';

const mockPostData = {
  data: {
    token: "string"
  }
}
jest.spyOn(axios, 'post').mockResolvedValue(mockPostData);

const mockRoute = {
  params: {
    id: 1
  }
}

const mockRouter = {
  push: jest.fn()
}

describe('Registration.vue', () => {
  test('registration http request check', async () => {
    const wrapper = shallowMount(Registration, {
      global: {
        plugins: [store],
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        }
      }
    });
    await wrapper.get('button').trigger('click');
    
    //expect(true).toBeTruthy();
    await expect(axios.post).toHaveBeenCalledTimes(1);

    let headers = {
      "username": wrapper.vm.username,
      "password": wrapper.vm.password  
    };
    await expect(axios.post).toHaveBeenCalledWith(wrapper.vm.backendUrl, headers);

  });


});