const mutations = {
  GET_USERS_LIST_START(state, data) {
    state.isFetching = true;
    state.searchString = data;
  },
  GET_USERS_LIST_FINISHED(state, data) {
    state.isFetching = false;
    state.list = data;
  },
  EDIT_USERS_SELECTED(state, data) {
    state.selected = data;
  },
};

export default mutations;
