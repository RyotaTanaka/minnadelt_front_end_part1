<template>
  <v-footer class="secondary" app>
    <v-layout row wrap align-center>
      <v-flex xs12>
        <div class="white--text ml-3">
          Made with
          <v-icon class="red--text">favorite</v-icon>
          by <a class="white--text" href="https://minnadelt.connpass.com/">みんなで学ぶ☆LT会</a>
          and <a class="white--text" href="https://github.com/RyotaTanaka/minnadelt_front_end_part1">Ryota Tanaka</a>
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {
    name: 'commonFooter',
  }
</script>

<style scoped>
.secondary {
  background-color: black;
}
</style>