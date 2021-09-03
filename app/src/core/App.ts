/**
 * ゲームを初期化してゲームを開始します。
 * 
 * ゲームとしてできること
 * 　・背景画像の表示
 * 　・キャラクター画像の表示
 * 　・メッセージの表示
 * 　・メッセージを次へボタンで次のメッセージを表示する
 * 　・選択肢によるストーリーの分岐
 * 　・セーブ
 * 　・ロード
 * 
 * メッセージ
 * 　・普通のメッセージ
 * 　・強調メッセージ
 * 　・選択肢
 * 
 * 処理の流れ
 * 　.ymlファイルに必要なアセット情報を全て登録します。
 * 　.ymlファイルをパースして必要なアセット情報を全て初期化します。
 * 　.最初に必要なアセットは全て初期化しておきます。
 * 　.必要な処理は全てymlファイルに記載して、あとはパースして処理を進めるだけです。
 * 
 * このゲームの定義
 * 　ノベルゲーム？ギャルゲー？
 * 　→ギャルゲーです。
 * 
 * 
 * 
 */
 import Game from './Game';
 import Canvas from './Canvas';
 import AssetLoader from './AssetLoader';
 import AssetManager from '../manager/AssetManager';


class App{

    private game : Game;

    constructor(game: Game){
        this.game = game;
    }

    /**
     * 全てのアセットの読み込みが完了したらゲームを開始する
     */
    public setup(): void{

        const canva = Canvas.getInstance();
        const context = canva.getCtx();

        // yamlファイルからゲームデータを取得後に、
        // 画像ファイルを全てロードしてアセットマネージャーに登録します。
        const gamedata = AssetLoader.loadGameData("gamedata.yml");
        gamedata.then( data => {

            const yaml = require("js-yaml");
            const game = yaml.load(data);

            const assetManager = AssetManager.getInstance();
            assetManager.setGameData(game);

            // TODO 変数名を修正する
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
                //セーブデータの読み込み
                // loadSaveData();
                this.update();
            })

        })

        /*
        const fuga = AssetLoader.loadImage("image01.jpg");
        fuga.then( img => {
            // アセットを登録する
            const assetManager = AssetManager.getInstance();
            assetManager.setItem("image01.jpg", img);

            // context.drawImage(img,0,0);
            context.drawImage(assetManager.getItem("image01.jpg"), 0, 0);
        })
        */

        //ここは全てのアセットの読み込みが完了してから呼び出します。
        // this.update();
    }

    private update(): void {
        requestAnimationFrame(this.update.bind(this));
        this.game.update();
    }

}


/**
 * 処理の最初
 */
window.onload = () => {
    const app = new App(new Game());
    // データの読み込み（データはjsonがいいかな）
    // const gameData = Promise.get('./hoge.json');
    app.setup();
}