class AddFavorites extends HTMLElement{
    constructor(){
    super();
    this.attachShadow({mode: 'open'})
    
    }
//Base dentro del componente
//Se diferencia en el renderizado, se crea el botón

    connectedCallback(){
        this.shadowRoot.innerHTML =  `
        <button class="boton"><img src= "like.png" class="like" width="29px" height="29px" ></button>
        `;
        const btn = this.shadowRoot.querySelector("button");
        btn.addEventListener('click', () => {
            console.log('like');
        })
    }

}

customElements.define('add-favorites', AddFavorites)
