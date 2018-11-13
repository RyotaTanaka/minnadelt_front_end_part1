<template>
  <div class="contact">
    <v-layout>
      <v-flex sm12>
          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>phone</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ phoneNumber }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>

                <v-icon>chat</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon>sms</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>Line ID: {{ lineId }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>


            <v-list-tile>
              <v-list-tile-action>
                <v-icon>mail</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ mailAddress }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-divider inset></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon>location_on</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>〒{{ postalCode }} {{ address }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>

          <v-img
            src="../../static/tanaka_comment.jpg"
            height="300px"
          ></v-img>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      phoneNumber: '(080) ○○○○-○○○○',
      lineId: '○○○',
      mailAddress: 'ryota.tanaka.0722@gmail.com',
      postalCode: '279-0031',
      address: '千葉県浦安市舞浜１−１ ホーンテッドマンション'
    };
  },
};
</script>

<style scoped>

</style>
