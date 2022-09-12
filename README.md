# Beat Saber Overlay 改良版に追加機能（Rik Fail）

リュナンさんが改良している[Beat Saber Overlay 改良版](https://github.com/rynan4818/beat-saber-overlay)にFailの度に走っているRikさんが増殖する機能が追加されています。

beat-saber-overlay-2022-04-25のバージョンで動作確認しています。


## インストール時に変更している箇所

インストール方法などは、[Beat Saber Overlay 改良版](https://github.com/rynan4818/beat-saber-overlay)を参照ください。

デフォルトの見た目の状態になっているので、カスタマイズされている方は、  
`modifiers/rik.css`と`js/jquery-3.6.1.min.js`、`js/rik.js`、`video`フォルダをコピーしてカスタマイズしているオーバーレイに追加してください。

`index_rik.html`内の15行目～24行目と126行目と128行目をカスタマイズしているオーバーレイのHTMLファイルに追加してください。

### URLのmodifiers

`{オーバーレイまでのパス}/index_rik.html?modifiers=rik-fail`

URLのパラメーター、modifiersに`rik-fail`を追加することで利用できます。