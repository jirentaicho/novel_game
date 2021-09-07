import Canvas from './../core/Canvas';
import AssetManager from '../manager/AssetManager';

export default class ChoiceRender implements Render<string>{
    /**
     * ここが
     * Imageだったり、Stringだったり、Functionだったりするわけか。
     */
    rendering(str: string): void {

        // TODO 色々な責務を分離する（文字サイズの指定とかはここじゃないよね）
        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        context.font = "48px serif";
        context.fillStyle = "#fff";
        context.fillText(str, 10, canva.getHeight() - canva.getHeight() / 3.5);

    }


    renderingChoice(top: string, bottom: string): void{
        // TODO 色々な責務を分離する（文字サイズの指定とかはここじゃないよね）
        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        context.font = "48px serif";
        context.fillStyle = "#fff";
        context.textBaseline = "top";
        // クリック判定はRECTに対して行うので、微調整を行います
        // RECTの高さの1/4のmargin-topを取ります。
        const margintop = (canva.getHeight() / 4) / 4;
        context.fillText(top, 0, canva.getHeight() / 4 + margintop);
        context.fillText(bottom, 0, canva.getHeight() / 1.5 + margintop);
    }
    
}　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　