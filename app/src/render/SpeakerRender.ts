import Canvas from '../core/Canvas';
import Config from '../core/Config';

export default class SpeakerRender implements Render<string>{

    rendering(str: string): void {

        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        const fontSize = Config.getFontSize();
        context.font = `${fontSize}px serif`;
        context.fillStyle = "#fff";
        context.textBaseline = "top";
        context.fillText(str, 10, canva.getHeight() - canva.getHeight() / 2.5);

    }
    
}　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　