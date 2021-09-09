import Config from '../core/Config';
import Canvas from './../core/Canvas';

export default class ChoiceRender implements Render<string>{

    rendering(str: string): void {

        // TODO 色々な責務を分離する（文字サイズの指定とかはここじゃないよね）
        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        context.font = "48px serif";
        context.fillStyle = "#fff";
        context.fillText(str, 10, canva.getHeight() - canva.getHeight() / 3.5);

    }

    renderingChoice(top: string, bottom: string): void{
        
        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        const fontSize = Config.getFontSize();
        context.font = `${fontSize}px serif`;
        context.fillStyle = "#fff";
        context.textBaseline = "top";
        // クリック判定はRECTに対して行うので、微調整を行います
        // RECTの高さの1/4のmargin-topを取ります。
        const margintop = (canva.getHeight() / 4) / 4;
        context.fillText(top, 10, canva.getHeight() / 4 + margintop);
        context.fillText(bottom, 10, canva.getHeight() / 1.5 + margintop);
    }
    
}　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　