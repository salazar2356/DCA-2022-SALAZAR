class MyHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./estilos.css">

        <div class="header">
        <div class="instagram">
        
        <img src="instagram.png" height="30px" width="70px">
        <img src="flecha.png" height="10px" width="10px">
        </div>

        <div class="buscador">
        <input type="text" placeholder="Busca" id="buscar"
        </div>

        
        </div>
        <div class="iconos">
        <img src="home.png" height="25px" width="25px">
        <img src="mensaje.png" height="25px" width="25px">
        <img src="mas.png" height="25px" width="25px">
        <img src="explore.png" height="25px" width="25px">
        <img src="like.png" height="25px" width="25px">
        <div class=isaimg>
        <img src="isa.jpg" height="25px" width="25px">
        </div>

        </div>
        `;
    }
}
customElements.define("my-header", MyHeader);
export default MyHeader;
