import { InputType } from "zlib";

export default class EventContext{

    //@ts-ignore
    private inputType: InputType

    private constructor(){

    }



    public build(): EventContext{
        return new EventContext();
    }
    
}