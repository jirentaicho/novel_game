/**
 * 全体的にダサい
 * 
 */
export default class Canvas{

    private static instance: Canvas;

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private width: number = window.innerWidth;
    private height: number = window.innerHeight;
    
    private constructor(){
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext("2d");
    }

    public static getInstance(): Canvas{
        if(!Canvas.instance){
            Canvas.instance = new Canvas();
        }
        return Canvas.instance;
    }

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    public getCtx(): CanvasRenderingContext2D {
        return this.ctx;
    }

    public getWidth(): number{
        return this.width;
    }

    public getHeight(): number{
        return this.height;
    }

    public clearCanvas(): void{
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }

}module.exports = Canvas;