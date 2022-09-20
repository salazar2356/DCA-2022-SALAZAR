enum ReferenciasAttributes {

    username= 'username',
    useruno='useruno',
    userdos='userdos',
    usertres='usertres',
    usercuatro='usercuatro',
    usercinco='usercinco',

}


class MisReferencias extends HTMLElement{
    username :string= '';
    useruno :string='';
    userdos :string='';
    usertres :string='';
    usercuatro :string='';
    usercinco :string='';


    static get observedAttributes(): ReferenciasAttributes[]{
        return Object.keys(ReferenciasAttributes) as ReferenciasAttributes[];
    }

    attributeChangedCallback(prop: ReferenciasAttributes, _: string, newValue: string): void {
        this[prop] = newValue;

    }

    constructor(){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback() : void{
        this.render();

    }

    render(): void {
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./estilos.css">

        <div class="sugeridos">

        <div class="top-referencias">
        
        <div class="isa">
        <img src="isa.jpg" height="50" width="50">
        </div>
        <h5>${this.username}</h5>
        <h5>Isa</h5>
        </div>
        <h6>Sugerencias para ti</h6>

        <div class="referencias">
        

       
        <div class="referencia">
        <img src="cbum.jpg" height="50" width="50">
        <h6>${this.usertres}</h6>
        </div>

        <div class="referencia">
        <img src="elmuraldis.jpg" height="50" width="50">
        <h6>${this.usercuatro}</h6>
        </div>

        <div class="referencia">
        <img src="salazar.jpg" height="50" width="50">
        <h6>${this.usercinco}</h6>
        </div>


        </div>

        </div>
        
        `;

        }
    }

customElements.define("mis-referencias", MisReferencias);
export default MisReferencias;