var StoriesAttributes;
(function (StoriesAttributes) {
    StoriesAttributes["usernamep"] = "usernamep";
    StoriesAttributes["usernamed"] = "usernamed";
    StoriesAttributes["usernamet"] = "usernamet";
    StoriesAttributes["usernamec"] = "usernamec";
    StoriesAttributes["usernamei"] = "usernamei";
})(StoriesAttributes || (StoriesAttributes = {}));
class MyStories extends HTMLElement {
    constructor() {
        super();
        this.usernamep = '';
        this.usernamed = '';
        this.usernamet = '';
        this.usernamec = '';
        this.usernamei = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() {
        return Object.keys(StoriesAttributes);
    }
    attributeChangedCallback(prop, _, newValue) {
        this[prop] = newValue;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
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
