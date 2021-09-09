import { ChoiceCollider } from "../collider/ChoiceCollider";
import GameManager from "../manager/GameManager";
import ScenarioManager from "../scenario/ScenarioManager";
import Controller from "./Controller";

export default class Game{

    private gameManager: GameManager = GameManager.getInstance();

    private scenarioManager: ScenarioManager = ScenarioManager.getInstance();

    public init(): void{

        const scene = this.gameManager.getSceneName();
        this.scenarioManager.setUp(scene);
        
        const controller = Controller.getInstance(this.executeCommand.bind(this));
    }

    /**
     * 
     * キー入力時のハンドラです。
     * 
     * @param e キー入力情報 
     */
    private executeCommand(e: MouseEvent | TouchEvent | KeyboardEvent): void {    
        // TODO なんかおかしい
        const col = new ChoiceCollider();
        const point = col.getClickToPoint(e as MouseEvent | TouchEvent);

        // もしセーブをクリックしていたらセーブをする。
        if(col.isHitSave(point)){
            this.gameManager.saveGame();
            return;
        }

        this.scenarioManager.runScenario(point);
    }

}