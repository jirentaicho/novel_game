import { KeyObject } from "crypto";
import AssetManager from "../manager/AssetManager";
import ScenarioManager from "../scenario/ScenarioManager";
import Controller from "./Controller";

export default class Game{

    private assetManager: AssetManager = AssetManager.getInstance();

    private scenarioManager: ScenarioManager = ScenarioManager.getInstance();

    public init(): void{

        //　TODO なんかここださいので修正したい
        this.scenarioManager.setUp("scene1");
        
        //これが初期化はやばい
        this.scenarioManager.runScenario();

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
        this.scenarioManager.runScenario();
    }

    /**
     * 
     * キー入力時のハンドラです。
     * 
     * @param e キー入力情報 
     */
    private executeCommand(e: MouseEvent | TouchEvent | KeyboardEvent): void {
        // 一旦変数べた書き。
        let x = 0;
        let y = 0;
                
        if(e.type=="mousedown"){

            x = (e as MouseEvent).pageX;
            y = (e as MouseEvent).pageY;

        } else if (e.type=="touchstart"){

            x = (e as TouchEvent).changedTouches[0].pageX;
            y = (e as TouchEvent).changedTouches[0].pageY;

        }

        console.log(`x = ${x} y = ${y}`);

        // 座標を気にするのは選択画面のみ。
        // つまりメッセージ画面ではxyはどうでもよく発火さえできればいい。
        this.scenarioManager.runScenario();

    }

}