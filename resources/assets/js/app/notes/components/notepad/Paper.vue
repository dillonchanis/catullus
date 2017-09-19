<template>
  <div class="paper" v-if="note">
    <input 
      type="text" class="paper__title" placeholder="Untitled Note" 
      @keydown="save"
      v-model="note.title">

    <transition name="slide" mode="out-in" appear>
      <preview v-if="!edit" :text="note.body"></preview>

      <textarea class="paper__text" placeholder="Start Writing..."
        v-else
        @keydown="save"
        v-model="note.body"></textarea>
    </transition>

    <footer class="paper__footer">
      <ul class="paper__footer-items">
        <li @click="edit = !edit" class="paper__footer-item paper__footer-item--edit">
          <i :class="editIcon" aria-hidden="true"></i> 
          {{ toggleEdit }}
        </a>
        <li class="paper__footer-item paper__footer-item--center">Read Time: {{ readTime }}</li>
        <li class="paper__footer-item paper__footer-item--right">Last Saved: {{ note.updated_at | dateForHumans }}</li>
      </ul>
    </footer>
  </div>
</template>

<script>
  import Preview from './Preview';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    components: {
      Preview
    },
    data() {
      return {
        edit: false
      }
    },
    methods: {
      ...mapActions({
        getNote: 'notes/getNote',
        saveNote: 'notes/saveNote',
        saveDebounce: 'notes/saveDebounce'
      }),
      save() {
        if(!this.note.id) {
          this.saveNote();
          return;
        }

        this.saveDebounce();
      }
    },
    computed: {
      ...mapGetters({
        note: 'notes/note',
        readTime: 'notes/readTime'
      }),
      toggleEdit() {
        return this.edit ? 'Read' : 'Edit';
      },
      editIcon() {
        return this.edit ? 'fa fa-book' : 'fa fa-edit';
      }
    },
    mounted() {
      this.getNote(this.$route.params.id);
    }
  };
</script>

<style lang="scss" scoped>
  @import '~@/_variables.scss';

  .paper {
    display: flex;
    flex: 4;
    flex-direction: column;

    &__title {
      max-width: 100%;
      border: 0;
      border-bottom: 1px solid #ddd;
      font-size: 1.6em;
      outline: none;
      padding: 20px;
      padding-left: 30px;
      padding-top: 25px;
    }

    &__text {
      flex: 1;
      max-width: 100%;
      margin: 0;
      border: 0;
      outline: none;
      padding: 20px 30px;
      resize: none;
      line-height: 2;

      -webkit-mask-image: linear-gradient(
        to bottom,
        transparent 0%,
        #fff 0%,
        #fff 95%,
        transparent 100%
      );
    }

    &__footer {
      padding: 20px 30px;
    }

    .paper__footer-items {
      display: flex;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    .paper__footer-item {
      flex: 1;
      font-size: .9em;

      &--edit {
        color: $brand-primary;
        cursor: pointer;
      }

      &--center {
        margin: auto;
        text-align: center;
      }

      &--right {
        margin-left: auto;
        text-align: right;
      }
    }
  }
</style>