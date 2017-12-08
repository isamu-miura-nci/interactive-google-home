# 使い方
```bash
node index {GoogleHomeデバイスのID} 
```
## 注意
### GoogleHomeデバイスのIDについて
* GoogleHomeが1つしかない場合は未指定でも構いません。
* GoogleHomeのデバイス名とは関係ありません。  
  初回から確認できる方法はないので、まずは以下のように未指定で動かしてからIDを確認してください。  
  `Device "XXXXXXXX"`の`" "`内がデバイスIDになります。
```
$ node index
何を話す？
hogehoge
Device "Google-Home-45cab22cd0a389db9d852b6d9befc34a" at 192.168.11.9:8009
```

# 開発用メモ
## 必要なパッケージ
```bash
# google-home-notifierのインストール
npm install google-home-notifier --save
# readline-syncのインストール
npm install readline-sync --save
```