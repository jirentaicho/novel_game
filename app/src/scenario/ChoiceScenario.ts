import Canvas from "../core/Canvas";
import AssetManager from "../manager/AssetManager";
import Scenario from "./Scenario";

export default class ChoiceScenario extends Scenario{

    settingScenario(object: any): void {
        
    }

    executeScenario(): void {
        const canva = Canvas.getInstance();
        const context = canva.getCtx();

        const assetManager = AssetManager.getInstance();

        context.drawImage(assetManager.getItem(this.backImage), 0, 0);
    }
    
}