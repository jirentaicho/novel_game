import Canvas from "../core/Canvas";
import AssetManager from "../manager/AssetManager";
import ImageRender from "../render/ImageRender";
import RectRender from "../render/RectRender";
import SpeakerRender from "../render/SpeakerRender";
import TextRender from "../render/TextRender";
import Scenario from "./Scenario";
import ScenarioManager from "./ScenarioManager";

/**
 * シナリオはゲームに一つ存在（画面に）
 * 基本的には同一のインスタンスに対してセットアップを行う。
 * 
 */
export default class MessageScenario extends Scenario{

    private constructor(){
        super();
    }

    private static instance: MessageScenario;

    public static getInstance(): MessageScenario{
        if(!MessageScenario.instance){
            MessageScenario.instance = new MessageScenario();
        }
        return MessageScenario.instance;
    }

    private nextScenarioName: string = "";

    private render: Array<any> = new Array();

    private renderIndex: number = 0;

    private messageIndex: number = 0;

    public runLogic(): void{

        // そもそもレンダーが空になっていたら
        if(this.renderIndex >= this.render.length){
            // 次の処理を実行する
            // initScenatio(nextScenarioName);
            console.log("DONE!!");
            const scenarioManager = ScenarioManager.getInstance();

            scenarioManager.setUp(this.nextScenarioName);
            return;
        }

        if(this.messageIndex >= this.render[this.renderIndex].message.length ){
            // 次のレンダーにして処理を戻す
            this.renderIndex++;
            this,this.messageIndex = 0;
            //　再帰的に呼び出す
            this.runLogic();
            return;
        }

        // 全て描画します。
        this.executeScenario();
        // メッセージをインクリメントします。
        this.messageIndex++;

    }
  

    /**
     * 
     * メッセージシナリオを初期化します
     * 初手以外ではシナリオから呼ばれるので、まずはインデックス番号を全て0にしておきます。
     * 
     * @param object 
     * 
     */
    public settingScenario(object: any): void {
        this.renderIndex = 0;
        this.messageIndex = 0;
        this.render = object.render;
        this.nextScenarioName = object.next;
    }

    public executeScenario(): void {
    
        // 背景画像を描画します。
        const imageRender = new ImageRender();
        imageRender.rendering(this.backImage);

        const spakerRender = new SpeakerRender();
        spakerRender.rendering(this.render[this.renderIndex].speaker);

        // ウインドウを描画する
        const rectRender = new RectRender();
        rectRender.rendering("");

        const textRender = new TextRender();
        textRender.rendering(this.render[this.renderIndex].message[this.messageIndex]);
    }
    
}