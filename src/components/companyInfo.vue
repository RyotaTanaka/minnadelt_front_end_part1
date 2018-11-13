<template>
  <div class="companyInfo">
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm6>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>

              <v-card-text>
                株式会社ケアリッツ・アンド・パートナーズ<br>
                〒160-0022<br>
                東京都新宿区新宿四丁目1番6号<br>
                JR新宿ミライナタワー８F
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>

              <v-card-text>
                ケアリッツでは、コミュニケーションを重視しています。弊社の技術者がプロジェクトの開発に集中ができるように、プロジェクトマネージャーがご要望をお伺いし、時に、より高い理想を実現するための要件定義、仕様定義の提案・調整を正確にスピーディーに行っていきます。
              </v-card-text>

              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>03-6273-1925</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Tokyo, JP</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>https://www.careritz.co.jp</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'companyInfo',
  data() {
    return {

    };
  },
};
</script>

<style scoped>

</style>