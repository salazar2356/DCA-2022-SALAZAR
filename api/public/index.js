var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCharacters } from "./services/charactes.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const charactes = yield getCharacters();
            this.render(charactes);
        });
    }
    render(charactes) {
        if (!this.shadowRoot)
            return;
        const personajes = charactes.map(({ id, name, image, gender, species, status }) => `
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
customElements.define('app-container', AppContainer);
