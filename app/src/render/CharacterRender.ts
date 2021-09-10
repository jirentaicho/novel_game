import Canvas from '../core/Canvas';
import AssetManager from '../manager/AssetManager';
import EmptyUtil from '../Utility/EmptyUtil';

export default class CharacterRender implements Render<string>{

    rendering(str: string){
    }

    renderingCharacter(leftImage: string, rightImage: string): void {

        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        const assetManager = AssetManager.getInstance();
        // TODO 空文字判定の修正
        
        if(!EmptyUtil.isEmpty(leftImage)){
            context.drawImage(assetManager.getItem(leftImage), canva.getWidth() / 7, 0);
        }
        if(!EmptyUtil.isEmpty(rightImage)){
            context.drawImage(assetManager.getItem(rightImage), canva.getWidth() / 2.3, 0);
        }

    }
    
}