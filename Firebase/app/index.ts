import "./components/index.js";
import { addUser, queryUser } from "./services/db.js";

enum Screens{
    login,
    register,
    home

}

class AppContainer extends HTMLElement{
    screen: Screens = Screens.login;
    

    constructor(){
        super();
        this.attachShadow({mode:'open'});

    }

    connectedCallback(){
        this.render();
        const login = this.shadowRoot?.querySelector("app-login");
        login?.addEventListener("login-success", () =>{
          
            this.screen = Screens.home;
            this.render();

           
            
        });
    }

    render(){
        if(!this.shadowRoot) return;

        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = "<app-home></app-home>";
                break;

            case Screens.login:
                this.shadowRoot.innerHTML = "<app-login></app-login>";
                break;
            
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>";
                break;
        
            default:
                break;
        }
    }
}

customElements.define("app-container", AppContainer);