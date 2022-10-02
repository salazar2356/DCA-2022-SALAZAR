import {getCharacters} from "./services/charactes.js";
import { character } from "./types/index.js";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }
     async connectedCallback(){
        const charactes = await getCharacters();
        this.render(charactes);
    }

    render(charactes: Array<character>) {
       if(!this.shadowRoot) return;
       const personajes = charactes.map(({id, name, image, gender,species,status})=> `
       <link rel="stylesheet" href="/styles.css">

       <article>
       <div class="componente">
       <div class="top-row background top-row">
       <h3>${id}: ${name}</h3>
       </div>

       <img src="${image}">
       
       <div class="contenido">
       <h4>Género: ${gender}</h4>
       <br>
       <h4>Especie: ${species}</h4>
       <br>

       <h4>Status: ${status}</h4>
       <br>

       </div>
       </div>


       </article>`);

       this.shadowRoot.innerHTML = `<section>
       ${personajes.join("")}
       </section>
       `;

 }
}

customElements.define('app-container', AppContainer)