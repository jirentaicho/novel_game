import Canvas from '../core/Canvas';
import AssetManager from '../manager/AssetManager';

export default class RectRender implements Render<string>{

    /**
     * カラーを指定します。
     * ここもymlから受け取れますが、黒固定にしています。(v.1.0)
     */
    rendering(str: string): void {

        // TODO 色々な責務を分離する（文字サイズの指定とかはここじゃないよね）
        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        context.beginPath () ;
        // レクタングルの座標(50,50)とサイズ(75,50)を指定
        context.rect(0, canva.getHeight() - canva.getHeight() / 3 , canva.getWidth(), canva.getHeight() / 3);
        context.fillStyle = "rgba(0,0,0,0.6)";
        // 塗りつぶしを実行
        context.fill() ;
        // 線の色
        context.strokeStyle = "purple" ;
        // 線の太さ
        context.lineWidth = 8 ;
        // 線を描画を実行
        context.stroke() ; 
    }
    
}　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　