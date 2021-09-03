/**
 * アセットを管理します。
 * keymapで描画用のファイルを返却します。
 * 必要なアセットを最初にここに登録しておきます。
 * 
 */

export default class AssetManager{

    // アセットに関するデータ
    // 
    // 全てのアセットデータを管理している、ここクラス化してあげてもいいなぁ。
    private gamedata: Object = {};


    // 画像アセット
    private items: Record<string,CanvasImageSource> = {};

    private static instance: AssetManager;

    private constructor(){}

    public static getInstance(): AssetManager{
        if(!AssetManager.instance){
            AssetManager.instance = new AssetManager();
        }
        return AssetManager.instance;
    }

    /**
     * ゲームデータオブジェクトを設定します。
     * yamlから作成したobjectを指定します。
     * 
     * @param data ゲームデータオブジェクト
     */
    public setGameData(data: Object): void{
        //TODO vaild
        this.gamedata = data;
    }

    /**
     * 
     * ゲームデータオブジェクトを返却します。
     * 
     * @returns ゲームデータオブジェクト
     */
    public getGameData(): any{
        return this.gamedata;
    }

    public setItem(keyname: string, value: CanvasImageSource): void{
        this.items[keyname] = value;
    }

    /**
     * 
     * ファイル名からロード済のCanvasImaeSourceを取得します。
     * 
     * @param keyname ファイル名
     * @returns CanvasImageSource
     */
    public getItem(keyname: string): CanvasImageSource{
        return this.items[keyname];
    }

    /**
     * 
     * 全ての画像アセットデータを管理しているRecordを返却します。
     * 
     * @returns 全ての画像アセットデータを管理しているRecord
     */
    public getItems(): Record<string,CanvasImageSource>{
        return this.items;
    }

}