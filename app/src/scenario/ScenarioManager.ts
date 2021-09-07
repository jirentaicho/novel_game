import Scenario from './Scenario'
import AssetManager from '../manager/AssetManager';
import MessageScenario from './MessageScenario';
import ScenatioFactory from './ScenarioFactory';
import { SCENARIO_TYPE } from './ScenatioType';
import Point from '../collider/Point';

/**
 * TODO クラス変数みたいなのは消したい。
 */
export default class ScenarioManager{
    
    private static instance: ScenarioManager;

    private constructor(){}

    public static getInstance(): ScenarioManager{
        if(!ScenarioManager.instance){
            ScenarioManager.instance = new ScenarioManager();
        }
        return ScenarioManager.instance;
    }

    //@ts-ignore 
    private scenario: Scenario;

    private assetManager = AssetManager.getInstance();

    //　ゲームデータからシナリオ作成します
    public setUp(scenarioName: string): void{

        console.log(scenarioName);
        
        const gamedata = this.assetManager.getGameData();
        this.scenario = ScenatioFactory.getScenario(gamedata.scenario[scenarioName].type);
        this.scenario.init(gamedata.scenario[scenarioName]);
    }


    public runScenario(point : Point): void{
        this.scenario.runLogic(point);
    }

}