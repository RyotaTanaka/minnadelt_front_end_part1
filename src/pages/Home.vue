<template>
  <div class="home">
    <v-flex xs12 md12>
      <section>
        <v-parallax src="../../static/introduction.jpeg" height="1200">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <h1 class="red--text font-weight-bold mb-2 display-1 text-xs-center">夢見ることができれば、それは実現できる。</h1>
            <div class="red--text font-weight-bold subheading mb-3 text-xs-center">If you can dream it, you can do it.</div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">本名：田中涼太</h2>
              <span class="subheading">
                1991年7月22日生まれ
              </span>
            </div>
          </v-flex>

          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md6  v-for="(introduction, index) in introductions" v-bind:key="index">
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">{{ introduction.iconType }}</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">{{ introduction.title }}</div>
                    </v-card-title>
                    <v-card-text v-html="introduction.introductionDetail">
                      <div v-html="introduction.introductionDetail"></div>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="../../static/disney_travel.jpg" height="800">
          <v-layout column align-center justify-center>
            <div class="headline red--text font-weight-bold mb-3 text-xs-center">変革せよ。変革を迫られる前に。</div>
            <em class="red--text font-weight-bold">Change before you have to.</em>
          </v-layout>
        </v-parallax>
      </section>

      <v-card color="black" class="white--text">
        <v-layout row>
          <v-flex xs7>
            <v-card-title primary-title>
              <div>
                <div class="headline">Live出演</div>
                <div>Bass担当</div>
                <div>@柏</div>
                <div>(2018)</div>
              </div>
            </v-card-title>
          </v-flex>
          <v-flex xs5>
            <v-img
              src="../../static/bass.jpg"
              contain
            ></v-img>
          </v-flex>
        </v-layout>
        <v-divider light></v-divider>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import concat from 'lodash/concat';

export default {
  name: 'Home',

  data() {
    return {
      introductions: [],

      birthIntroduction: {
        iconType: '',
        title: '',
        introductionDetail: '',
      },

      careerIntroduction: {
        iconType: '',
        title: '',
        introductionDetail: '',
      },

      hobbyIntroduction: {
        iconType: '',
        title: '',
        introductionDetail: '',
      },

    };
  },

  created() {
    // 出身紹介情報を取得・設定
    this.birthIntroduction.iconType = 'account_circle';
    this.birthIntroduction.title = '出生';
    this.birthIntroduction.introductionDetail = '1991年、夏 東京都で出生。 <br>大学時代は建築学を専攻していたが、「これかの時代ITっしょ！」という理由だけでIT業界へ。<br>性格は穏やかで誠実。人見知りでシャイなタイプ。 少しめんどくさがり。<br>最近の悩みは彼女ができないままクリスマスを迎えてしまいそうなこと。 <br>';

    // 職歴紹介情報を取得・設定
    this.careerIntroduction.iconType = 'business';
    this.careerIntroduction.title = '職歴';
    this.careerIntroduction.introductionDetail = '2015年、株式会社ケアリッツアンドパートナーズに入社。 <br>現在四年目。<br>フロントエンド寄りエンジニア。<br>某動画配信サービスのPS4アプリを作成する際Vue.jsに出会い感銘を受ける。<br>軽音部、裏ディズニー部所属。 <br>';

    // 趣味情報を取得・設定
    this.hobbyIntroduction.iconType = 'favorite';
    this.hobbyIntroduction.title = '趣味';
    this.hobbyIntroduction.introductionDetail = '・ディズニー（年パス所持）<br>・カメラ<br>・バンド（ベース担当）<br>・映画鑑賞<br><span class="red--text font-weight-bold">・合コン<br></span><div style="float: right;"><div style="float: right;">andmore...</div>';

    this.introductions = concat(this.birthIntroduction, this.careerIntroduction, this.hobbyIntroduction);
    console.log(this.introductions);
  }
};
</script>

<style scoped>

</style>
