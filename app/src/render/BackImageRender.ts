import Canvas from '../core/Canvas';
import AssetManager from '../manager/AssetManager';
import EmptyUtil from '../Utility/EmptyUtil';

export default class BackImageRender implements Render<string>{

    rendering(str: string): void {

        // 処理を分離したい
        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        const assetManager = AssetManager.getInstance();
        if(!EmptyUtil.isEmpty(str)){
            context.drawImage(assetManager.getItem(str), 0, 0,canva.getWidth(),canva.getHeight());
        }
        

    }
    
}