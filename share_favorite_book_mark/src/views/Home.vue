<template>
  <div>
    <nav class="navbar">
      <form class="searchbar">
        <div>
          <label>
            <span class='screen-reader-only'></span>
            <input
              v-model="tag"
              placeholder="Search for book mark"
              type="text"
              class="searchbar-input">
          </label>
        </div>
        <button
          type="submit"
          class="btn btn--green btn--go"
          @click.prevent="ShowFavoritUrls">
            Show
        </button>
        <button
          type="submit"
          class="btn btn--green btn--go"
          @click.prevent="openModal">
            create
        </button>
      </form>
    </nav>
    <div id="overlay" v-show="showContent">
      <div id="content">
        <PostBookMark />
      <p><button v-on:click="closeModal" >close</button></p>
    </div>
    </div>
   <div class="wrapper">
      <p v-if="loading" class="text-centered">
        Loading...
      </p>
      <ul v-else class="image-card-grid">
        <image-card
          v-for="url in urls"
          :key="url.id"
          :url="url" />
      </ul>
   </div>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script>

import axios from 'axios';
import ImageCard from '../components/ImageCard.vue';
import PostBookMark from '../components/PostBookMarkForm.vue';
import config from '../../config';

export default {
  name: 'home',
  components: {
    ImageCard,
    PostBookMark
  },
  data() {
    return {
      loading: false,
      tag: '',
      images: [],
      urls: [],
      showContent: false
    };
  },
  computed:{
  //ページが読み込まれたときに、登録済のブックマークを表示したい
  },
  methods: {
    search() {
      this.loading = true;
      this.fetchImages()
        .then((response) => {
          this.images = response.data.photos.photo;
          this.loading = false;
        })
        .catch((error) => {
          console.log('An error ocurred: ', error);
        });
    },

    ShowFavoritUrls() {
      this.loading = true;
      this.fetchAllFavoritUrls()
        .then((response) => {
          this.urls = response.data;
          this.loading = false;
        });
      console.log(this.urls);
    },

    fetchAllFavoritUrls() {
      return axios({
        method: 'get',
        url: 'http://localhost:3000/bookmarks',
      });
    },
    openModal: function(){
      this.showContent = true
    },
    closeModal: function(){
      this.showContent = false
    }
  },
};
</script>

<style lang="scss">
.screen-reader-only {
  height: 1px;
  width: 1px;
  position: absolute;
  // left: -100000px;
}
.text-centered {
  text-align: center;
}
.wrapper {
  margin: 0 auto;
  max-width: 800px;
  @media only screen and (max-width: 799px) {
    max-width: 100%;
    margin: 0 1.5rem;
  }
}
.image-card-grid {
  list-style: none;
  margin: .5rem 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #F0F0F0;
}
.searchbar {
  width: 300px;
  display: flex;
  // align-items: center;
   justify-content: flex-start;
  @media only screen and (max-width: 549px) {
    width: 100%;
    label {
      width: 80%;
    }
  }
}
.searchbar-input {
  padding: .5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  border: 1px solid gray;
  min-width: 300px;
  @media only screen and (max-width: 549px) {
    min-width: 0;
    width: 100%;
  }
}
.btn {
  padding: .5rem 1rem;
  font-size: 1rem;
  border-radius: 20px;
  background: transparent;
  border: none;
}
.btn--green {
  background: #42b983;
  color: white;
  font-weight: bold;
}
.btn--go {
  padding: .5rem 2rem;
  margin-left: 1rem;
}
.create_article_button {
  text-align: left;
  padding-left: 40px;
}
.message {
    background: #eee;
    border: 2px solid #333;
    border-radius: 1em;
    padding: 1em;
}
.message.error {
    background: #f30;
    color: #fff;
}
.error {
    background: #ff0;
    border-color: #fc0;
}
#overlay {
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
#content{
  z-index:2;
  width:40rem;
  height: auto;
  padding: 1em;
  background:#fff;
}
</style>
