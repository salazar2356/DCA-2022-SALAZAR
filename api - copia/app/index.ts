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

       <select name="select" class="selector">
       <option value="value1"> Datos</option>

  <option value="value1"> Género: ${gender}</option>
  
  <option value="value2">Especie: ${species}</option>

  <option value="value2">Especie: ${status}</option>
  
  </select>

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