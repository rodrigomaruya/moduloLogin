import { Login } from "./login.js";
import {Cxmsg} from "./cxmsg.js"


const config={
    titulo:'Infoline',
    texto:'Usuário ou senha incorreto',
    cor:'#48f'
}
const cxmg=new Cxmsg(config)

const callback_ok=()=>{
    
}

const callback_naoOk=()=>{
    cxmg.mostrar(config)
}

Login.login(callback_ok,callback_naoOk)