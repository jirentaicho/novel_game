import Point from "../collider/Point";
import Rect from "../collider/Rect";

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
     * 改行文字数
     * 
     */
    static readonly XS_LINE: number = 15;
    static readonly MD_LINE: number = 30;
    static readonly XL_LINE: number = 40;

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

    /**
     * キャラクターの立ち位置
     */

    static getLeftPosition(): Point{
        return new Point(0,0);
    }

    /**
     * 
     * 改行する前の文字数を取得します。
     * 
     * @returns 
     */
    static getTextLine(): number{
        const windowsize = window.innerWidth;

        if(windowsize > Config.PC){
            return this.XL_LINE;

        }else if(windowsize > Config.TB){
            return this.MD_LINE;

        } else{
            return this.XS_LINE;

        }
    }
    

}