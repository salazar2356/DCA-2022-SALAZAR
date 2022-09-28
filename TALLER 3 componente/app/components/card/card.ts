/*COMPONENTE CON PROPS QUE EMITE UN EVENTO DESDE UN BOTÓN*/
enum MyPostAttributes{
    titulo = 'titulo',
    descripcion =  'descripcion',

}

enum CardBookedEvents {
    reservado = "reservado"


}

 
class MyPost extends HTMLElement{
    titulo = ''; 
    descripcion =  '';

static get observedAttributes(): MyPostAttributes []{
    return Object.keys(MyPostAttributes) as MyPostAttributes[];
}

attributeChangedCallback(prop: MyPostAttributes , _:string, newValue: string): void {
    this[prop] = newValue;

}
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.handleClick = this.handleClick.bind(this);
    }

    connectedCallback() :void {
        this.mount();
    }

    mount(): void {
        this.render();
        this.addListeners();

    }

    handleClick(): void {
        const eventName = 'reservado';
        const event: CustomEvent = new CustomEvent(eventName,{
            detail: {
                titulo: this.titulo
            },
            composed: true
        });
        this.dispatchEvent(event);

    }
      

    

    addListeners(): void {

        const btn = this.shadowRoot?.querySelector("button");
        btn?.addEventListener('click',this.handleClick);

    }
    render(): void{
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML =` 


        <section>
        
        <h4>${this.titulo}</h4>
        <h4>${this.descripcion}</h4>
        <button>Reservar</button>

        </section>
        
        `;

    }
}

customElements.define("my-post", MyPost)
export default MyPost;