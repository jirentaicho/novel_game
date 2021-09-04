import Canvas from "../core/Canvas";
import AssetManager from "../manager/AssetManager";
import ImageRender from "../render/ImageRender";
import RectRender from "../render/RectRender";
import SpeakerRender from "../render/SpeakerRender";
import TextRender from "../render/TextRender";
import Scenario from "./Scenario";

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



    /** ここで管理しているものをシーンクラスなどに分類させる。→クラス変数が気持ち悪すぎる */
    // 読んでいるレンダーインデックス番号
    private renderIndex: number = 0;
    // 読んでいるメッセージインデックス番号
    private messageIndex: number = 0;

    // スピーカー
    private speaker: string = "";

    // メッセージの配列
    private messages: Array<string> = [];




    settingScenario(object: any): void {
        this.messages = object.render[this.renderIndex].message;
        this.speaker = object.render[this.renderIndex].speaker;
    }

    executeScenario(): void {
        
        // 背景画像を描画します。
        const imageRender = new ImageRender();
        imageRender.rendering(this.backImage);

        // スピーカーを描画する
        const spakerRender = new SpeakerRender();
        spakerRender.rendering(this.speaker);

        // ウインドウを描画する
        const rectRender = new RectRender();
        rectRender.rendering("");

        //　テキストを描画する
        const textRender = new TextRender();
        textRender.rendering(this.messages[this.messageIndex]);

    }
    
}