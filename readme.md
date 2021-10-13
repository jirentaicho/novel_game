# ブラウザで遊べるノベルゲームを作成できます

最新バージョン v2


# 変更履歴
- 2021/10/13 v2 Windows版シナリオ作成アプリに対応しました。
- 2021/xx/xx v1 リリースしました。

## 概要

yamlファイルを修正するだけノベルゲーム（ギャルゲー）を作成できます。
以下の機能があります

* タイトル画面
* メッセージシーン
* 選択シーン
* 条件シーン（条件によって遷移先のシーンを変更する
* 変数の使用（変数に値を変化させてシナリオ内容を分岐させます）
* セーブ・ロード（1つのデータのみブラウザのローカルストレージに保存します）


## 環境について

WEBサーバーが必要です。（簡単に作れます）

WEBサーバーの構築は以下の方法があります（案）

* 付属のDocker-compose.ymlでコンテナを立ち上げる
* 付属のpythonファイルでWEBサーバーを立ち上げる(簡単)→pythonのv3をインストールしてください。

## 以下を実行

コマンドプロンプトやターミナルから、ダウンロードしたファイルの/app/publicに移動します
例：
> cd C:\Users\misaka\Documents\dockers\nginxnode\app\public

以下のコマンドを実行します

> python3 -m http.server 8080

以下のURLにアクセスします。

> http://localhost:8080/


※画像など追加しても反映されない場合はキャッシュ削除とか、プライベートモードでのアクセスを試みてください。

## アセットファイルについて

publicフォルダに以下をフォルダを追加して、そこにファイルを配置してください。

* 画像
    * images
* 音楽
    * audio


## Dockerコンテナについて

・nginx → 実行用
・node → 開発用

public → ビルド済（公開ファイル)
src → tsファイル（開発）


## DockerでWEBサーバーを立ち上げる場合

git cloneなりしてプロジェクトのルートで以下コマンド

> dokcer-compose up -d

終わったら以下コマンド

> docker exec -it novel_node sh

次に以下コマンド

> npm install

ビルドできるかテスト

> npm run build

これはpackage.jsonに記載されている以下が参照されます

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack --mode=production",
        "start": "webpack-cli serve --mode development"
    },

## yamlファイルの記載内容について

yamlファイルに以下のような記載をしてゲームを作成します。

### images

利用する全ての画像を配列で指定します

    images:
        - back.jpg
        - keke.png
        - ren.png
        - kanon.png
        - sumire.png
        - tisato.png
        - m_misaka.png

### valiable

利用する全ての変数をオブジェクトで指定します
v2から最初の起動シーンは変数化を取りやめました。

    valiable:
        renpoint: 0
        kanonpoint: 0
        isDone: false
        isGet: false

### titleimage

タイトル画面で表示するタイトル画像を指定してください。

    titleimage: back.jpg  

### firstscene

v2から追加
最初に起動するシーン名を指定ください。

    firstscene: first

### titlemusic

タイトル画面で流すBGMを指定してください

    titlemusic: sample.mp3


### scenario

シナリオを記載します。
表現できるシナリオは３種類あります。

* MESSAGE
* CHOICE
* BRANCH

それぞれの詳細です。
シーン名をkeyにして以下をvalueとして記載していきます。

#### MESSAGE


メッセージシーンはただ、話し手とメッセージ内容をそれぞれ表示表示します。
長文は自動で改行されます。


| key名 | 値           | 形式         | 
| ----- | ------------ | ------------ | 
| type  | MESSAGE       | オブジェクト | 
| next  | 次のシーン名 | オブジェクト | 
| back  | 背景画像 | オブジェクト | 
| left  | 左側のアクター画像 | オブジェクト | 
| right  | 右側のアクター画像 | オブジェクト | 
| bgm | 音楽ファイル名 | オブジェクト |
| render  | speakerとmessage | 配列 | 


* bgm
    * 省略可能です。
    * もし再生を止めたい場合はstopを指定してください


renderの内容

| key名 | 値           | 形式         | 
| ----- | ------------ | ------------ | 
| speaker | 話す人 | オブジェクト | 
| message  | メッセージ内容| 配列 | 


例

    scenario:
        scene1:
            type: MESSAGE
            next: scene2
            back: back.jpg
            left: keke.png
            right: ren.png
            bgm: k1.mp3
            render:
                - speaker: 葉月恋
                message:
                    - このチラシを配っているのはあなたですね
                    - 勝手にこんな勧誘を
                    - 理事長の許可は取ったのですか？
                - speaker: 可可
                message:
                    - すみません
                    - 可可はただ、スクールアイドルを始めたいと思いまして・・・
                - speaker: 葉月恋
                message:
                    - 勝手なことはやらないでほしいのです。

