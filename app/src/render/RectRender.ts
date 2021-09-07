import Canvas from '../core/Canvas';

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