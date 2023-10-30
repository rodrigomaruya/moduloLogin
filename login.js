class Login{
    static logado=false;
    static matLogado=null;
    static nomeLogado=null;
    static acessoLogado=null;
    static estiloCss=null;
    static callback_ok=null;
    static callback_naoOk=null;
    static config={
        cor:"048",
        img:"logoInfoline.png"
    }
    //static endpoint="https://apilogin.horizontiltda.repl.co/";
    
    static login=(callback_ok,callback_naoOk,config=null)=>{
        if(config!=null){
            this.config=config
        }
        this.callback_ok=()=>{callback_ok()}
        this.callback_naoOk=()=>{callback_naoOk()}
        this.estiloCss=
        ".fundoLogin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;background-color: rgba(0,0,0,0.75);box-sizing: border-box;}"+
        ".baseLogin{display: flex;justify-content: center;align-items: stretch;width: 100%;box-sizing: inherit;}"+
        ".elementoLogin{display: flex;justify-content: center;align-items: center;flex-direction: column;width: 300px;min-width: 185px;background-color: #eee;padding: 10px;border-radius: 10px 0px 0px 10px;box-sizing: inherit;}"+
        ".logoLogin{display: flex;justify-content: center;align-items: center;width: 300px;min-width: 185px;background-color: #646464; padding: 10px;border-radius: 0px 10px 10px 0px;box-sizing: inherit;}"+
        ".logoLogin img{width: 200px;height: 200px;box-sizing: inherit;}"+
        ".campoLogin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;margin:5px;}"+
        ".campoLogin label{font-size: 18px;}"+
        ".campoLogin input{font-size: 18px;padding: 5px;background-color: #fff;border-radius: 5px;width: 170px;}"+
        ".botoesLogin{display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: inherit;}"+
        `.botoesLogin button{cursor: pointer;background-color: #${this.config.cor};color: #fff;border-radius: 5px;padding: 10px;width: 100px;box-sizing: inherit;}`

        const styleEstilo=document.createElement('style')
        styleEstilo.setAttribute("id","estiloLogin")
        styleEstilo.setAttribute("rel","stylesheet")
        styleEstilo.setAttribute("type","text/css")
        styleEstilo.innerHTML=this.estiloCss
        document.head.appendChild(styleEstilo)

        const corpo=document.body
        const fundoLogin=document.createElement("div")
        fundoLogin.setAttribute("id","fundoLogin")
        fundoLogin.setAttribute("class","fundoLogin")
        corpo.prepend(fundoLogin)

        const baseLogin=document.createElement("div")
        baseLogin.setAttribute("id","baseLogin")
        baseLogin.setAttribute("class","baseLogin")
        fundoLogin.appendChild(baseLogin)

        const elementoLogin=document.createElement("div")
        elementoLogin.setAttribute("id","elementoLogin")
        elementoLogin.setAttribute("class","elementoLogin")
        baseLogin.appendChild(elementoLogin)

        const campoLoginUserName=document.createElement("div")
        campoLoginUserName.setAttribute("id","campoLoginUserName")
        campoLoginUserName.setAttribute("class","campoLogin")
        elementoLogin.appendChild(campoLoginUserName)
        
        const labelN=document.createElement("label")
        labelN.innerHTML="UserName"
        campoLoginUserName.appendChild(labelN)
        
        const inputName=document.createElement("input")
        inputName.setAttribute("type","text")
        inputName.setAttribute("name","f-username")
        inputName.setAttribute("id","f-username")
        campoLoginUserName.appendChild(inputName)

        const campoLoginSenha=document.createElement("div")
        campoLoginSenha.setAttribute("id","campoLoginSenha")
        campoLoginSenha.setAttribute("class","campoLogin")
        elementoLogin.appendChild(campoLoginSenha)
        
        const labelS=document.createElement("label")
        labelS.innerHTML="Password"
        campoLoginSenha.appendChild(labelS)
        
        const inputSenha=document.createElement("input")
        inputSenha.setAttribute("type","password")
        inputSenha.setAttribute("name","f-senha")
        inputSenha.setAttribute("id","f-senha")
        campoLoginSenha.appendChild(inputSenha)

        const divBtn=document.createElement("div")
        divBtn.setAttribute("class","botoesLogin")
        elementoLogin.appendChild(divBtn)
        
        const btnLogin=document.createElement("button")
        btnLogin.setAttribute("id","btn_login")
        btnLogin.innerHTML="Login"
        btnLogin.addEventListener("click",()=>{
            this.verificaLogin()    
        })
        divBtn.appendChild(btnLogin)

        const btnCancelar=document.createElement("button")
        btnCancelar.setAttribute("id","btn_cancelar")
        btnCancelar.innerHTML="Cancelar"
        btnCancelar.addEventListener("click",()=>{
            this.fechar()
        })
        divBtn.appendChild(btnCancelar)

        const divLogo=document.createElement("div")
        divLogo.setAttribute("id","logoLogin")
        divLogo.setAttribute("class","logoLogin")
        baseLogin.appendChild(divLogo)
        
        const imgLogo=document.createElement("img")
        imgLogo.setAttribute("src",this.config.img)
        imgLogo.setAttribute("alt","Logo")
        divLogo.appendChild(imgLogo)


        
    }

    static verificaLogin=()=>{
        let mat=document.getElementById("f-username").value
        let pass=document.getElementById("f-senha").value
        const endpoint=`https://apilogin.horizontiltda.repl.co/?matricula=${mat}&senha=${pass}`

        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                console.log(res)
                this.logado=true
                this.matLogado=mat
                this.nomeLogado=res.nome
                this.acessoLogado=res.acesso
                this.callback_ok()
                this.fechar()
            }else{
                this.logado=false
                this.matLogado=null
                this.nomeLogado=null
                this.acessoLogado=null
                this.callback_naoOk()
                console.log('Usuário não encontrado')
            }
        })
        // if(mat=="123" && pass=="321"){
        //     return true;
        // }else
        // return false;
    }

    static fechar=()=>{
        const id_fundoLogin=document.getElementById("fundoLogin")
        id_fundoLogin.remove()
        const id_estiloLogin=document.getElementById("estiloLogin")
        id_estiloLogin.remove()
    }
}
// export {Login}