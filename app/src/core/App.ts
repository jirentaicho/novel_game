 import Game from './Game';
 import AssetLoader from './AssetLoader';
 import AssetManager from '../manager/AssetManager';
import GameManager from '../manager/GameManager';
import RectRender from '../render/RectRender';
import { ChoiceCollider } from '../collider/ChoiceCollider';
import Canvas from './Canvas';

class App{

    private game : Game;

    constructor(game: Game){
        this.game = game;
    }
    /**
     * 全てのアセットの読み込みが完了したらゲームを開始する
     */
    public async setup(isNew: boolean): Promise<void>{
  
        const gamedata = await AssetLoader.loadGameData("gamedata.yml");
        const yaml = require("js-yaml");
        const game = yaml.load(gamedata);
       
        const assetManager = AssetManager.getInstance();
        assetManager.setGameData(game);

        const gameManager = GameManager.getInstance();
        gameManager.setGameValue(game.valiable);

        // ここでロードの場合にロードしたオブジェクトを再設定させる。
        if(!isNew){
            const saveData = JSON.parse((localStorage.getItem("savedata") as any));
            
            gameManager.setGameValue(saveData);
        }

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

    //TODO タイトル画面を表示してロードとスタートボタンからsetupさせるように修正する。
    const rectRender = new RectRender();
    rectRender.renderTitleRect();
    const canvas = Canvas.getInstance().getCanvas();

    const startGame = (e: MouseEvent | TouchEvent) => {
        const col = new ChoiceCollider();
        const point = col.getClickToPoint(e as MouseEvent | TouchEvent);

        if(col.isHitStart(point)){
            canvas.removeEventListener('mousedown',startGame,true);
            canvas.removeEventListener('touchstart',startGame,true);
            const app = new App(new Game());
            app.setup(true);
            return;
        }
        if(col.isHitLoad(point)){
            canvas.removeEventListener('mousedown',startGame,true);
            canvas.removeEventListener('touchstart',startGame,true);
            const app = new App(new Game());
            app.setup(false);
            return;
        }
    }

    canvas.addEventListener('mousedown', startGame, true);
    canvas.addEventListener('touchstart', startGame, true);

    // const app = new App(new Game());
    // app.setup();
    
}