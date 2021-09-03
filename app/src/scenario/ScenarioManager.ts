import Scenario from './Scenario'
import AssetManager from '../manager/AssetManager';
import MessageScenario from './MessageScenario';
import ScenatioFactory from './ScenarioFactory';

export default class ScenarioManager{
    
    private static instance: ScenarioManager;

    private constructor(){}

    public static getInstance(): ScenarioManager{
        if(!ScenarioManager.instance){
            ScenarioManager.instance = new ScenarioManager();
        }
        return ScenarioManager.instance;
    }

    /**
     * シナリオを進めます。
     * アセットデータのymlからシナリオを作成して、シナリオを実行します。
     */
    public runScenario(): void{

        const assetManager = AssetManager.getInstance();
        const gamedata = assetManager.getGameData();

        // TODO ここで渡すシナリオオブジェクトの作成方法:引数を修正する。
        // 基本的にはセーブデータから、シナリオ番号を取得する
        // セーブデータがない場合は、シナリオ1から始める。
        const scenario = ScenatioFactory.getScenario(gamedata.scenario.scene1.type);
        scenario.init(gamedata.scenario.scene1);
        scenario.executeScenario();

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
    
}