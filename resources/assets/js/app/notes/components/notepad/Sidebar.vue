<template>
  <aside class="sidebar">
    <div class="sidebar__content">
      <a href="#" @click.prevent="createNote">Create a note</a>
    </div>
    <div v-if="notes.length">
      <note v-for="note in notes" :note="note" :key="note.id" :remove="deleteNote" :get="getNote"></note>
    </div>
    <div class="sidebar__content" v-if="!notes.length">
      Sorry, you don't have any notes saved.
    </div>
  </aside>
</template>

<script>
  import Note from './Note';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    components: {
      Note
    },
    methods: {
      ...mapActions({
        getNotes: 'notes/getAllNotes',
        getNote: 'notes/getNote',
        createNote: 'notes/createNote',
        deleteNote: 'notes/deleteNote'
      })
    },
    computed: {
      ...mapGetters({
        notes: 'notes/notes'
      })
    },
    mounted() {
      if(!this.notes.length) {
        this.getNotes();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '~@/_variables.scss';

  .sidebar {
    background-color: $body-bg;
    flex: 1;
    height: 100%;
    min-width: 25%;
    border-right: 2px solid #eee;
    overflow-y: auto;

    &__content {
      padding: 30px;

      a {
        text-decoration: none;
      }
    }
  }
</style>