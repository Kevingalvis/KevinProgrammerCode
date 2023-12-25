export class barraRedes extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }


    connectedCallback(){
        this.shadowRoot.innerHTML = `
            <style>
                .main-div-redes{
                    width: 100%;
                    height: 2.925rem; /*50px*/
                    display: flex;
                    justify-content: center;
                    position: sticky;
                    top: 110px;
                    z-index: 99;
                }
                
                .redes{
                    width: 25%;
                    height: 100%;
                    display: flex;
                    padding:5px;
                    justify-items: center;
                    justify-content: space-evenly;
                }
                .redes a{
                    cursor: pointer;
                }
                .redes a img{
                
                    height: 70%;
                }
            
            </style>

            <div class="main-div-redes ">
                <nav class="redes">
                    <a href="https://wa.link/det6il" target="_blank" ><img src="assets/logo/WhatsApp.svg" alt="WhatsApp" ></a>
                    <a href="https://www.facebook.com/developerkevin" target="_blank" ><img src="assets/logo/Facebook.svg" /></a>
                    <a href="https://www.instagram.com/_kevin.galvis_/" target="_blank" ><img src="assets/logo/Instagram.svg" /></a>
                   
                </nav>
        
            </div>
       
        `;
    
    }

}

window.customElements.define("barra-redes", barraRedes);
