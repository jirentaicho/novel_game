import AssetManager from "../manager/AssetManager";
import ScenarioManager from "../scenario/ScenarioManager";

export default class Game{

    private assetManager: AssetManager = AssetManager.getInstance();

    private scenarioManager: ScenarioManager = ScenarioManager.getInstance();


    public update(): void{

        //　目標
        this.scenarioManager.runScenario();



        // いらない記載が多すぎる。canvasの取得やアセットマネージャーの取得など。
        // 基本的にはdrawのみです。
       // → render.drar(scene.getimage);

        // タイトル画面とかもここかな？
        // タイトル画面もシーンの一つで管理できそう
        // →これガチでやめとけ
        // →ポーズ画面とかも条件分岐でやっとけまじで

        // シーンの描画
        // シーンでは、シーンから画像とテキストの描画を行う

        // コントローラーの受付
        // ここは難しそう、ここに応じていろいろ処理をします。

        // 例えば、分岐画面では上下キーで選択してエンターキーで選択
        //　→ロジックの組み立ても必要です
        // ただのテキスト描画ならば、テキストの文字おこしのみです

        // ロジックの組み立て
        // valiableを配列で管理して、そのvaliableに対して
        // scirptで操作、
        // ソース側ではこれらの文字列を決め打ちしません
        // 決め打ちするのは、画像やら文字列やらのScenarioで管理しているものだけ。
        // scriptを書くというのはプログラマ視点なので簡単な記載のみymlに書きましょうね。
        // 
        // 配列で管理するか
        // [prop,func,value] → [好感度,minus,10]

        
    }

}