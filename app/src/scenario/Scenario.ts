/**
 * scenarioに関する抽象クラスです。
 * scenarioとしては、メッセージシナリオ、選択シナリオなど、種類があります。
 * 
 * シナリオとして管理することは多いですが
 * 
 */
export default abstract class Scenario{

    protected backImage: string = "";
    protected actorLeft: string = "";
    protected actorRight: string = "";

    /**
     * シナリオの初期設定を行います。
     * 基本の設定は基底クラスで行います。
     * init→settingScenarioの順で呼ばれます。
     * 
     * @param object ゲームデータ
     */

    abstract settingScenario(object: any): void;
    /**
     * ユーザーイベント発火時に呼ばれるもの
     */
    abstract runLogic(): void;

    /**
     * アセットデータの描画を行います。
     */
    abstract executeScenario(): void;

    /** 共通設定 */
    public init(object: any): void{
        //TODO 全てのシナリオに共通する処理はここに記載してします。
        this.backImage = object.back;
        this.actorLeft = object.actorleft;
        this.actorRight = object.actorright;

        //ここからsettingを呼び出せば、呼出し側はobjectを渡すだけの認識で済みます。
        this.settingScenario(object);
    }
}