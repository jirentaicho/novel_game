/**
 * 描画する振る舞い
 * 　・テキストを描画する
 * 　・背景を描画する
 * 　・アクターを描画する
 * 　・選択肢を描画する
 * 
 */
interface Render<T>{
    rendering(str: T): void;
}