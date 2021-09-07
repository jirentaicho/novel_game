/**
 * ゲームの状態を管理します。
 * 
 */
export default class GameManager {
    
    private constructor() {}

    // ゲームに必要なyamlに記載されている全ての変数をゲーム変数として管理します。
    private gameValue: any;




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
     * @param funcStr 
     * 
     */
    public getLogic(funcStr: string, value: number | boolean): void{

        if (funcStr == "add") {


        } else if (funcStr === "min") {


        } else if (funcStr === "flag") {


        } else {
            
        }

    }


}