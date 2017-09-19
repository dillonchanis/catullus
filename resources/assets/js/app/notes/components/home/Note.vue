<template>
  <div class="note">
    <div class="note__view">
    </div>
    <div class="note__details">
      <div class="note__sub">
        <time :date="note.created_at">{{ note.created_at | dateForHumans }}</time>
      </div>
      <h1 class="note__header">
        <router-link :to="{ name: 'notepad', params: { id: note.id } }">
          {{ note.title }}
        </router-link>
      </h1>
      <p>{{ note.body | truncate }}</p>
    </div>
  </div>
</template>

<script> 
  import { mapGetters } from 'vuex';

  export default {
    props: ['note'],
    name: 'home-note',
    filters: {
      truncate(value) {
        return _.truncate(value, {
          'length': 100
        });
      }
    }
  };
</script>

<style scoped lang="scss">
  @import '~@/_variables.scss';

  .note {
    display: flex;
    background-color: #fff;
    min-height: 240px;
    border-radius: 4px;
    box-shadow: 0 5px 10px rgba(#000000, 0.10);
    margin-bottom: 40px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    will-change: transform, box-shadow;

    &:hover {
      transform: translateY(-5px) translateZ(0);
      box-shadow: 0 16px 32px 0 rgba(62,57,107,0.28), 0 0 0 transparent;
    }

    &__details {
      flex: 1;
      padding: 40px;
    }

    &__sub {
      font-weight: 500;
    }

    &__header {
      font-size: 1.6em;

      a {
        text-decoration: none;
      }
    }

    &__view {
      width: 15%;
      display: none;
      background: $brand-gradient;
      align-items: center;
      justify-content: center;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      overflow: hidden;
      transition: margin-left 180ms ease-in-out;

      &:hover {
        .note__editbutton {
          opacity: 1;
          transform: scale(1.5) rotate(-45deg);
        }
      }
    }

    &__editbutton {
      color: #fff;
      opacity: .4;
      width: 60%;
      transition: all 180ms ease-in-out;
    }
  }

  @media only screen and (min-width: 768px) {
    .note__view {
      display: flex;
    }
  }
</style>