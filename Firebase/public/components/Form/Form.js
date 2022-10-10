/*El formulario solo pinta las cosas
y dice que hundieron el botón con esta información
*/
export class Form extends HTMLElement {
    constructor() {
        super();
        this.email = "";
        this.password = "";
        this.attachShadow({ mode: 'open' });
    }
    /*Cuando el usuario hace click en el botón
    crea el evento
    Ese evento se estaba llamando "form-fulfiled" y envía la info
    */
    connectedCallback() {
        var _a, _b, _c;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
            const event = new CustomEvent("form-fulfiled", {
                detail: { email: this.email, password: this.password },
                composed: true,
            });
            this.dispatchEvent(event);
        });
        const emailInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('input[type="email"]');
        const passwordInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('input[type="password"]');
        emailInput === null || emailInput === void 0 ? void 0 : emailInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.email = value;
        });
        passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.addEventListener("change", (evt) => {
            const value = evt.target.value || "";
            this.password = value;
        });
    }
    /*  Hacemos los inputs tipo = x,
    le ponemos el addeventlistener pero ahora es change que es cuando cambian el texto que está dentro del input,
    eso pasa en el callback un EVENTO
    ese evento tiene una propiedad target que debería tener una propiedad value que es lo que
    el usuario escribió en el input */
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="./estilos.css">
        <article>

        <div class="form">

         <div class="contenido">

        <h3>Instagram</h3>
        <h5>Ingrese aquí</h5>
        
        <div>
    
            <label>Email</label>
            <input type="email">

        </div>

        <div>
            <label>Contraseña</label>
            <input type="password">
        </div>

        <button class="boton" type="submint">Enviar</submint>
        </div>

        </div>


        </article>`;
    }
}
customElements.define("app-form", Form);
