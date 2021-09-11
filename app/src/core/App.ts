import Game from './Game';
import AssetLoader from './AssetLoader';
import AssetManager from '../manager/AssetManager';
import GameManager from '../manager/GameManager';
import RectRender from '../render/RectRender';
import { ChoiceCollider } from '../collider/ChoiceCollider';
import Canvas from './Canvas';
import BackImageRender from '../render/BackImageRender';
import AudioManager from '../manager/AudioManager';

class App{

    private game : Game;

    private titleImage: string = "";

    private bgm: string = "";

    constructor(game: Game){
        this.game = game;
    }
    /**
     * 全てのアセットの読み込みが完了したらゲームを開始する
     */
    public async setup(): Promise<void>{

        //　全てのアセットデータをロードする
        await this.loadAllAsset();

        const imageRender = new BackImageRender();
        imageRender.rendering(this.titleImage);

        //　タイトル画面の表示を行う
        const rectRender = new RectRender();
        rectRender.renderTitleRect();
        const canvas = Canvas.getInstance().getCanvas();

        canvas.addEventListener('mousedown', this.clickEvent, true);
        canvas.addEventListener('touchstart', this.clickEvent, true);

        // ここでならせない
        // クリック時はOK
        const audio = AudioManager.getInstance();
        audio.playMusic(this.bgm);  


    }
    
    private clickEvent = (e: MouseEvent | TouchEvent) => {

 

        const canvas = Canvas.getInstance().getCanvas();
        const col = new ChoiceCollider();
        const point = col.getClickToPoint(e as MouseEvent | TouchEvent);

        e.stopPropagation();

        if(col.isHitStart(point)){
            canvas.removeEventListener('mousedown',this.clickEvent,true);
            canvas.removeEventListener('touchstart',this.clickEvent,true);
            this.startGame(true);
            return;
        }
        if(col.isHitLoad(point)){
            canvas.removeEventListener('mousedown',this.clickEvent,true);
            canvas.removeEventListener('touchstart',this.clickEvent,true);
            this.startGame(false);
            return;
        }
    }

    private startGame(isNew: boolean): void {
        if(!isNew){
            const saveData = JSON.parse((localStorage.getItem("savedata") as any));
            const gameManager = GameManager.getInstance();
            gameManager.setGameValue(saveData);
        }
        this.game.init();
    }


    /**
     * 全てのアセットをロードします。
     */
    private async loadAllAsset(): Promise<void>{
        const gamedata = await AssetLoader.loadGameData("gamedata.yml");
        const yaml = require("js-yaml");
        const game = yaml.load(gamedata);
       
        const assetManager = AssetManager.getInstance();
        assetManager.setGameData(game);

        this.titleImage = game.titleImage;
        this.bgm = game.titleMusic;

        const gameManager = GameManager.getInstance();
        gameManager.setGameValue(game.valiable);

        const result = await Promise.all(game.images.map( async (image: string)  => {
            const loadResult = await AssetLoader.loadImage(image);
            assetManager.setItem(image,loadResult);
        }))

    }


}

/**
 * 処理の最初
 */
window.onload = () => {
    const app = new App(new Game());
    app.setup();
}