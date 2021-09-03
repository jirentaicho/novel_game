import Canvas from './../core/Canvas';
import AssetManager from '../manager/AssetManager';

export default class TextRender implements Render<string>{
    /**
     * ここが
     * Imageだったり、Stringだったり、Functionだったりするわけか。
     */
    rendering(str: string): void {

        // TODO 色々な責務を分離する（文字サイズの指定とかはここじゃないよね）
        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        context.font = "48px serif";
        context.fillText(str, 10, 150);

    }
    
}　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　