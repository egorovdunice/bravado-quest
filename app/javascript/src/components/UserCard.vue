<template>
  <div
    class="user-card__wrapper"
    :class="{ selected: isSelected }"
  >
    <img
      class="user-card__avatar"
      alt="avatar"
      :src=user.avatar
    />
    <div class="user-card__info">
      <div class="user-card__header">
        <div class="user-card__name" v-html="name"></div>
        <div class="user-card__email" v-html="email"></div>
      </div>
      <div class="user-card__title" v-html="title"></div>
      <div class="user-card__address" v-html="address"></div>
      <div
        class="user-card__actions"
        @click="onSelect"
      >
        {{ this.action }}
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  import highlighter from "../utils/highlighter";

  export default {
    name: 'UserCard',
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
    computed: {
      ...mapState({
        searchString: state => state.users.searchString,
        selected: state => state.users.selected,
      }),
      isSelected() {
        return this.selected.includes(JSON.stringify(this.user))
      },
      name() {
        return highlighter(this.user.name, this.searchString)
      },
      email() {
        return highlighter(this.user.email, this.searchString)
      },
      title() {
        return highlighter(this.user.title, this.searchString)
      },
      address() {
        return highlighter(`${this.user.address}, ${this.user.city}`, this.searchString)
      },
      action() {
        return this.isSelected ? 'skip selection' : 'mark as siutable'
      },
    },
    methods: {
      onSelect() {
        this.$store.dispatch('users/editSelected', { selected: JSON.stringify(this.user), list: this.selected });
      }
    }
  }
</script>

<style scoped lang="scss">
  .user-card__wrapper {
    width: 524px;
    min-height: 136px;
    background: #FAFAFA;
    box-sizing: border-box;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);
    border-radius: 3px;
    display: flex;
    align-items: stretch;
    margin-bottom: 21px;

    &.selected {
      border: 1px solid #4765FF;

      .user-card__actions.user-card__actions {
        border-top: none;
      }
    }
    .user-card__avatar {
      width: 134px;
      background-color: #BBBBBB;
    }

    .user-card__info {
      display: flex;
      flex-direction: column;
      flex: 1;

      .user-card__header {
        padding: 10px 9px 0 27px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .user-card__name {
          font-size: 24px;
          line-height: 32px;
          color: rgba(0, 0, 0, 0.87);
        }

        .user-card__email {
          font-size: 14px;
          line-height: 16px;
          color: rgba(0, 0, 0, 0.54);
        }
      }

      .user-card__title {
        padding: 0 9px 0 27px;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.543846);
      }

      .user-card__address {
        padding: 0 9px 2px 27px;
        font-size: 14px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.543846);
      }

      .user-card__actions {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #009688;
        text-transform: uppercase;

        border-top: 1px solid rgba(0, 0, 0, 0.12);
        width: calc(100% - 27px);
        height: 50px;

        display: flex;
        align-items: center;
        padding-left: 27px;
        cursor: pointer;
      }
    }

    /deep/ .user-card--highlighted {
      background-color: #FFF73B;
    }
  }
</style>