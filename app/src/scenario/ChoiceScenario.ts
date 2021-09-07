import BackImageRender from "../render/BackImageRender";
import RectRender from "../render/RectRender";
import Scenario from "./Scenario";
import TextRender from "../render/TextRender";
import Canvas from "../core/Canvas";
import ChoiceRender from "../render/ChoiceRender";
import Point from "../collider/Point";
import { ChoiceCollider } from "../collider/ChoiceCollider";
export default class ChoiceScenario extends Scenario{


    private constructor(){
        super();
    }

    private static instance: ChoiceScenario;

    public static getInstance(): ChoiceScenario{
        if(!ChoiceScenario.instance){
            ChoiceScenario.instance = new ChoiceScenario();
        }
        return ChoiceScenario.instance;
    }


    private render: any;

    //@override
    runLogic(point: Point): void {

        this.executeScenario();

        console.log(`point is ${point.x}と${point.y} です。`)

        //　当たり判定を行う
        const col = new ChoiceCollider();
        if(col.ishitTop(point)){
            this.executeChoice(this.render.choice1);
        }else if(col.ishitBottom(point)){
            this.executeChoice(this.render.choice2);
        }

        return;
    }
    //@override
    settingScenario(object: any): void {
        this.render = object.render;
    }
    //@override
    executeScenario(): void {

        // TODO 処理の委譲
        const canvas = Canvas.getInstance().clearCanvas();

        // 背景画像を描画します。
        const imageRender = new BackImageRender();
        imageRender.rendering(this.backImage);

        // ウインドウを描画する
        const rectRender = new RectRender();
        rectRender.renderChoiceRect();

        const choiceRender = new ChoiceRender();
        choiceRender.renderingChoice(this.render.choice1.text,this.render.choice2.text);

    }


    /**
     * 
     * 選択した内容に従って選択時のメソッドを全実行する。
     * 
     * @param choice 
     * 
     */
    private executeChoice(choice: any): void{
        
        // ゲームマネージャーを取得します

        // コマンドは複数ある可能性があります→配列へ

        // コマンドの内容を全てゲームマネージャーに反映します。

        // 次のシーンを読み込みます。


    }
    
}