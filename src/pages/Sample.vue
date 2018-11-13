<template>
  <div class="sample">
    <v-content>
      index: {{ index }}<br>
      doubleIndex: {{ doubleIndex }}<br>
      text: {{ text }}<br>

      <v-btn color="info" @click="incrementIndex(1)">Increment</v-btn>
      <v-btn color="info" @click="incrementIndex(-1)">Decrement</v-btn>

      <div v-show="index > 5">
        {{ title }}
      </div>

    </v-content>
    <commonFooter></commonFooter>
  </div>
</template>

<script>
  import commonFooter from '@/components/commonFooter';

  export default {
    name: 'sample',

    components: {
      commonFooter
    },

    data() {
      return {
        // Vue インスタンスのためのデータオブジェクトを定義
        title: 'sample',
        index: 3,
        text: '加算',
      }
    },

    computed: {
      doubleIndex() {
        // dataで定義した変数に応じてcomputed内で処理した値を取得できる
        return this.index * 2;
      },
    },

    watch: {
      index(newValue, oldValue) {
        // dataで定義した変数に何らかの変更があった場合に実行される
        // 第一引数には変更後の値、第二引数に変更前の値
        if (newValue > oldValue) this.text = '加算';
        else if (newValue < oldValue) this.text = '減算';
      }
    },

    methods: {
      incrementIndex(value) {
        // Vue インスタンスに組み込まれるメソッド
        this.index = this.index + value;
        },
    },


    // LifecycleHook
    created() {
      // インスタンスが生成された後にコードを実行したいとき
      this.title = 'sample';
    },

    mounted() {
      // インスタンスがマウントされたちょうど後
      this.index = 3;
    },

    updated() {
      // データが変更後、仮想 DOM が再描画そしてパッチを適用
    },

    destroyed() {
      // Vue インスタンスが破棄された後に呼ばれる
    },
  }
</script>

<style>
  a {
    text-decoration: none;
  }

</style>
