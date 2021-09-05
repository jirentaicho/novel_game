import AssetManager from "../manager/AssetManager";
import ScenarioManager from "../scenario/ScenarioManager";
import Canvas from "./Canvas";

/**
 * 
 * クリックイベントを付けたほうが良い。
 * 
 * メッセージ画面
 * 　→　次へ
 * 選択画面
 * 　→　選択
 * 
 * 
 * 
 */
export default class Controller{

    private constructor(func:(prm:KeyboardEvent)=> void){
        this.createEvent(func);
    }

    private static instance: Controller;
    
    public static getInstance(func:(prm:KeyboardEvent)=> void): Controller{
        if(!Controller.instance){
            Controller.instance = new Controller(func);
        }
        return Controller.instance;
    }

    /**
     * 
     * 
     * 
     * @param func 
     * 
     */
    private createEvent(func:(prm:KeyboardEvent)=> void){

        document.addEventListener("keydown", e => func(e));

        const canvasClass = Canvas.getInstance();
        const canvas = canvasClass.getCanvas();
        canvas.addEventListener("mousedown", () => {
            //TODO 
        })

    }




}