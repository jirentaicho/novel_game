import BackImageRender from "../render/BackImageRender";
import RectRender from "../render/RectRender";
import Scenario from "./Scenario";
import TextRender from "../render/TextRender";
import Canvas from "../core/Canvas";
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

    private render: Array<any> = new Array();

    //@override
    runLogic(): void {
        console.log("thisi is choice scenario");
        this.executeScenario();
        return;
    }
    //@override
    settingScenario(object: any): void {
        this.render = object.render;
    }
    //@override
    executeScenario(): void {

        console.log(this.render);
        // TODO 処理の委譲
        const canvas = Canvas.getInstance().clearCanvas();

        // 背景画像を描画します。
        const imageRender = new BackImageRender();
        imageRender.rendering(this.backImage);

        // ウインドウを描画する
        const rectRender = new RectRender();
        rectRender.rendering("");
        
        const textRender = new TextRender();
        textRender.rendering(this.render[0].choice[0]);

    }
    
}