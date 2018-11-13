# minnadelt_front_end_part1 -Vue.js を使って爆速で SPA を構築する-
イベント登壇時に説明に使用したデモアプリのリポジトリです。<br>
プレゼン時に説明しましたがゼロからの状態から一時間弱で構築したアプリになります。<br>
こちらのサンプルコードを Clone して動かしたい場合は Clone 後に `yarn(npm) install` を実行後に`yarn dev(npm run dev)`を実行してください。

## 使用ツールなど
### vue関連
* vue-cli
* Vue 2.5.2
* vue-router(ルーティング用)
* 今回は使用していませんが状態管理したい場合はvuexを使用しましょう
* vuetify(Componentフレームワーク)

### バンドラ系
* webpack(ModuleBundler)
* babbel(ES6記法からES5へのトランスパイル用)

## 実行フロー
### 開発環境向け：`yarn dev(npm run dev)`
### サーバー環境向け：`yarn build(npm run build)`
#### ※簡単な説明
yarn(npm run) ~でpackage.jsonに記載されているscript内のnode.jsが実行されます。<br>
dev実行時はWebpackDevServer(開発用擬似サーバー)を起動したりHotModuleReloadingするための環境を構築します(build/webpack.dev.conf.jsに記載)<br>
build実行時はサーバー環境向けにバンドルするため、開発環境時に読み込むようなWebpackDevServerやHMRは読み込みません(build/build.jsに記載)<br>
loader関連もこのあたりで定義されています(開発時とサーバー環境時で共通で必要なので厳密にはwebpack.base.confに定義されてたりしますが)


## Eslintの設定
構文チェックにEslintを導入していますが設定は以下のファイルで定義しています。<br>
`.eslint.js`<br>
今回はeslintのrecommendedのみを設定していますが、より強固にしたい場合はstrongly-recommendedなどを設定した方が良いでしょう。


## APIとの疎通
今回はテーマから外れるため割愛しましたが、RestFulAPIとアクセスする場合は公式が推奨するaxiosを使用した方が良いでしょう。<br>

## [イベントページはこちら](https://minnadelt.connpass.com/event/104775/)
