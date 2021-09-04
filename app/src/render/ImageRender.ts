import Canvas from '../core/Canvas';
import AssetManager from '../manager/AssetManager';

export default class ImageRender implements Render<string>{

    rendering(str: string): void {

        // 処理を分離したい
        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        const assetManager = AssetManager.getInstance();
        context.drawImage(assetManager.getItem(str), 0, 0);

    }
    
}