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

let input:string = "[3.14,-3.14,.14,-.14,3.,-3.,+3.14]"
tokenizer.setSource(input)
while(tokenizer.getNextToken(token)){
    if(token.type===ETokenType.NUMBER){
        console.log("NUMBER:"+token.getFloat())
    }else{
        console.log("STRING:"+token.getString())
    }
}
