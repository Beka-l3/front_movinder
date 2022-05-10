import { flushPromises, mount, shallowMount } from '@vue/test-utils';
import JoinRoom from '@/views/JoinRoom.vue';
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

describe('JoinRoom.vue', () => {
  test('join room request check', async () => {
    const wrapper = shallowMount(JoinRoom, {
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
    await expect(axios.post).toHaveBeenCalledWith(wrapper.vm.backendUrl + wrapper.vm.roomSlug + "/join", undefined, { headers });

  });

  /*test('check create room router redirect', async () => {
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
  });*/
});