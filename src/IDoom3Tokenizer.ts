export enum ETokenType{NONE,STRING,NUMBER}
export interface IDoom3Token{
    reset():void;
    isString(str:string):boolean;
    readonly type:ETokenType;
    getString():string;
    getFloat():number;
    getInt():number;
}
export interface IDoom3Tokenizer{
    setSource(source:string):void;
    reset():void;
    getNextToken(token:IDoom3Token):boolean;
}
