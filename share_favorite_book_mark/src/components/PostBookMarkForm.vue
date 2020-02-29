<template>
  <form>
    <fieldset class="post_form">
        <label for="input_category">
          <span>Category</span>
        </label>
        <input name="input_category" type="text" placeholder="input share url" v-model="category">


        <label for="input_title">Title</label>
        <input name="input_title" type="text" placeholder="input share title" v-model="title">


        <label for="input_comment">Comment</label>
        <textarea name="input_comment" placeholder="comment" v-model="comment"></textarea>

        <label for="input_author">Author</label>
        <input type="text" placeholder="input share author" v-model="author">

        <button type="submit" @click.prevent="do_post">Share!!!</button>
    </fieldset>
  </form>
</template>

<style lang="css">

.post_form {
  margin: 0 auto;
  width: 400px;
  display: flex;
  flex-direction: column;
}
.post_form > label {
  display: inline-block;
  width: 90px;
  text-align: left;
}
.post_form > textarea {
  resize: none;
  width:30rem;
  height: 10rem;
}
input, textarea {
  /* すべてのテキストフィールドのフォント設定を一致させる
     デフォルトで、textarea は等幅フォントが設定されている */
  font: 1em sans-serif;

  /* すべてのテキストフィールドを同じサイズにする */
  width: 300px;
  box-sizing: border-box;

  /* テキストフィールドのボーダーの外見を同一にする */
  border: 1px solid #999;
  margin:10px;
}
input {
  border: solid 2px gainsboro;
  border-radius: 10px;
}
input:focus {
    box-shadow: 0 0 2px 0 rgba(255,153,0,1);
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
