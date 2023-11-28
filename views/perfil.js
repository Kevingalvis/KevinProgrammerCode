export class selectPerfil extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
            <style>
                .cont-perfil{
                    width:100%;
                    height:auto;
                    background: #050;
                
                }

                .art-perfil{
                    width:90%;
                    display:flex;
                    justify-content:space-around;
                    height:auto;
                    background: #090;
                    margin: 0 auto;
                }

                .perfil-acerca{
                    width:45%;
                    height:auto;
                    background: #000070;
                }
                .perfil-acerca h2{
                    text-align:center;
                    font-size: 3em;
                    font-family:"arial";
                }
                .perfil-acerca p{
                    text-align:center;
                    font-size: 2em;
                    font-family:"arial";
                }

               .perfil-datos{
                    width:45%;
                    height:auto;
                    display:flex;
                    justify-content:space-around;
                    background: #900070;
               }
               .perfil-datos ul{
                    width:50%;
                    height:auto;
                    background: #995070;
               }

               .img-datos{
                width:50%;
                height:auto;
                background: #995970;
               }
                .img-datos img{
                    width:100%;
                }
         
               
               

            </style>
            

           <section class="cont-perfil">
                <article class="art-perfil">
                    <div class="perfil-acerca">
                        <h2>¿Acerca De Mi ?</h2>
                        <p>
                            Joven Apasionado por el mundo de la tecnología de la información
                            en busqueda de experiencias profesionales  en la rama del desarrollo
                            de software, principalmente en las tecnologías Web.
                        </p>
                    </div>

                    <div class="perfil-datos">
                        <ul>
                            <li>Kevin David Zambrano Galvis</li>
                            <li>Kevin David Zambrano Galvis</li>
                            <li>Kevin David Zambrano Galvis</li>
                            <li>Kevin David Zambrano Galvis</li>
                            <li>Kevin David Zambrano Galvis</li>
                            <li>Kevin David Zambrano Galvis</li>
                        </ul>
                        <figure class="img-datos">
                             <img src="../../assets/logo/KevinGalvis.png" />   
                        </figure>
                    </div>
                
                </article>
           </section>
        
        `;
    }
}

window.customElements.define("template-perfil", selectPerfil);