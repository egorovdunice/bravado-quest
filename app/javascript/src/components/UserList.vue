<template>
  <div class="user-list">
    <loader v-if="isFetching"></loader>
    <p v-if="!isFetching && !users.length" class="user-list--empty">No user found!</p>
    <virtual-list
      v-if="!isFetching && users.length"
      :item="UserCard"
      :itemcount="users.length"
      :itemprops="getItemProps"

      :size="113"
      :remain="5"
      :bench="10"
    >
    </virtual-list>
  </div>
</template>

<script>
  import virtualList from 'vue-virtual-scroll-list'
  import UserCard from "./UserCard";
  import Loader from "./Loader";

  export default {
    name: "UserList",
    components: {
      'loader': Loader,
      'virtual-list': virtualList
    },
    data() {
      return {
        UserCard,
      };
    },
    props: {
      users: Array,
      isFetching: Boolean
    },
    methods: {
      getItemProps(index) {
        return {
          key: index,
          props: {
            user: this.users[index] || {}
          }
        }
      },
    }
  }
</script>

<style scoped lang="scss">
 .user-list {
   margin-top: 20px;

   .user-list--empty {
     font-style: italic;
     font-size: 20px;
     text-align: center;
     color: rgba(0, 0, 0, 0.87);
   }

   ::-webkit-scrollbar {
     width: 5px;
     background-color: rgba(0, 0, 0, 0.16);
   }

   ::-webkit-scrollbar-track {
     -webkit-box-shadow: inset 0 0 0 2px white;
   }

   ::-webkit-scrollbar-thumb {
     background: #4D4D4D;
     border-radius: 2px;
   }
 }
</style>