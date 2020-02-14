import axios from "axios";

const actions = {
  async getUsersList({ commit }, params) {
    try {
      commit('GET_USERS_LIST_START', params.search);
      let { data } = await axios.get('/users')
      if(params && params.search) {
        data = data.filter((user) => {
          const searchString = `${user.name} ${user.city} ${user.address} ${user.title} ${user.email}`.toLowerCase();
          return searchString.includes(params.search.toLowerCase());
        });
      }
      commit('GET_USERS_LIST_FINISHED', data);
    } catch (error) {
      commit('GET_USERS_LIST_FINISHED', '');
      console.error('Fetch user list error:',error);
    }
  },
  async editSelected({ commit }, {selected, list}) {
    try {
      const index = list.indexOf(selected);
      let newList = [...list];
      if (index === -1) {
        newList.push(selected)
      } else {
        newList.splice(index, 1);
      }
      commit('EDIT_USERS_SELECTED', newList);
    } catch (error) {
      console.error('Edit selected error:',error);
    }
  },
};

export default actions;
