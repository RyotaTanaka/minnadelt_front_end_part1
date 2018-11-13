<template>
  <v-app>
    <commonMenu></commonMenu>
    <v-content>
      <v-container fluid fill-height>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  <commonFooter></commonFooter>

  </v-app>
</template>

<script>
  import commonMenu from '@/components/commonMenu';
  import commonFooter from '@/components/commonFooter';

  export default {
    name: 'app',

    components: {
      commonMenu,
      commonFooter
    },

  }
</script>

<style>
  a {
    text-decoration: none;
  }

</style>
