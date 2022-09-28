import './components/index.js';
class AppContainer extends HTMLElement{
    selections = '';
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    

    connectedCallback(){
        this.render()
        const cards = this.shadowRoot?.querySelectorAll('my-post');
        cards?.forEach(card => card.addEventListener('reservado', (event) => {
            console.log('click desde el post');
            console.log(event.detail.titulo);



        }));
  
    }
    render(){
        if(!this.shadowRoot) return;
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


        ` ;

    }
}

customElements.define("app-container", AppContainer)