#### CHOICE

選択シーンは選択肢によって変数の値を変更したり、選択肢によって遷移先のシーンを変更できます。


| key名 | 値           | 形式         | 
| ----- | ------------ | ------------ | 
| type  | CHOICE       | オブジェクト | 
| back  | 背景画像 | オブジェクト | 
| left  | 左側のアクター画像 | オブジェクト | 
| right  | 右側のアクター画像 | オブジェクト | 
| bgm | 音楽ファイル名 | オブジェクト |
| render  | choice1とchoice2 | オブジェクト | 

renderのchoice1とchoice2の内容

| key名 | 値           | 形式         | 
| ----- | ------------ | ------------ | 
| text | 選択肢の内容 | オブジェクト | 
| type  | 選択時の実行コマンド | オブジェクト | 
| value  | 実行コマンドの引数 | オブジェクト | 
| target  | コマンドの対象変数 | オブジェクト | 
| next | 選択時の遷移先シーン名 | オブジェクト |


typeの種類

* add / targetの変数にvalueの値を加算します
* min / targetの変数にvalueの値を減算します
* flag / targetの変数のフラグをvalueの値に変更します(true/false)

例

    scene3:
        type: CHOICE
        back: back.jpg
        left: ren.png
        right: keke.png
        bgm: stop
        choice:
        choice1:
            text: スクールアイドルをやる
            type: add
            value: 10
            target: renpoint
            next: scene4
        choice2:
            text: スクールアイドルをやらない
            type: flag
            value: true
            target: isDone
            next: scene5


v2からchoiceに関してはrenderをchoiceに修正しています。

#### BRANCH

ブランチシーンは変数の値に応じて遷移先のシーンを決定します。

| key名 | 値           | 形式         | 
| ----- | ------------ | ------------ | 
| type  | BRANCH       | オブジェクト | 
| target  | 変数名 | オブジェクト | 
| command  | 値比較を行うコマンド | オブジェクト | 
| value  | 値比較を行う値 | オブジェクト | 
| truescene  | 比較結果がtrueの場合の遷移先シーン名 | オブジェクト | 
| falsescene  | 比較結果がfalseの場合の遷移先シーン名 | オブジェクト |


commandの種類

* more / targetの変数がvalueの値より大きい場合tureそれ以外の場合false
* less / targetの変数がvalueの値より小さい場合tureそれ以外の場合false
* eq / targetの変数がvalueの値と等しい場合trueそれ以外の場合false(true/false)


例

    scene6:
        type: BRANCH
        target: isDone
        command: eq
        value: true
        truescene: scene7 
        falsescene: scene8


## 開発メモ

### 環境構築

まずは以下コマンドで開発環境を構築します

> docker-compose up -d

次にコンテナに入ってtypescriptの初期設定を行います
→コンテナ作成時にできれば尚良

> docker exec -it novel_node sh

package.jsonを作成します

> npm init -y

typescriptをインストールします

> npm i typescript

webpackとts-loaderをインストールします

> npm i webpack webpack-cli webpack-dev-server ts-loader

webpack.config.jsを作成する

以下のように設定します


    const path = require('path')

    module.exports = {
        entry: {
            bundle: './src/core/App.ts'
        },
        output: {
            path: path.join(__dirname, 'public'),
            filename: '[name].js'
        },
        //　インポート時ファイル拡張子を省略します
        resolve: {
            extensions: ['.ts', '.js']
        },
        devServer: {
            static: path.join(__dirname, 'public'),
            open: true
        },
        module: {
            rules: [
                {
                    loader: 'ts-loader',
                    test: /\.ts$/
                }
            ]
        }
    }

package.jsonを修正
scriptのところを追記します

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        + "build": "webpack --mode=production",
        + "start": "webpack-cli serve --mode development" 
    },

↑typescriptも一緒にしちゃてもOK
tsconfig.jsonの作成

> npx tsc --init

tsconfig.jsonのtargetを修正する
es5だとPromiseが使えません

    "target": "es2015",


ymlファイルをパースする
必要なモジュールをインストールします

> npm install -save js-yaml


### yamlのパース

まずはyamlファイルをテキスト形式で読み込む
つぎにjs-yamlでパースしてオブジェクトにする

    return fetch(`/${filename}`)
        .then( res => res.text())
        .then( text => {
            console.log(text);
            let yaml = require("js-yaml");
            const data = yaml.load(text);
            console.log("---------------------");
            console.log(data);
        });


