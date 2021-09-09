/**
 * コンフィグ系の設定ファイルです。
 * 
 */
export default class Config{

    /**
     * 基本サイズ
     */
    static readonly PC: number = 1080;
    static readonly TB: number = 780;
    static readonly MB: number = 480;

    /**
     * 画面サイズ　パソコン
     */
    static readonly XL_WIDTH: number = 1080;
    static readonly XL_HEIGHT: number = 1080;
    static readonly XL_FONT: number = 36;

    /**
     * 画面サイズ タブレット
     */
    static readonly MD_WIDTH: number = 780;
    static readonly MD_HEIGHT: number = 780;
    static readonly MD_FONT: number = 26;

    /**
     * 画面サイズ　スマホ
     */
    static readonly XS_WIDTH: number = 480;
    static readonly XS_HEIGHT: number = 320;
    static readonly XS_FONT: number = 18;

    /**
     * 
     * 画面サイズに応じたフォントサイズを返却します。
     * 
     * @returns フォントサイズ
     * 
     */
    static getFontSize(): number{

        const windowsize = window.innerWidth;

        if(windowsize > Config.PC){
            return this.XL_FONT;

        }else if(windowsize > Config.TB){
            return this.MD_FONT;

        } else{
            return this.XS_FONT;

        }

    }

}