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

    private constructor(func:(prm:MouseEvent | TouchEvent | KeyboardEvent)=> void){
        // キーボード、マウスは選択できるようにしたい。
        // interfaceが同じなら実現できる。
        // 一旦はマウスのみで実装する（変更に強いコードで）
        
        this.createEvent(func);
        
        
    }

    private static instance: Controller;
    
    public static getInstance(func:(prm:MouseEvent | TouchEvent | KeyboardEvent)=> void): Controller{
        if(!Controller.instance){
            Controller.instance = new Controller(func);
        }
        return Controller.instance;
    }

    /**
     * 
     * 
     * 
     * @param func 入力時のイベントハンドラ
     * 
     */
    private createKeyEvent(func:(prm:KeyboardEvent)=> void){
        document.addEventListener("keydown", e => func(e));

        /*
        const canvasClass = Canvas.getInstance();
        const canvas = canvasClass.getCanvas();
        canvas.addEventListener("mousedown", () => {
            //TODO 
        })

        */

    }

    /**
     * 
     * PC時はMouseEvent　スマホではTouchEventをハンドリングします。
     * 
     * @param func クリック時のイベントハンドラ
     */
    private createEvent(func:(prm:MouseEvent | TouchEvent | KeyboardEvent) => void){
        const canvas = Canvas.getInstance().getCanvas();
        canvas.addEventListener("mousedown", e => func(e));
        canvas.addEventListener("touchstart", e => func(e));
        // document.addEventListener("keydown", e => func(e));
    }




}