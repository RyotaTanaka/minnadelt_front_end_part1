<template>
  <div class="news">
    <v-content>
      <v-container>
        <v-layout row wrap align-center>
          <v-flex xs12 md4>
            <div class="text-xs-center">
              <v-avatar size="125px">
                <img
                  class="img-circle elevation-7 mb-1"
                  src="../../static/mickey.jpg"
                >

              </v-avatar>
              <div class="headline">Mickey <span style="font-weight:bold">Mouse</span></div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3">Fashionable Easter</div>
              <v-layout justify-space-between>
                <router-link to="/">Home</router-link>
                <a href="javascript:;" class="body-2">About</a>
              </v-layout>
            </div>
          </v-flex>

          <v-flex xs12 md5 offset-md2>
            <div v-for="post in posts" :key="post.title">
              <v-card class="my-3" hover>
                <v-card-media
                  class="white--text"
                  height="230px"
                  :src="post.imgUrl"
                >

                </v-card-media>
                <v-card-text>
                  <p v-html="post.content"></p>
                </v-card-text>
                <v-card-actions>
                  <v-btn icon class="red--text">
                    <v-icon medium>fa-reddit</v-icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text">
                    <v-icon medium>fa-twitter</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon medium>fa-facebook</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn flat class="blue--text">Read More</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      posts: [
        {
          content: 'My life didn’t please me, so I created my life.<br><br>私の人生は楽しくなかった。だから私は自分の人生を創造したの。',
          imgUrl: '../../static/tanaka_comment2.jpg'
        },
        {
          content: 'Love dies only when growth stops.<br><br>愛が死ぬのは、愛の成長が止まる、その瞬間である。',
          imgUrl: '../../static/tanaka_comment3.jpg'
        },
        {
          content: 'Halloween!!! Halloween!!! Halloween!!! Halloween!!! Halloween!!! Halloween!!! Halloween!!! Halloween!!! Halloween!!!',
          imgUrl: '../../static/halloween.JPG'
        }
      ]
    }
  },
};
</script>

<style scoped>

</style>
