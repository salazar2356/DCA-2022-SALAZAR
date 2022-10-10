import { addUser } from "../../services/db.js";


/*Lo que hace con la 
información del formulario
*/ 
export class Register extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode:'open'});

    }

    connectedCallback(){
        this.render();

        const form = this.shadowRoot.querySelector("app-form"); 
        form.addEventListener("form-fulfiled", (evt) => {
             const email = evt.detail.email;
            const password = evt.detail.password;
            
            addUser({email, password});

            //queryUser({email, password});
        
    });
} 

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <section>

        <h1>Este es el Registro</h1>

        <app-form></app-form>

       </section>
        `
        ;
    }
        
}


customElements.define("app-register", Register);