ビルドの方法
webpackを利用しているので、以下のコマンドでpublicフォルダにbundle.jsが出力されます

> npm run build

サーバーの起動は、webpackの設定でpulicフォルダがルートになっています
→nginxを入れてるので、8082にアクセスすればおＫ

> npm run start


### typescriptでのPromise

`Promise<CanvasImageSource>`で受け取ってdrawImageをコールすればいいです。

`
    const canva = Canvas.getInstance();
    const context = canva.getCtx();
        

    // アセットファイルを全て読み込む
    const hoge = new Promise<CanvasImageSource>( (resolve,reject) => {
        const image = new Image();
        image.addEventListener("load", () => {
            resolve(image);
        });
        image.src = "image01.jpg";
        });
    hoge.then( img => {
        context.drawImage(img,0,0);
    })
`

普通にコールバックで記載する場合


    let kitten = new Image();
    kitten.src = 'image01.jpg';

    kitten.onload = () => {
        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        context.drawImage(kitten, 0, 0);
    };





### シングルトンクラスのエクスポート

普通のクラスと同じようにエクスポートしてインポートできます。

    export default class Canvas{

        private static instance: Canvas;

        ....


### HashMapはRecord<T,U>

値の追加はkeyを直接指定してOK

`this.items[keyname] = value;`

### ymlファイルの読み込み

実際にはファイルでなくてyml形式の文字列をパースします。

まずfetchなどで文字列軽視でymlファイルをテキスト化してから、ymlパースします

    static loadGameData(filename: string): Promise<any>{
        return fetch(`/${filename}`)
            .then( res => res.text());
    }


    const gamedata = AssetLoader.loadGameData("gamedata.yml");
        gamedata.then( data => {

            let yaml = require("js-yaml");
            const game = yaml.load(data);

            const assetManager = AssetManager.getInstance();
            assetManager.setGameData(game);

            Promise.all(game.images.map( (image: string)  => {
                const wakiga = AssetLoader.loadImage(image);
                wakiga.then(huton => {
                    assetManager.setItem(image,huton);
                })
            }))
            .then(() => {
                console.log("スタートupdate");
                // console.log(assetManager.getGameData());
                // console.log(assetManager.getItems());
            })

        })

### yamlファイル内で利用可能なfunc一覧


### 制約

* 画像は全てimagesフォルダに配置してください。
* 

### TypeScriptでのジェネレータの作成方法

文法的なもの
*methodName(): IterableIterator<T>{
    yield hoge;
}

example
    *testgenerate(): IterableIterator<number>{
        yield 0;
    }

### async await

メソッド名の前にasyncを付けてPromiseを返す関数を呼び出す際にawaitを付与します。
するとthenを省略できます。
以下の場合はgamedataにデータが入っています。

    public async setup(): Promise<void>{

        const gamedata = await AssetLoader.loadGameData("gamedata.yml");

* 少し複雑な例

    const result = await Promise.all(game.images.map( async (image: string)  => {
        const loadResult = await AssetLoader.loadImage(image);
        assetManager.setItem(image,loadResult);
    }))

この場合loadImageの全ての結果が完了するまで待ってくれます。



### 引数に関数を取る方法

引数を付ける場合は=>を付けます。

    private createEvent(func:(prm:KeyboardEvent)=> void){
        document.addEventListener("keydown", e => func(e));
    }

    jsと同じようにbindもできます

    
    const controller = Controller.getInstance(this.executeCommand.bind(this));

### textの参考

https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D/textBaseline

ancorに対しての挙動は以下の指定をする

    context.textBaseline = "top";

テキストのalign設定には注意。

    ctx.textAlign="center"; 

これはancorに対してです。
左端がancor担っている場合は文字列の半分が消えます。（はみ出ます）

### クリックイベントの伝達

タイトル画面でスタートボタンや、ロードボタンを押したときに、継続の処理に対してもクリックイベントが発火される（貫通で）
そのため、スタート時に最初の会話が表示されない
ロード時に選択イベントがロードできないなどが発生する
そのため、基本的にはクリックしたときに、クリックポイントを作成したらクリックキャンセルを発火させる

    private clickEvent = (e: MouseEvent | TouchEvent) => {

    const canvas = Canvas.getInstance().getCanvas();
    const col = new ChoiceCollider();
    const point = col.getClickToPoint(e as MouseEvent | TouchEvent);
    //　これ
    e.stopPropagation();

こうすることで、ポイントを渡す処理は完了するが、のちのち貫通してクリックイベントが発火させることはなくなる

## 開発言語

TypeScript
