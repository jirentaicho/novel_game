/**
 * アセットファイルをロードしてあっせとマネージャーに登録します。
 */
export default class AssetLoader{

    private constructor(){
    }

    /**
     * 
     * ファイル名からロード完了した画像を返します。（Promiseを返します）
     * 
     * @param filename 画像ファイルの名前
     * @returns Promise<CanvasImageSource>
     * 
     */
    static loadImage(filename: string): Promise<CanvasImageSource>{

        return new Promise<CanvasImageSource>( (resolve,reject) => {
            const image = new Image();
            image.addEventListener("load", () => {
                resolve(image);
            });
            image.src = `images/${filename}`;
        });
    }

    /**
     * 
     * ymlファイルを読み込んでテキスト形式で返却します。
     * 
     * @param filename 
     * @returns 
     */
    static loadGameData(filename: string): Promise<any>{
        return fetch(`/${filename}`)
            .then( res => res.text());
    }

}