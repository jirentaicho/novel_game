import Point from "../collider/Point";
import Canvas from "../core/Canvas";
import GameManager from "../manager/GameManager";
import BackImageRender from "../render/BackImageRender";
import CharacterRender from "../render/CharacterRender";
import RectRender from "../render/RectRender";
import SpeakerRender from "../render/SpeakerRender";
import TextRender from "../render/TextRender";
import Scenario from "./Scenario";
import ScenarioManager from "./ScenarioManager";

/**
 * シナリオはゲームに一つ存在（画面に）
 * 基本的には同一のインスタンスに対してセットアップを行う。
 * クラス変数が多くなっているのが課題
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

    private leftImage: string = "";
    private rightImage: string = "";


    // TODO　しっくりくるメソッド名に修正する
    public runLogic(point: Point): void{

        // そもそもレンダーが空になっていたら
        if(this.renderIndex >= this.render.length){
            const scenarioManager = ScenarioManager.getInstance();
            // ゲームマネージャにも次のシーン名を登録する。
            GameManager.getInstance().setSceneName(this.nextScenarioName);
            scenarioManager.setUp(this.nextScenarioName);
            return;
        }

        if(this.messageIndex >= this.render[this.renderIndex].message.length ){
            // 次のレンダーにして処理を戻す
            this.renderIndex++;
            this,this.messageIndex = 0;
            // 再帰的に呼び出す
            // TODO 引数の見直し（インターフェースから）
            this.runLogic(new Point(0,0));
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

        this.leftImage = object.left;
        this.rightImage = object.right;
    }

    public executeScenario(): void {

        // TODO 処理の委譲
        const canvas = Canvas.getInstance().clearCanvas();
    
        // 背景画像を描画します。
        const imageRender = new BackImageRender();
        imageRender.rendering(this.backImage);

        const caharaRender = new CharacterRender();
        caharaRender.renderingCharacter(this.leftImage,this.rightImage);
        
        // ウインドウを描画する
        const rectRender = new RectRender();
        rectRender.rendering("");
        rectRender.renderSpeakerRect();

        const spakerRender = new SpeakerRender();
        spakerRender.rendering(this.render[this.renderIndex].speaker);

        const textRender = new TextRender();
        textRender.rendering(this.render[this.renderIndex].message[this.messageIndex]);

        rectRender.renderSaveRect();
    }
    
}