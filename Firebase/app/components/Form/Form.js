"use strict";
class Form extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <article>
        <input type="text"></input>
        </article>`;
    }
}
customElements.define("app-form", Form);
