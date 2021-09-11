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
            context.drawImage(assetManager.getItem(leftImage), canva.getWidth() / 6.8, canva.getHeight() - canva.getHeight() / 1.2 ,canva.getWidth() / 3 ,canva.getHeight() / 1.2);
        }
        if(!EmptyUtil.isEmpty(rightImage)){
            context.drawImage(assetManager.getItem(rightImage), canva.getWidth() / 1.8, canva.getHeight() - canva.getHeight() / 1.2 ,canva.getWidth() / 3 ,canva.getHeight() / 1.2);
        }

    }
    
}