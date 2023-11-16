export class barraRedes extends HTMLElement{
    constructor(){
        super();
    }


    connectedCallback(){
        this.innerHTML = `
            <div class="main-div-redes ">
                <nav class="redes">
                    <a><img src="../../assets/logo/WhatsApp.svg" /></a>
                    <a><img src="../../assets/logo/Facebook.svg" /></a>
                    <a><img src="../../assets/logo/Instagram.svg" /></a>
                   
                </nav>
        
            </div>
       
       
        `;
    }
}