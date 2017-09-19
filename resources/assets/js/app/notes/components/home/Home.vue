<template>
  <div class="container container--padding">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div v-if="notes">
          <home-note v-for="note in notes" :note="note" :key="note.id"></home-note>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import HomeNote from './Note';

  export default {
    components: {
      HomeNote
    },
    methods: {
      ...mapActions({
        getNotes: 'notes/getAllNotes'
      })
    },
    computed: {
      ...mapGetters({
        notes: 'notes/notes'
      })
    },
    mounted() {
      this.getNotes();
    }
  };
</script>