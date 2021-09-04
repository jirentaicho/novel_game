import Scenario from './Scenario'
import AssetManager from '../manager/AssetManager';
import MessageScenario from './MessageScenario';
import ScenatioFactory from './ScenarioFactory';
import { SCENARIO_TYPE } from './ScenatioType';

/**
 * TODO クラス変数みたいなのは消したい。
 */
export default class ScenarioManager{
    
    private static instance: ScenarioManager;

    private constructor(){
        
    }

    public static getInstance(): ScenarioManager{
        if(!ScenarioManager.instance){
            ScenarioManager.instance = new ScenarioManager();
        }
        return ScenarioManager.instance;
    }

    //@ts-ignore 
    private scenario: Scenario;

    private assetManager = AssetManager.getInstance();


    public setUp(): void{

        const gamedata = this.assetManager.getGameData();
        // TODO ここで渡すシナリオオブジェクトの作成方法:引数を修正する。
        // 基本的にはセーブデータから、シナリオ番号を取得する
        // セーブデータがない場合は、シナリオ1から始める。

        //　これはシングルトンでないとだめ。毎回newすると無理。
        this.scenario = ScenatioFactory.getScenario(gamedata.scenario.scene1.type);
        //初期化します。
        this.scenario.init(gamedata.scenario.scene1);
    }

    /**
     * シナリオを進めます。
     * アセットデータのymlからシナリオを作成して、シナリオを実行します。
     * jsのobjectって気持ち悪いなあと・・・
     * 絶対にゲームデータモデル的なものにしたほうが安全
     */
    public runScenario(): void{
        this.scenario.runLogic();
    }

    /**
     * 現在のシーンを管理（ジェネレータで）しないといけない。
     * 現在のシーンとは？
     * メッセージシーンのことです。
     * 選択シーンは？
     * →選択シーンはジェネレートする必要ありません。
     * 
     * 基本的にインターフェースは一つ
     * プレイヤーはシーンに対して何も関与しません。
     * プレイヤー視点では、選択シーンもメッセージシーンも同じシーンです。
     * 
     * 
     * 
     */

    // 例えばボタンを押したときに、シナリオに対して処理を発火させます。（ここはレシーバです）
    public executeCommand(e : EventListener): void{
        // TODO これださいので修正。メソッドに委譲する
        // this.scenario.executeGenerator(e);
    }
    
}