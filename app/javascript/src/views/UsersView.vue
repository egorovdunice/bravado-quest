<template>
  <div class="app-container">
    <search-field
      :searchText="this.searchString"
      @onChange="handleSearch"
    />
    <user-list
      :users="list"
      :isFetching="isFetching"
    />
  </div>
</template>

<script>
  import UserList from "../components/UserList";
  import SearchField from "../components/SearchField";
  import {mapState} from "vuex";

  export default {
    name: 'UsersView',
    components: {
      'user-list': UserList,
      'search-field': SearchField,
    },
    computed: {
      ...mapState({
        list: state => state.users.list,
        isFetching: state => state.users.isFetching,
        searchString: state => state.users.searchString,
      })
    },
    methods: {
      handleSearch(value) {
        this.$store.dispatch('users/getUsersList', { search: value });
      }
    },
    mounted() {
      const { search = '' } = this.$route.params;
      this.$store.dispatch('users/getUsersList', { search });
    }
  }
</script>

<style scoped>
  .app-container {
    width: 539px;
    height: 633px;
    padding: 19px 12px 0;
    background-color: #FFFFFF;
  }
</style>
