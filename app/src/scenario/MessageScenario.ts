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
    // これがメッセージのモデルなのでクラス変数は合っている。


    /**　static params  */

    //　next scenario name
    private nextScenarioName: string = "";
    // backimage is common 

    /** dynamic params */
    private render: Array<any> = new Array();


    // ここ消します。
        // スピーカー
        private speaker: string = "";
        // メッセージの配列
        private messages: Array<string> = [];

    
    /**
     * 構想確認
     * レンダーの中に複数のセリフ系が入ってる。
     * render[
     *  {speaker,message},
     *  {speaker,message},
     *  {speaker,message},
     * ]
     * 
     */

    // 読んでいるレンダーインデックス番号
    private renderIndex: number = 0;
    // 読んでいるメッセージインデックス番号
    private messageIndex: number = 0;


    private getnextMessage(): void{

        //　TODO このあたりの条件分岐は何やってるかわかりにくいのでメソッド抽出なりする

        // そもそもレンダーが空になっていたら
        if(this.renderIndex >= this.render.length){
            // 次の処理を実行する
            // initScenatio(nextScenarioName);
        }

        if(this.messageIndex >= this.render[this.renderIndex].message.length ){
            // 次のレンダーにして処理を戻す
            this.renderIndex++;
            //　再帰的に呼び出す
            this.getnextMessage();
        }

        //　
        this.messageIndex++;

    }


    private hasMassage(): boolean{
        return true;
    }

  
    public settingScenario(object: any): void {
        this.messages = object.render[this.renderIndex].message;
        this.speaker = object.render[this.renderIndex].speaker;
    }

    public executeScenario(): void {
        
        // 背景画像を描画します。
        const imageRender = new ImageRender();
        imageRender.rendering(this.backImage);

        //理想を言えば


        // ここ配列管理される
        // スピーカーを描画する

        // これが正しい形
        // speakerRender.rendering(this.render[renderIndex].speaker)
        // speakerRender.rendering(this.render[renderIndex].message[messageIndex]);


        const spakerRender = new SpeakerRender();
        spakerRender.rendering(this.speaker);

        // ウインドウを描画する
        const rectRender = new RectRender();
        rectRender.rendering("");

        // ここ配列管理される
        //　テキストを描画する

        const textRender = new TextRender();
        textRender.rendering(this.messages[this.messageIndex]);

    }
    
}