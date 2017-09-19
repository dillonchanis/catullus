<template>
  <div class="preview">
    <div v-html="markdown"></div>
  </div>
</template>

<script>
  import marked from 'marked';

  export default {
    props: {
      text: String
    },
    computed: {
      markdown() {
        return marked(this.text, {
          sanitize: true
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .preview {
    flex: 1;
    background-color: #fff;
    line-height: 2;
    padding: 20px 30px;
  }
</style>