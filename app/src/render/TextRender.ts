import Canvas from './../core/Canvas';
import Config from '../core/Config';
import EmptyUtil from '../Utility/EmptyUtil';

export default class TextRender implements Render<string>{
    
    rendering(str: string): void {

        if(EmptyUtil.isEmpty(str)){
            return;
        }


        const texts = new Array();
        for (let i = 0; i < str.length; i += Config.XL_LINE) {
            texts.push(str.slice(i, i + Config.XL_LINE));
        }

        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        const fontSize = Config.getFontSize();
        context.font = `${fontSize}px serif`;
        context.fillStyle = "#fff";
        context.textBaseline = "top";
        
        let metrics = context.measureText("text");
        let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

        for (let i = 0; i < texts.length; i ++) {
            context.fillText(texts[i], 10, canva.getHeight() - canva.getHeight() / 3.8 + ( i * actualHeight * 2 ));
        }


    }
    
}　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　