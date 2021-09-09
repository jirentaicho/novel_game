import Canvas from "../core/Canvas";
import Point from "./Point";
import Rect from "./Rect";

export default abstract class Collider{

    /**
     * 
     * {@link Point}が{@link Rect}に入っている場合にtureを返します。
     * 
     * @param point 
     * @param rect 
     * @returns 
     */
    isPointInRect(point: Point, rect: Rect): boolean{

        const hit =
        (rect.x <= point.x && point.x <= rect.x + rect.width)
            && (rect.y <= point.y && point.y <= rect.y + rect.height)

        if(hit){
            return true;
        }
        else{
            return false;
        }
    }

    /**
     * 
     * クリックイベントが、{@link Rect}の中に入っているかどうかを判定します。
     * 
     * @param e 
     * @param rect 
     * @returns 
     */
    isClickPointInRect(e: TouchEvent | MouseEvent ,rect: Rect){
        const clickPoint = this.getClickToPoint(e);
        return this.isPointInRect(clickPoint, rect);
    }

    /**
     * 
     * クリックポイントを{@link Point}に変換します。
     * 
     * @param e 
     * @returns 
     */
    getClickToPoint(e: TouchEvent | MouseEvent): Point{
        let x = 0;
        let y = 0;
                
        if(e.type=="mousedown"){

            x = (e as MouseEvent).clientX;
            y = (e as MouseEvent).clientY;

        } else if (e.type=="touchstart"){

            x = (e as TouchEvent).changedTouches[0].clientX;
            y = (e as TouchEvent).changedTouches[0].clientY;

        }

        const _rect = Canvas.getInstance().getCanvas().getBoundingClientRect();
        return new Point(x - _rect.left, y - _rect.top);
    }

    /**
     * セーブをクリックしたときにTrueを返します。
     * 
     * @param point 
     * @returns 
     */
    isHitSave(point: Point): boolean{
        //　上範囲のレクト
        const canvas = Canvas.getInstance();
        const rect = new Rect(canvas.getWidth() - canvas.getWidth() / 5, 0, canvas.getWidth() / 5, canvas.getHeight() / 13.5);
        return this.isPointInRect(point,rect);
    }

    isHitStart(point: Point): boolean{
        const canvas = Canvas.getInstance();
        const rect = new Rect(canvas.getWidth() / 2 - ((canvas.getWidth() / 5) / 2) , canvas.getHeight() / 3.5, canvas.getWidth() / 5, canvas.getHeight() / 8);
        return this.isPointInRect(point,rect);
    }

    isHitLoad(point: Point): boolean{
        const canvas = Canvas.getInstance();
        const rect = new Rect(canvas.getWidth() / 2 - ((canvas.getWidth() / 5) / 2), canvas.getHeight() / 1.5, canvas.getWidth() / 5, canvas.getHeight() / 8);
        return this.isPointInRect(point,rect);
    }


}