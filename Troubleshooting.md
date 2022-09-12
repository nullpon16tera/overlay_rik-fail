# トラブルシューティング

オーバーレイが表示されない場合、ほとんどの場合はModの導入に問題があります。

※この説明で Mod とは、BeatSaberのインストールフォルダにある `Plugins` や `Libs` のフォルダに入れるファイル群のことを指します。
オーバーレイは厳密にはBeatSaberと直接関わらないため Mod とは違いツール扱いです。

## 導入したmodのバージョンが、BeatSaberのバージョンに対応しているか確認してください

[動作確認環境](https://github.com/rynan4818/beat-saber-overlay/wiki)

※modのバージョンはDLLファイルのプロパティの詳細で確認できます。

## 必要なファイルがフォルダにあるか確認してください

### HTTPStatus使用時
| フォルダ | ファイル                 |
-----------|---------------------------
| Libs     | websocket-sharp.dll      |
| Plugins  | BeatSaberHTTPStatus.dll  |
| ↑       | websocket-sharp.manifest |
| ↑       | BS_Utils.dll             |


### HttpSiraStatus使用時
| フォルダ | ファイル                 | 備考 |
-----------|--------------------------|-------
| Libs     | websocket-sharp.dll      |      |
| Plugins  | HttpSiraStatus.dll       |      |
| ↑       | SiraUtil.dll             |      |
| ↑       | websocket-sharp.manifest |      |
| ↑       | BS_Utils.dll             |      |
| ↑       | HttpStatusExtention.dll  | *1  |
| ↑       | SongCore.dll             | *2  |
| ↑       | SongDataCore.dll         | *2 |

| 備考 | |
-------|----
| *1| HttpStatusExtention.dllのインストールは任意。無くても良い。 |
| *2| HttpStatusExtention.dllを入れた場合は必須。                 |


以下のファイルはModAssistantを使用してインストールしてください。BeatSaberアップデート直後の場合は無い場合もありますが、これらは基幹Modと呼ばれるため、多くの場合は数日以内にリリースされます。ModAssistantに登録されるまでお待ち下さい。
| Mod      | ファイル      |
-----------|---------------
| BS Utils | BS_Utils.dll |
| SongCore | SongCore.dll |
| SongDataCore | SongDataCore.dll |
| SiraUtil | SiraUtil.dll, SiraUtil.xml |
| websocket-sharp | websocket-sharp.dll, websocket-sharp.manifest |

※websocket-sharpについては、ModAssistantに未登録な場合は[BEATMODS](https://beatmods.com/#/mods)で、1つ前の`Game Version`から`websocket-sharp`を`Download Zip`してインストールも可能です。websocket-sharpはBeatSaberのアップデートと無関係なため旧Game Version用を使用しても通常は問題ありません。

## HTTPStatus使用時に、`HttpSiraStatus.dll` や `HttpStatusExtention.dll`をインストールしていませんか？
   HTTPStatusとHttpSiraStatusは競合して同時に使用できませんので、インストールされている場合はファイルを削除してください。

## HttpSiraStatus使用時に、`BeatSaberHTTPStatus.dll` をインストールしていませんか？
   上記と同じ理由です。インストールされている場合は、ModAssistantでHTTPStatusをアンインストールしてください。
   ModAssistantにHTTPStatusが未登録の場合は、ファイルを直接削除してください。

## OBSのソース設定で、オーバーレイのレイヤがBeatSaberのゲーム画面より上にありますか？
   ![image](https://rynan4818.github.io/beatsaber-overlay-obs-setting8.png)

## OBSのソースのオーバーレイの設定で、オーバーレイのURLは正しいですか？
   URL欄をコピーしてブラウザのアドレスから開いてみてください、`ファイルにアクセスできませんでした`等表示される場合はURL表記が間違っていますので見直してください。
   URLが正常な場合は真っ白な画面になりますが、BeatSaberをプレイするとカバー画像が表示されます。真っ白な画面のまま、カバー画像が表示されない場合はModがおかしいです。

## オーバーレイの追加スクリプトを導入した場合は、正しく設定していますか？
   まずは追加スクリプトの無い、デフォルトのオーバーレイで動作するか確認してください。追加スクリプトは対象とするオーバーレイのバージョンが指定されている場合があります。基本的にはオーバーレイを最新版にすればＯＫですが、追加スクリプトの作り方によっては特定のオーバーレイのバージョンのみで動作する可能性もあります。追加スクリプトのマニュアルをよく読んで確認してください。

## それでも正しくオーバーレイが表示されない場合
[Beat Saber HTTP Status Checker](https://rynan4818.github.io/http_status_check.html)をブラウザで開いた状態でBeatSaberをプレイしてください。

- `HTTPStatus Disconnect!` の赤文字が `HTTPStatus Connect!`の青文字に変わりますか？
- `Realtime` と `all` が選択された状態で譜面をプレイ(NFでノーツを切らなくても可、またfpfcモードで可)して、下の画面に文字(HTTPStatusから送信される文字列)がノーツミス時など、めまぐるしく変化しますか？

上記が問題ない場合はModのインストールは正常なため、オーバーレイの設定やインストール方法に問題があります。オーバーレイの設定を再度見直してください。

上記が問題ある場合はModに問題があるため、再度Modを確認してください。また、他のModとの競合やBeatSaberのバージョンに対応していないModがある可能性があります。ModAssistantでHTTPStatusまたはHttpSiraStatusの動作に必要な最低限のModのみインストールした状態で動作確認してください。

