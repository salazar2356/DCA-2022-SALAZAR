import "./components/index.js";

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();

    }

    render() {
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./estilos.css">

<body>

        <my-header></my-header>
        <div class="components">
        <div class="componentscoulum">
        <div class="contentuno">
        <my-stories usernamep="FedeVigevani" usernamed="NicoleGarcía" usernamet="BarbieMotoMami" usernamec="AnaS3" usernamei="FitHurtado"></my-stories>

        <my-card username="Isa_Salzar0910" likes="90" descripcion="R e l a x"comentarios="20"></my-card>
        </div>
        <div class="contentdos">
        <mis-referencias useruno="Cristian Mohaded" userdos="Carolina_Tatto" usertres="Cbum" usercuatro="ElMuralDIS" usercinco="Salazar1810"></mis-referencias>

        </div>

        </div>
        </div>
</body>

        
        `;

        }
    }

customElements.define("app-container", AppContainer);