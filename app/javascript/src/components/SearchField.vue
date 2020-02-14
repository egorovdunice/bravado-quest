<template>
  <div>
    <input
      type="text"
      class="search-field"
      v-model="search"
    >
  </div>
</template>

<script>
  import debounce from "../utils/debounce";

  export default {
    name: 'SearchField',
    props: {
      searchText: {
        type: String,
        default: ''
      }
    },
    computed: {
      search: {
        get() {
          return this.searchText;
        },
        set: debounce(function (search) {
          this.$emit('onChange', search);
        }, 300),
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-field {
    width: 524px;
    height: 48px;

    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24), 0 0 2px rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    box-sizing: border-box;
    outline: none;
    border: none;
    padding-left: 50px;

    font-size: 24px;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.75);
    background: url(../images/search-icon.svg) #FAFAFA no-repeat;
    background-position-x: 18px;
    background-position-y: 14px;
  }
</style>