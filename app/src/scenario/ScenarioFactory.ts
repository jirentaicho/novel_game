import MessageScenario from "./MessageScenario";
import ChoiceScenario from "./ChoiceScenario";
import Scenario from "./Scenario";
import { SCENARIO_TYPE } from "./ScenatioType";

/**
 * 
 * ymlファイルに定義されたタイプを元にシーンを作成して返却します。
 *  
 */
export default class ScenatioFactory{

    static getScenario(type: string): Scenario{
        if(type == SCENARIO_TYPE.MESSAGE){
            return new MessageScenario();
        }else{
            return new ChoiceScenario();
        }
    }
}