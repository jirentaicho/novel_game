import AssetManager from "../manager/AssetManager";
import ScenarioManager from "../scenario/ScenarioManager";
import Controller from "./Controller";

export default class Game{

    private assetManager: AssetManager = AssetManager.getInstance();

    private scenarioManager: ScenarioManager = ScenarioManager.getInstance();

    public init(): void{

        //　TODO なんかここださいので修正したい
        this.scenarioManager.setUp("scene1");
        this.scenarioManager.runScenario();

        // コントローラーの作成
        const controller = Controller.getInstance(this.executeCommand.bind(this));
        
    }

    /**
     * 
     * キー入力時のハンドラです。
     * 
     * @param e キー入力情報 
     */
    private executeCommand(e: KeyboardEvent): void {
        this.scenarioManager.runScenario();
    }

}