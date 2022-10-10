 export class Home extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode:'open'});

    }

    connectedCallback(){
        this.render();
    }
         
            

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="./estilos.css">

        <section class="contenidouno">
        

        <div class="header">
        <div class="instagram">
        
        <img src="instagram.png" height="30px" width="70px">
        <img src="flecha.png" height="10px" width="10px">
        </div>

        <div class="buscador">
        <input type="text" placeholder="Busca" id="buscar"
        </div>

        
        </div>
        <div class="iconos">
        <img src="home.png" height="25px" width="25px">
        <img src="mensaje.png" height="25px" width="25px">
        <img src="mas.png" height="25px" width="25px">
        <img src="explore.png" height="25px" width="25px">
        <img src="like.png" height="25px" width="25px">
        <div class=isaimg>
        <img src="isa.jpg" height="25px" width="25px">
        </div>

        </div>


        </section>

        <section class="contenidodos">

<div class="izqysug">

        <div class="izquierda">

        <div class="stories">

        <div class="storie">
        <img src="fede.jpg" height="55px" width="55px">
        <h6> Fede_Vigevani</h6>
        </div>

        <div class="storie">
        <img src="nicole.jpg" height="55px" width="55px">
        <h6>Nicole García</h6>
        </div>

        <div class="storie">
        <img src="barbie.jpg" height="55px" width="55px">
        <h6>BarbieMoto Mami</h6>
        </div>

        <div class="storie">
        <img src="ana.jpg" height="55px" width="55px">
        <h6>Ana Sofia</h6>
        </div>

        <div class="storie">
        <img src="fit.jpg" height="55px" width="55px">
        <h6>Hurtado_fit</h6>
        </div>


        </div>

        <div class="post">
        <div class="perfil">
        <div class="isa">
        <img src="isa.jpg" height="50" width="50">
        </div>
        <h4>Isa_Salazar0910</h4>
        </div>
        <img src="isaa.png" height="480" width="415px">
       
        <div class="ambos">

        <div class="iconos">
        <img src="like.png" height="25px" width="25px">
        <img src="comentario.png" height="25px" width="25px">
        <img src="send.png" height="25px" width="25px">
        </div>

        <div class="guardar">
        <img src="save.png" height="25px" width="25px">
        </div>

        </div>


        
        <div class="isa">
        <h7>Isa_Salazar0910</h7>
        </div>


        <div class="botton-post"
        <h7>93 Likes</h7>
        <h7>93 IsaSalazar0910 Happier</h7>

        
        <h7> Ver los 10 comentarios</h7>
        <p> HACE UNA HORA</p>

        </div>



        </div>


 </div>
        <div class="sugeridos">

        <div class="top-referencias">
        
        <div class="isa">
        <img src="isa.jpg" height="50" width="50">
        </div>
        <h5>IsaSalazar1810</h5>
        
        </div>
        <h6>Sugerencias para ti</h6>

        <div class="referencias">
        

       
        <div class="referencia">
        <img src="cbum.jpg" height="50" width="50">
        <h6>Cbum</h6>
        </div>

        <div class="referencia">
        <img src="elmuraldis.jpg" height="50" width="50">
        <h6>ElMuralDIS</h6>
        </div>

        <div class="referencia">
        <img src="salazar.jpg" height="50" width="50">
        <h6>Salazar1810</h6>
        </div>


        
        

        </div>

        
</div>       

        </section>

       

       
 


       
        
        `

        ;
    }
        
}


customElements.define("app-home", Home);
