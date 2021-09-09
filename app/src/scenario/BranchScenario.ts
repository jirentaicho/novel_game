import Scenario from "./Scenario";
import Point from "../collider/Point";
import GameManager from "../manager/GameManager";
import ScenarioManager from "./ScenarioManager";

/**
 * 
 * 分岐シーン
 * 条件を満たしている場合と満たしていない場合でのシーン分岐を行う。
 * 
 */
export default class BranchScenario extends Scenario{

    private constructor(){
        super();
    }

    private static instance: BranchScenario;

    public static getInstance(): BranchScenario{
        if(!BranchScenario.instance){
            BranchScenario.instance = new BranchScenario();
        }
        return BranchScenario.instance;
    }

    private branchdata: any;

    //@override
    runLogic(point: Point): void {

        // まずはゲームマネージャーを取得する
        const gameManager = GameManager.getInstance();
        const scenarioManager = ScenarioManager.getInstance();

        // 条件を分岐してシーン遷移するだけ
        if(gameManager.getBranchResult(
            this.branchdata.command, this.branchdata.value, this.branchdata.target)){
                scenarioManager.setUp(this.branchdata.truescene);
        }else{
                scenarioManager.setUp(this.branchdata.falsescene);
        }

    }
    //@override
    settingScenario(object: any): void {
        this.branchdata = object;
    }
    //@override
    executeScenario(): void {
    }
    
}