# 現在制作中です


環境について

・nginx → 実行用
・node → 開発用

public → ビルド済（公開ファイル)
src → tsファイル（開発）

## 初期設定

git cloneなりしてプロジェクトのルートで以下コマンド

> dokcer-compose up -d

終わったら以下コマンド

> docker exec -it novel_node sh

次に以下コマンド

> npm install

ビルドできるかテスト

> npm run build


##　1から開発する場合

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



##　ここ修正して
# ここいらないです
    fsはブラウザでは使えません。

    fsとかのモジュールはTypeScriptでの利用に以下をインストールする必要があります。?
    真意不明

    > npm install --save-dev @types/node

    とりあえずpackage.jsonを修正

    "browser": {
        "fs": false,
        "js-yaml": false
    }

## 開発メモ

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

### aaaaaaa


### aaaaaa

