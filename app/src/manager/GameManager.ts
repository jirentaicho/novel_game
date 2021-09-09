/**
 * ゲームの状態を管理します。
 * 
 */
export default class GameManager {
    
    private constructor() {}

    // ゲームに必要なyamlに記載されている全ての変数をゲーム変数として管理します。
    private gameValue: any;

    private static instance: GameManager;

    public static getInstance(): GameManager{
        if(!GameManager.instance){
            GameManager.instance = new GameManager();
        }
        return GameManager.instance;
    }

    /**
     * 
     * ゲームに必要な変数データを設定します。
     * 
     * @param gamedata ゲームに必要な変数のオブジェクト
     */
    public setGameValue(gamedata: any): void{
        this.gameValue = gamedata;
    }

    public getGameValue(): any{
        return this.gameValue;
    }

    public getSceneName(): any{
        return this.gameValue.scene;
    }

    public setSceneName(name: string): void{
        this.gameValue.scene = name;
    }

    


    /**
     * 
     * 命令からゲーム変数の値を計算します。
     * 
     * 使用可能な命令
     * 
     * * add / 数値変数に対して数値を加算します
     * * min / 数値変数に対して数値を減算します
     * * flag / 真偽変数に対してフラグを変更します
     * 
     * @param funcStr 命令名
     * @param value 命令の引数
     * @param target 対象とする変数名
     * 
     */
    public executeLogic(funcStr: string, value: number | boolean, target: string): void{

        if (funcStr == "add") {
            this.gameValue[target] += (value as number);

        } else if (funcStr === "min") {
            this.gameValue[target] -= (value as number);

        } else if (funcStr === "flag") {
            this.gameValue[target] = (value as boolean);

        } else {
            console.log(`対象の命令が存在しません。 命令名「${funcStr}」`)
        }

    }
    
    /**
     * 
     * 命令からゲーム変数の値を計算します。
     * 
     * 使用可能な命令
     * 
     * more / 数値変数に対して以上かどうか検査します
     * less / 数値変数に対して以下かどうか検査します
     * eq / 真偽変数に対して真偽を検査します
     * 
     * @param funcStr 検査方法
     * @param value 基準値
     * @param target 検査値
     * @returns 
     */
    public getBranchResult(funcStr: string, value: number | boolean, target: string): boolean{
        if (funcStr == "more") {
            return this.gameValue[target] >= (value as number);

        } else if (funcStr === "less") {
            return this.gameValue[target] <= (value as number);

        } else if (funcStr === "eq") {
            return this.gameValue[target] == (value as boolean);

        } else {
            //TODO エラースローする
            return false;
        }
    }


    public saveGame(): void{
        localStorage.setItem('savedata',JSON.stringify(this.gameValue));
        alert("セーブしました");
    }
}