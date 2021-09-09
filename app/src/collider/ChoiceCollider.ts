import Canvas from "../core/Canvas";
import Collider from "./Collider";
import Point from "./Point";
import Rect from "./Rect";

export class ChoiceCollider extends Collider{

    /**
     * 基本的に上下のヒットが行えないとつらい
     * 
     * @param point 
     */
    isHit(point: any): boolean {
        throw new Error("Method not implemented.");
    }


    ishitTop(point: Point): boolean{
        //　上範囲のレクト
        const canvas = Canvas.getInstance();
        const rect = new Rect(0, canvas.getHeight() / 4 , canvas.getWidth(), canvas.getHeight() / 4);
        return this.isPointInRect(point,rect);
    }

    ishitBottom(point: Point): boolean{
        // した範囲のレクト
        const canvas = Canvas.getInstance();
        const rect = new Rect(0, canvas.getHeight() / 1.5 , canvas.getWidth(), canvas.getHeight() / 4);
        return this.isPointInRect(point,rect);
    }

    

}