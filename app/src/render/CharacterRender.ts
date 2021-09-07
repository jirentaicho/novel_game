import Canvas from '../core/Canvas';
import AssetManager from '../manager/AssetManager';

export default class CharacterRender implements Render<string>{

    rendering(str: string){

    }

    renderingCharacter(leftImage: string, rightImage: string): void {

        // 処理を分離したい
        const canva = Canvas.getInstance();
        const context = canva.getCtx();
        const assetManager = AssetManager.getInstance();
        // TODO 空文字判定の修正
        if(leftImage != ""){
            context.drawImage(assetManager.getItem(leftImage), 0,0);
        }
        if(rightImage != ""){
            context.drawImage(assetManager.getItem(rightImage), 500,0);
        }

    }
    
}