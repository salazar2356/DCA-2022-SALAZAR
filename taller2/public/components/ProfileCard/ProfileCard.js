//componente//

class ProfileCard extends HTMLElement{
    static get observedAttributes(){
        return['id','name', 'img', 'username', 'likes', 'comentarios']
    }
    constructor(){
    super();
    this.attachShadow({mode: 'open'});
    }

    attributeChangedCallback(prop, oldValue, newValue){
        this[prop] = newValue;
        this.render()
    }

    connectedCallback(){
        this.render()
        
    }


    render() {
        this.shadowRoot.innerHTML = `
        <link rel ="stylesheet" href="./components/ProfileCard/styles.css">
        
        <div class="general">
        <div class="targeta">
         <div class="top">
         <img src="usuario.png" class="user">
        <h4> ${this.name}</h4>
        </div>

        <div>  

        <img src= "${this.img}" class="us">

        </div>  

    <div class="iconos">
       <div class="btns">
       <add-favorites></add-favorites>

        <img src="charlar.png" class="mensaje">
        <img src="enviar.png" class="enviar">
        
        </div>
        <div class="aparte">
        <img src="guardar.png" class="guardar">
        </div>
        
        </div>
        <h4>${this.username}</h4>
        <h4>${this.likes} Likes</h4>
        <h4>${this.comentarios} Comments </h4>
        </div>

        </div>
        `;
    }
}

customElements.define('profile-card', ProfileCard)
export default ProfileCard