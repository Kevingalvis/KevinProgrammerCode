

export class selectHome extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
            <style>
                .sect-home{
                    width:100%;
                    height:600px;
                  
                    
                }
                .art-home{
                    width:90%;
                    height:100%;
                    margin: 0 auto;
                    display:flex;
                    flex-direction: column;
                    flex-wrap:wrap;
                    align-items:center;

                    justify-content:center;
                   
                }
                .text-home{
                    width:50%;
                    height:auto;
                    position: relative;
                    left:8em;
                    font-family:"arial";
                    
                    
                }

                .text-home h1{
                    font-size:4em;
                    margin:0;
                }
                .text-home h2{
                    font-size:3em;
                    margin:0;
                    font-weight: 100;

                    
                }
                .text-home h3{
                    font-size:1.5em;
                    margin:0;
                    font-weight: 100;
                }


                .icon-skills{
                    width:50%;
                    height:2.925em;
                    display:flex;
                    align-items:center;
                    background-color: var(--color-blue-sky);
                    position: relative;
                    left:8em;
                }
                .icon-skills img{
                    width:10%;
                    height:90%;
                    filter: drop-shadow(5px 5px 10px #000000);

                    
                }

                .img-home{
                    width:40%;
                    height:100%;
                   
                }
                .img-home img{
                    width:90%;
                    height:100%;
                    filter: drop-shadow(5px 5px 10px #000000);

                }
            </style>
        
        
            <section class="sect-home">
                <article class="art-home">
                    <div class="text-home">
                        <h1>Kevin David Zambrano Galvis</h1>
                        <h2>Programador Junior</h2>
                        <h3>Desarrollador/Diseñador IU/UX Web</h3>
                        
                    
                    </div>
                    <div class="icon-skills">
                        <img src="../../assets/logo/Javascript.svg" />    
                        <img src="../../assets/logo/Webcomponents.svg" />    
                        <img src="../../assets/logo/React.svg" />    
                        <img src="../../assets/logo/Html5.svg" />    
                        <img src="../../assets/logo/Css3.svg" />    
                        <img src="../../assets/logo/GitHub.svg" />    
                        <img src="../../assets/logo/Git.svg" />    
                            
                        
                    </div>

                    <div class="img-home">
                        <img src="../../assets/logo/KevinGalvis.png" />   
                    </div>
                    
                </article>
                
            </section>
        
        
        `;
    }
}

window.customElements.define("template-home", selectHome);
