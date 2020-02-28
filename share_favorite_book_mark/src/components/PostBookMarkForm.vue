<template>
<div>
  <section class="post_form">
    <form>
      <label>URL<input type="text" v-model="bookmark"></label>
      <button type="submit" @click.prevent="do_post">Share!!!</button>
    </form>
  </section>
</div>
</template>

<style lang="css">

.post_form {
  text-align: center;
}

</style>

<script>
import axios from 'axios';

export default {
  name: 'PostBookMarkForm',
  data() {
    return {
      category: '',
      title: '',
      comment: '',
      bookmark: '',
      author: '',
    };
  },
  methods: {
    do_post() {
      this.loading = true;
      this.post_bookmark();
    },
    post_bookmark() {
      const PostTargetUrl = 'http://localhost:3000/bookmarks';
      const params = new URLSearchParams();
      const PostDataParams = {
        url: this.url,
        category: this.category,
        title: this.title,
        comment: this.comment,
        bookmark: this.bookmark,
        author: this.author,
      };
      params.append('url', PostDataParams);
      axios.post(PostTargetUrl, PostDataParams)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log('An error ocurred: ', error);
        });
    },
  },
};
</script>
