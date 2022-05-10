import { flushPromises, mount, shallowMount } from '@vue/test-utils';
import CreateRoom from '@/views/CreateRoom.vue';
import { store } from '../../src/store.js';
import axios from 'axios';

const mockPostData = {
  data: {
    id: "string",
    slug: "string",
    creator: "string",
    users: [
      "string"
    ],
    status: "Created"
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

describe('CreateRoom.vue', () => {
  test('create room post request check', async () => {
    const wrapper = shallowMount(CreateRoom, {
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
      'Authorization': `Bearer ${wrapper.vm.$store.state.authToken}`,
    }
    await expect(axios.post).toHaveBeenCalledWith(wrapper.vm.backendUrl, undefined, { headers });
  });

  test('check create room router redirect', async () => {
    const wrapper = shallowMount(CreateRoom, {
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
    //expect(axios.post).toHaveBeenCalledTimes(1);

    // let headers = {
    //   'Authorization': `Bearer ${wrapper.vm.$store.state.authToken}`,
    // }
    // expect(axios.post).toHaveBeenCalledWith(wrapper.vm.backendUrl, undefined, { headers });

    await expect(mockRouter.push).toHaveBeenCalledTimes(2);
    await expect(mockRouter.push).toHaveBeenCalledWith('/waiting_room');
  });

  /*test('create room method check', async () => {
    const wrapper = shallowMount(CreateRoom, {
      global: {
        plugins: [store],
        mocks: {
          $route: mockRoute,
          $router: mockRouter,
        }
      }
    });
    //await wrapper.get('button').trigger('click');
    wrapper.vm.createRoom();
    //expect(true).toBeTruthy();
    //expect(axios.post).toHaveBeenCalledTimes(1);

    // let headers = {
    //   'Authorization': `Bearer ${wrapper.vm.$store.state.authToken}`,
    // }
    // expect(axios.post).toHaveBeenCalledWith(wrapper.vm.backendUrl, undefined, { headers });
    await expect(axios.post).toHaveBeenCalledTimes(3);

    let headers = {
      'Authorization': `Bearer ${wrapper.vm.$store.state.authToken}`,
    }
    await expect(axios.post).toHaveBeenCalledWith(wrapper.vm.backendUrl, undefined, { headers });      
    await expect(mockRouter.push).toHaveBeenCalledTimes(2);
    await expect(mockRouter.push).toHaveBeenCalledWith('/waiting_room');
  });*/
});