export default class EmptyUtil{

    /**
     *  文字列が空かどうかを判定します
     * 
     * @param str 
     * @returns 
     */
    public static isEmpty(str: String): boolean{

        // チェックを1件ずつ記載します。
        
        if(str == null){
            return true;
        }
        if(str == ""){
            return true;
        }
        if(str == undefined){
            return true;
        }
        return false;

    }
}