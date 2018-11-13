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
              <v-list-tile-title>HOME</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/news">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>search</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>NEWS</v-list-tile-title>
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
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>


      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>

    </v-toolbar>
  </div>
</template>
