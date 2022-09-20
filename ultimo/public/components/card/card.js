var CardAttributes;
(function (CardAttributes) {
    CardAttributes["username"] = "username";
    CardAttributes["likes"] = "likes";
    CardAttributes["descripcion"] = "descripcion";
    CardAttributes["comentarios"] = "comentarios";
})(CardAttributes || (CardAttributes = {}));
class Card extends HTMLElement {
    constructor() {
        super();
        this.username = '';
        this.likes = '';
        this.descripcion = '';
        this.comentarios = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(CardAttributes);
    }
    attributeChangedCallback(prop, _, newValue) {
        this[prop] = newValue;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="./estilos.css">

        <section>

        <div class="post">
        <div class="perfil">
        <div class="isa">
        <img src="isa.jpg" height="50" width="50">
        </div>
        <h4>${this.username}</h4>
        </div>
        <img src="isaa.png" height="480" width="415px">
       
        <div class="ambos">

        <div class="iconos">
        <img src="like.png" height="25px" width="25px">
        <img src="comentario.png" height="25px" width="25px">
        <img src="send.png" height="25px" width="25px">
        </div>

        <div class="guardar">
        <img src="save.png" height="25px" width="25px">
        </div>

        </div>


        
        <div class="isa">
        <h7>${this.username}</h7>
        </div>


        <div class="botton-post"
        <h7>${this.descripcion}</h7>
        <h7>${this.likes} likes</h7>
        <h7>${this.comentarios} comentarios</h7>
        </div>


        </section>
        
        `;
    }
}
customElements.define("my-card", Card);
export default Card;
