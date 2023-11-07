/** creamos una clase */

class holaMundo extends HTMLElement{
    constructor(){
        super();
    }

    /** */
    connectedCallback(){
      
        this.innerHTML = ` 
            <nav class="nav">
                <a href="">link 1</a>
                <a href="">link 1</a>
                <a href="">link 1</a>
                <a href="">link 1</a>
                <a href="">link 1</a>
            </nav>
            
        `;
    }
}

window.customElements.define("hola-mundo", holaMundo);