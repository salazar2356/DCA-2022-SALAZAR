enum StoriesAttributes {

    usernamep= 'usernamep',
    usernamed= 'usernamed',
    usernamet= 'usernamet',
    usernamec= 'usernamec',
    usernamei= 'usernamei',

}

class MyStories extends HTMLElement{

    usernamep:string= '';
    usernamed:string= '';
    usernamet:string= '';
    usernamec:string= '';
    usernamei:string= '';


    static get observedAttributes(): StoriesAttributes[]{
        return Object.keys(StoriesAttributes) as StoriesAttributes[];
    }

    attributeChangedCallback(prop: StoriesAttributes, _: string, newValue: string): void {
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

        <section>
        
        
        <div class="stories">

        <div class="storie">
        <img src="fede.jpg" height="55px" width="55px">
        <h6>${this.usernamep}</h6>
        </div>

        <div class="storie">
        <img src="nicole.jpg" height="55px" width="55px">
        <h6>${this.usernamed}</h6>
        </div>

        <div class="storie">
        <img src="barbie.jpg" height="55px" width="55px">
        <h6>${this.usernamet}</h6>
        </div>

        <div class="storie">
        <img src="ana.jpg" height="55px" width="55px">
        <h6>${this.usernamec}</h6>
        </div>

        <div class="storie">
        <img src="fit.jpg" height="55px" width="55px">
        <h6>${this.usernamei}</h6>
        </div>



        </div>


        </section>
        
        `;

        }
    }

customElements.define("my-stories", MyStories);
export default MyStories;