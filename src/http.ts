/*import { ETokenType } from "./IDoom3Tokenizer"

export class HttpRequest{
    public static doGet(url:string):HttpResponse{
        let xhr:XMLHttpRequest = new XMLHttpRequest()
        xhr.open("get",url,false,null,null)
        xhr.send()
        if(xhr.status === 200){
            return {success:true,responseType:"text",response:xhr.response}
        }else{
            return {success:false,responseType:"text",response:null}
        }
    }
}
export interface HttpResponse{
    success:boolean
    responseType:XMLHttpRequestResponseType
    response:any
}

let response:HttpResponse = HttpRequest.doGet("level.proc")
if(response.success===true){
    str = response.response as string
    tokenizer.setSource(str)
    while(tokenizer.moveNext()){
        if(tokenizer.current.type === ETokenType.NUMBER){
            console.log("NUMBER:"+tokenizer.current.getFloat())
        }else{
            console.log("STRING:"+ tokenizer.current.getString)
        }
    }
}
/**
 * static doGetAsync
 *//*
public static doGetAsync(url:string,callback:(response:HttpResponse)=>void,responseType:XMLHttpRequestResponseType="text"):void {
    let xhr:XMLHttpRequest = new XMLHttpRequest()
    xhr.responseType=responseType
    xhr.onreadystatechange=(ev:Event):void=>{
        if(xhr.readyState === 4 && xhr.status===200){
            let response:HttpResponse={success:true,responseType:ResponseType,response:xhr.response}
            callback(response)
        }else{
            let response:HttpResponse={success:false,responseType:ResponseType,response:null}
            callback(response)
        }
    }
    xhr.open("get",URL,true,null,null)
    xhr.send()
}*/