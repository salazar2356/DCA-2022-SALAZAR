import { queryUser } from "../../services/db.js";
export class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
        const form = this.shadowRoot.querySelector("app-form");
        form.addEventListener("form-fulfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            queryUser({ email, password }).then(value => {
                if (value) {
                    const event = new CustomEvent("login-success", {
                        composed: true,
                    });
                    console.log(event);
                    this.dispatchEvent(event);
                }
                else {
                    alert("Usuario no registrado.Revise los datos ingresados");
                }
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <section>

       

        <app-form></app-form>

       </section>
        `;
    }
}
customElements.define("app-login", Login);
