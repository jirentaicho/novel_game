import Scenario from './Scenario'
import AssetManager from '../manager/AssetManager';
import ScenatioFactory from './ScenarioFactory';
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
        const gamedata = this.assetManager.getGameData();
        // console.log(scenarioName);

        this.scenario = ScenatioFactory.getScenario(gamedata.scenario[scenarioName].type);
        this.scenario.init(gamedata.scenario[scenarioName]);
        this.runScenario(new Point(0,0));
    }


    public runScenario(point : Point): void{
        this.scenario.runLogic(point);
    }

}