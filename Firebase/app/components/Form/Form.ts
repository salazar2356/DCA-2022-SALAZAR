/*El formulario solo pinta las cosas
y dice que hundieron el botón con esta información
*/ 


export class Form extends HTMLElement{

    email ="";
    password= "";
     
    constructor(){
        super();
        this.attachShadow({mode:'open'});

    }

    /*Cuando el usuario hace click en el botón
    crea el evento
    Ese evento se estaba llamando "form-fulfiled" y envía la info 
    */ 

    connectedCallback(){
        this.render();



        const btn = this.shadowRoot?.querySelector("button");
        
            btn?.addEventListener("click" , () => {
                const event: CustomEvent<{email: string; password: string}> =
                new CustomEvent("form-fulfiled", {
                    detail: {email: this.email, password: this.password},
                    composed: true,
                });


                this.dispatchEvent(event);
            });

            const emailInput = this.shadowRoot?.querySelector('input[type="email"]');
            const passwordInput = this.shadowRoot?.querySelector('input[type="password"]');

            emailInput?.addEventListener("change", (evt) => {
                const value: string = (evt.target as HTMLInputElement). value || "";
                this.email = value;
            });

            passwordInput?.addEventListener("change", (evt) => {
                const value: string =(evt.target as HTMLInputElement). value || "";
                this.password = value;
            });
        }
            

        /*  Hacemos los inputs tipo = x,
        le ponemos el addeventlistener pero ahora es change que es cuando cambian el texto que está dentro del input,
        eso pasa en el callback un EVENTO
        ese evento tiene una propiedad target que debería tener una propiedad value que es lo que
        el usuario escribió en el input */ 

      

    render() {
        if(!this.shadowRoot) return;
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