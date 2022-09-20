var ReferenciasAttributes;
(function (ReferenciasAttributes) {
    ReferenciasAttributes["username"] = "username";
    ReferenciasAttributes["useruno"] = "useruno";
    ReferenciasAttributes["userdos"] = "userdos";
    ReferenciasAttributes["usertres"] = "usertres";
    ReferenciasAttributes["usercuatro"] = "usercuatro";
    ReferenciasAttributes["usercinco"] = "usercinco";
})(ReferenciasAttributes || (ReferenciasAttributes = {}));
class MisReferencias extends HTMLElement {
    constructor() {
        super();
        this.username = '';
        this.useruno = '';
        this.userdos = '';
        this.usertres = '';
        this.usercuatro = '';
        this.usercinco = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(ReferenciasAttributes);
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

        <div class="sugeridos">

        <div class="top-referencias">
        
        <div class="isa">
        <img src="isa.jpg" height="50" width="50">
        </div>
        <h5>${this.username}</h5>
        <h5>Isa</h5>
        </div>
        <h6>Sugerencias para ti</h6>

        <div class="referencias">
        

       
        <div class="referencia">
        <img src="cbum.jpg" height="50" width="50">
        <h6>${this.usertres}</h6>
        </div>

        <div class="referencia">
        <img src="elmuraldis.jpg" height="50" width="50">
        <h6>${this.usercuatro}</h6>
        </div>

        <div class="referencia">
        <img src="salazar.jpg" height="50" width="50">
        <h6>${this.usercinco}</h6>
        </div>


        </div>

        </div>
        
        `;
    }
}
customElements.define("mis-referencias", MisReferencias);
export default MisReferencias;
