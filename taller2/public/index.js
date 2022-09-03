import './components/index.js'
import data from './components/data.js';



class AppContainer extends HTMLElement{
    constructor(){
    super();
    this.attachShadow({mode: 'open'})
    console.log(data.length);
    }
    connectedCallback(){
        this.render();
    }

    render() {
        const compts = data.map(({id, name, img, username, likes, comentarios}) => `<profile-card name = ${name} id=${id} img= ${img} username=${username} likes= ${likes} comentarios=${comentarios}></profile-card>`)
        
        this.shadowRoot.innerHTML = compts.join("")
    }
}

customElements.define('app-container',AppContainer)
