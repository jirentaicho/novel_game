import Canvas from '../core/Canvas';
import Config from '../core/Config';

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
        context.rect(0, canva.getHeight() - canva.getHeight() / 3 , canva.getWidth(), canva.getHeight() / 3);
        context.fillStyle = "rgba(0,0,0,0.6)";

        context.fill() ;
    }
    

    // TODO 処理の委譲
    public renderSaveRect(): void{
        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        context.beginPath();
        context.rect(canva.getWidth() - canva.getWidth() / 5, 0, canva.getWidth() / 5, canva.getHeight() / 13.5);
        context.fillStyle = "rgba(0,0,0,0.8)";
        context.fill();

        const fontSize = Config.getFontSize();
        context.font = `${fontSize}px serif`;
        context.fillStyle = "#fff";
        context.textBaseline = "top";
        context.fillText("save", canva.getWidth() - canva.getWidth() / 8.5, 0);

    }

    // TODO 処理の委譲
    public renderTitleRect(): void{
        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        context.beginPath();
        context.rect(canva.getWidth() / 2 - ((canva.getWidth() / 5) / 2) , canva.getHeight() / 3.5, canva.getWidth() / 5, canva.getHeight() / 8);
        context.fillStyle = "rgba(0,0,0,0.8)";
        context.fill();

        context.beginPath();
        context.rect(canva.getWidth() / 2 - ((canva.getWidth() / 5) / 2), canva.getHeight() / 1.5, canva.getWidth() / 5, canva.getHeight() / 8);
        context.fillStyle = "rgba(0,0,0,0.8)";
        context.fill();


        const fontSize = Config.getFontSize();
        context.font = `${fontSize}px serif`;
        context.fillStyle = "#fff";
        context.textBaseline = "top";
        context.fillText("start", canva.getWidth() / 2.1 , canva.getHeight() / 3.4);
        context.fillText("load", canva.getWidth() / 2.1 , canva.getHeight() / 1.4);

    }

    
    public renderLoadRect(): void{

    }

    public renderSpeakerRect(): void{
        // TODO 色々な責務を分離する（文字サイズの指定とかはここじゃないよね）
        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        context.beginPath();
        context.rect(0, canva.getHeight() - canva.getHeight() / 2.5 , canva.getWidth() / 4, canva.getHeight() / 13.5);
        context.fillStyle = "rgba(0,0,0,0.8)";
        context.fill();

    }

    public renderChoiceRect(): void{
        // TODO 色々な責務を分離する（文字サイズの指定とかはここじゃないよね）
        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        context.beginPath();
        context.rect(0, canva.getHeight() / 4 , canva.getWidth(), canva.getHeight() / 4);
        context.fillStyle = "rgba(0,0,0,0.8)";
        context.fill();

        context.beginPath();
        context.rect(0, canva.getHeight() / 1.5 , canva.getWidth(), canva.getHeight() / 4);
        context.fill();
    }
    
}　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　