 import Game from './Game';
 import AssetLoader from './AssetLoader';
 import AssetManager from '../manager/AssetManager';

class App{

    private game : Game;

    constructor(game: Game){
        this.game = game;
    }
    /**
     * 全てのアセットの読み込みが完了したらゲームを開始する
     */
    public async setup(): Promise<void>{
  
        const gamedata = await AssetLoader.loadGameData("gamedata.yml");
        const yaml = require("js-yaml");
        const game = yaml.load(gamedata);
        
        const assetManager = AssetManager.getInstance();
        assetManager.setGameData(game);

        const result = await Promise.all(game.images.map( async (image: string)  => {
            const loadResult = await AssetLoader.loadImage(image);
            assetManager.setItem(image,loadResult);
        }))
       this.update();
    }
    private update(): void {
        this.game.init();
    }
}

/**
 * 処理の最初
 */
window.onload = () => {
    const app = new App(new Game());
    app.setup();
}