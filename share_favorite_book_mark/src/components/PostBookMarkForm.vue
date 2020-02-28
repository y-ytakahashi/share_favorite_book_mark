<template>
<div>
  <section class="post_form">
    <form>
      <fieldset>
        <div>
          <label for="input_category">Category</label>
          <input name="input_category" type="text" placeholder="input share url" v-model="category">
        </div>
        <input type="text" placeholder="input share title" v-model="title">
        <input type="text" placeholder="input share comment" v-model="comment">
        <input type="text" placeholder="input share author" v-model="author">
      </fieldset>
      <button type="submit" @click.prevent="do_post">Share!!!</button>
    </form>
  </section>
</div>
</template>

<style lang="css">

.post_form {
  text-align: center;
}
input {
  border: solid 2px gainsboro;
  border-radius: 10px;
}
input:focus {
    box-shadow: 0 0 5px 0 rgba(255,153,0,1);
    border:none;
    padding: 2px 8px;
    border-radius: 10px;
    outline: none;
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
