import './components/index.js';
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.selections = '';
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const cards = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('my-post');
        cards === null || cards === void 0 ? void 0 : cards.forEach(card => card.addEventListener('reservado', (event) => {
            console.log('click desde el post');
            console.log(event.detail.titulo);
        }));
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = ` 
        
        <h3>reservados: ${this.selections}</h3>

        <div class="componente">
        <my-post titulo="Viaje a Cartagena" descripcion="Hermoso día de playa"></my-post>
        </div>

        <div class="componente">
        <my-post titulo="Viaje a San Andres" descripcion="Mar de los 7 colores"></my-post>
        </div>

        <div class="componente">
        <my-post titulo="Viaje al Amazonas" descripcion="Lago Tarapoto"></my-post>
        </div>

        <div class="componente">
        <my-post titulo="Viaje al Medellín" descripcion="Hacienda Nápoles"></my-post>
        </div>

        <div class="componente">
        <my-post titulo="Salento" descripcion="Valle del Cocora"></my-post>
        </div>


        `;
    }
}
customElements.define("app-container", AppContainer);
