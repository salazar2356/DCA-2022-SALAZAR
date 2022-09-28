/*COMPONENTE CON PROPS QUE EMITE UN EVENTO DESDE UN BOTÓN*/
var MyPostAttributes;
(function (MyPostAttributes) {
    MyPostAttributes["titulo"] = "titulo";
    MyPostAttributes["descripcion"] = "descripcion";
})(MyPostAttributes || (MyPostAttributes = {}));
var CardBookedEvents;
(function (CardBookedEvents) {
    CardBookedEvents["reservado"] = "reservado";
})(CardBookedEvents || (CardBookedEvents = {}));
class MyPost extends HTMLElement {
    constructor() {
        super();
        this.titulo = '';
        this.descripcion = '';
        this.attachShadow({ mode: "open" });
        this.handleClick = this.handleClick.bind(this);
    }
    static get observedAttributes() {
        return Object.keys(MyPostAttributes);
    }
    attributeChangedCallback(prop, _, newValue) {
        this[prop] = newValue;
    }
    connectedCallback() {
        this.mount();
    }
    mount() {
        this.render();
        this.addListeners();
    }
    handleClick() {
        const eventName = 'reservado';
        const event = new CustomEvent(eventName, {
            detail: {
                titulo: this.titulo
            },
            composed: true
        });
        this.dispatchEvent(event);
    }
    addListeners() {
        var _a;
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', this.handleClick);
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = ` 


        <section>
        
        <h4>${this.titulo}</h4>
        <h4>${this.descripcion}</h4>
        <button>Reservar</button>

        </section>
        
        `;
    }
}
customElements.define("my-post", MyPost);
export default MyPost;
