<template>
  <div class="note">
    <a href="#" class="note__delete" @click.prevent="remove(note.id)">
      <span class="note__delete-icon">&times;</span>
    </a>
    <div class="note__content">
      <a class="note__title" @click.prevent="get(note.id)">
        <span v-if="note.title">{{ note.title }}</span>
        <span v-else>Untitled</span>
      </a>
      <p class="note__body">
        <span v-if="note.body">{{ note.body }}</span>
        <span v-else><em>Empty</em></span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['note', 'remove', 'get']
  };
</script>

<style lang="scss" scoped>
  @import '~@/_variables.scss';
  
  .note {
    display: flex;
    color: inherit;
    text-decoration: none;
    border-bottom: 2px solid #eee;
    opacity: 0.3;
    flex-direction: row;
    max-width: 100%;

    &:hover {
      opacity: 1;

      .note__delete {
        margin-left: 0;
      }
    }

    &__content {
      padding: 30px;
      flex: 2;
      overflow: hidden;
    }

    &__title {
      display: block;
      font-size: 1em;
      margin: 0;
      font-weight: 500;
      text-decoration: none;
      color: inherit;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &:hover {
        text-decoration: underline;
      }
    }

    &__body {
      font-size: .9em;
      margin-bottom: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__delete {
      position: relative;
      margin-left: -50px;
      width: 50px;
      display: block;
      background: $brand-gradient;
      min-height: 100%;
      color: #fff;
      transition: margin-left 150ms ease-in-out;
    }

    &__delete-icon {
      position: absolute;
      font-size: 1.5em;
      font-weight: 600;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>