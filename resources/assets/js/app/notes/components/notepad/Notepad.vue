<template>
  <div class="notepad">
    <sidebar></sidebar>
    <paper></paper>
  </div>
</template>

<script>
  import Sidebar from './Sidebar';
  import Paper from './Paper';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      Sidebar,
      Paper
    },
    computed: {
      ...mapGetters({
        notes: 'notes/notes',
        note: 'notes/note'
      })
    }
  };
</script>

<style lang="scss" scoped>
  .notepad {
    display: flex;
    height: 100%; 
  }
</style>