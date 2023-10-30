class Cxmsg{
    titulo=null
    texto=null
    cor=null
    destino=null
    divmsg=null

    constructor(config){
        this.titulo=config.titulo
        this.texto=config.texto
        this.cor=config.cor
        this.destino=document.body
        this.btn=document.createElement('button')
    }
    mostrar=()=>{
        this.divmsg=document.createElement('div')
        const estilo_divmsg=
            'display:flex;'+
            'justify-content:center;'+
            'align-items:center;'+
            'position:absolute;'+
            'top:0px;'+
            'left:0px;'+
            'width:100%;'+
            'height:100vh;'+
            'background-color:rgba(0,0,0,0.7);'+
            "z-index:9999999;"
        this.divmsg.setAttribute('id','divmsg')
        this.divmsg.setAttribute('style',estilo_divmsg)
        this.destino.prepend(this.divmsg)

        const estilo_areaCxmsg=
            'display:flex;'+
            'justify-content:flex-start;'+
            'align-items:flex-start;'+
            'flex-direction:column;'+
            'width:300px;'
        const areaCxmsg=document.createElement('div')  
        areaCxmsg.setAttribute('style',estilo_areaCxmsg)
        this.divmsg.appendChild(areaCxmsg) 

        const titulo_areaCxmsg=
            'display:flex;'+
            'justify-content:flex-start;'+
            'align-items:center;'+
            'width:100%;'+
            "background-color:"+this.cor+";"+
            "color:#fff;"+
            "padding:5px;"+
            "border-radius:5px 5px 0px 0px"

        const tituloCxmsg=document.createElement('div')  
        tituloCxmsg.setAttribute('style',titulo_areaCxmsg)
        tituloCxmsg.innerHTML=this.titulo
        areaCxmsg.appendChild(tituloCxmsg)
        
        const texto_areaCxmsg=
            'display:flex;'+
            'justify-content:center;'+
            'align-items:center;'+
            'width:100%;'+
            "height:100px;"+
            "background-color:#eee;"+
            "color:#000;"+
            "padding:5px;"+
            "border-radius:0px 0px 0px 0px"
        const textoCxmsg=document.createElement('div')  
        textoCxmsg.setAttribute('style',texto_areaCxmsg)
        textoCxmsg.innerHTML=this.texto
        areaCxmsg.appendChild(textoCxmsg)
        
        const footer_areaCxmsg=
            'display:flex;'+
            'justify-content:center;'+
            'align-items:center;'+
            'width:100%;'+
            "height:20px;"+
            "background-color:"+this.cor+";"+
            "color:#fff;"+
            "padding:5px;"+
            "border-radius:0px 0px 5px 5px"
        const footerCxmsg=document.createElement('div')  
        footerCxmsg.setAttribute('style',footer_areaCxmsg)
        areaCxmsg.appendChild(footerCxmsg)
        this.btn.setAttribute('id','btn')
        this.btn.innerHTML='OK'
        this.btn.addEventListener("click",()=>{
            this.divmsg.remove()
        })
        footerCxmsg.appendChild(this.btn)
    }   
}
export{Cxmsg}