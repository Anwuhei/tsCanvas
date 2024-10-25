import {IDoom3Token,IDoom3Tokenizer,Doom3Factory,ETokenType} from "./IDoom3Tokenizer"
let str:string = `numMeshes 5 
joints{
"origin" -1 (0 0 0) (-0.5 -0.5 -0.5)
"Body" 0 (-12.1038131714 0 79.004776001) (-0.5 -0.5 -0.5)
}`
let tokenizer:IDoom3Tokenizer = Doom3Factory.createDoom3Tokenizer()
let token:IDoom3Token = tokenizer.createDoom3Token()
tokenizer.setSource(str)
while(tokenizer.getNextToken(token)){
    if(token.type === ETokenType.NUMBER){
        console.log("NUMBER:"+token.getFloat())
    }else if(token.isString("joints")){
        console.log("jiexi joints")
    }else{
        console.log("STRING:"+token.getString())
    }
}
class IDoom3Token{
    private _type!:ETokenType;
    private _charArr:string[]=[]
    private _val!:number;
    public constructor(){
        this._charArr.length=0
        this._type=ETokenType.NONE
        this._val=0.0
    }
    public get type():ETokenType{
        return this._type;
    }
    public getString():string{
        return this._charArr.join("")
    }
    public getFloat():number{
        return this._val;
    }
    public getInt():number{
        return parseInt(this._val.toString(),10)
    }
    public isString(str:string):boolean{
        let count:number = this._charArr.length
        if(str.length != count){
            return false
        }
        for(let i:number=0;i<count;i++){
            if(this._charArr[i]!==str[i]) return false;ßß
        }
        return true;
    }
    
}
class Doom3Token implements IDoom3Token{
    private _type!:ETokenType;
    private _charArr:string[]=[] //_charArray:Array<string>=new Array<string>
    private _val!:number;
    public constructor(){
        this._charArr.length=0
        this._type=ETokenType.NONE
        this._val=0.0
    }
    public reset():void{
        this._charArr.length=0
        this._type=ETokenType.NONE
        this._val
    }
    public addChar(c:string):void{
        this._charArr.push(c)
    }
    public setVal(num:number):void{
        this._val=num;
        this._type=ETokenType.NUMBER
    }
    public setType(type:ETokenType):void{
        this._type=type
    }
}

class Doom3Tokenizer implements IDoom3Tokenizer{
    private _digits:string[]=["0","1","2","3","4","5","6","7","8","9"]
    private _isDigit(c:string):boolean{
        for(let i:number=0;i<this._digits.length;i++){
            if(c==this._digits[i]){return true}
        }
        return false
    }
    private _isWhitespace(c:string):boolean{
        for(let i:number=0;i<this._whiteSpaces.length;i++){
            if(c===this._whiteSpaces[i]) return true
            return false
        }
    }
    private _source:string = "Doom3Tokenizer"
    private _currIdx:number = 0
    public setSource(source:string):void{
        this._source = source
        this._currIdx = 0
    }
    public reset():void{
        this._currIdx=0
    }
    private _getChar():string{
        if(this._currIdx>=0&&this._currIdx<this._source.length){
            return this._source.charAt(this._currIdx++)
        }
        return ""
    }
    private _peekChar():string{
        if(this._currIdx>=0&&this._currIdx<this._source.length){
            return this._source.charAt(this._currIdx)
        }
        return ""
    }
    private _ungetChar():void{
        if(this._currIdx>0){
            -- this._currIdx
        }
    }
}