import MessageScenario from "./MessageScenario";
import ChoiceScenario from "./ChoiceScenario";
import Scenario from "./Scenario";
import { SCENARIO_TYPE } from "./ScenatioType";
import BranchScenario from "./BranchScenario";

/**
 * 
 * ymlファイルに定義されたタイプを元にシーンを作成して返却します。
 *  
 */
export default class ScenatioFactory{

    static getScenario(type: string): Scenario{
        if(type == SCENARIO_TYPE.MESSAGE){
            return MessageScenario.getInstance();
        }else if(type == SCENARIO_TYPE.CHOICE){
            return ChoiceScenario.getInstance();
        }else{
            return BranchScenario.getInstance();
        }
    }
}