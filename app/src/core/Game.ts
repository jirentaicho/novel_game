import { KeyObject } from "crypto";
import { ChoiceCollider } from "../collider/ChoiceCollider";
import Point from "../collider/Point";
import AssetManager from "../manager/AssetManager";
import ScenarioManager from "../scenario/ScenarioManager";
import Canvas from "./Canvas";
import Controller from "./Controller";

export default class Game{

    private assetManager: AssetManager = AssetManager.getInstance();

    private scenarioManager: ScenarioManager = ScenarioManager.getInstance();

    public init(): void{

        //　TODO なんかここださいので修正したい
        this.scenarioManager.setUp("scene1");
        
        //これが初期化はやばい
        this.scenarioManager.runScenario(new Point(0,0));

        // コントローラーの作成
        const controller = Controller.getInstance(this.executeCommand.bind(this));
        
    }


    /**
     * 
     * マウスやタッチイベントでの発火
     * 
     * @param e 
     */
    private executeClickCommand(e: MouseEvent | TouchEvent): void {
       // this.scenarioManager.runScenario();
    }

    /**
     * 
     * キー入力時のハンドラです。
     * 
     * @param e キー入力情報 
     */
    private executeCommand(e: MouseEvent | TouchEvent | KeyboardEvent): void {
       
        const col = new ChoiceCollider();
        const point = col.getClickToPoint(e as MouseEvent | TouchEvent);
        // 座標を気にするのは選択画面のみ。
        // つまりメッセージ画面ではxyはどうでもよく発火さえできればいい。
        this.scenarioManager.runScenario(point);
    }

}