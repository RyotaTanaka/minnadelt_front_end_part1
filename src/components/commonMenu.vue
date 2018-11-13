<template>
  <div class="home">
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="navBar"
    >

      <v-list dense class="pt-0">
        <router-link to="/">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

        <router-link to="/news">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>search</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>News</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

        <router-link to="/about">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>info</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>About</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

        <router-link to="/contact">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Contact</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

        <router-link to="/sample">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>help</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Sample</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar
      dark
      color="primary"
      clipped-left
      fixed
      app
    >
      <v-toolbar-side-icon @click.stop="navBar = !navBar"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Ryota Tanaka Introduction</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

  </div>
</template>

<script>
  export default {
    name: 'commonMenu',
    data () {
      return {
        navBar: null,
      }
    },

    watch: {
      $route() {
        this.navBar = null;
      }
    }
  }
</script>