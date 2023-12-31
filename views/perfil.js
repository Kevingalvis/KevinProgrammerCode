export class selectPerfil extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
            <link rel='stylesheet' href='https://unpkg.com/emoji.css/dist/emoji.min.css'>
            <style>
                
                .cont-perfil{
                    width:100%;
                    height:auto;
                    padding-bottom:50px;
                   
                  
                
                }

                .art-perfil{
                    width:90%;
                    height:auto;
                    display:flex;
                    justify-content:space-around;
                    height:auto;
                    margin: 20px auto;
                    background: #F6F6F6;
                    border-radius:55px;
                    box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.75);
                }

                .perfil-acerca{
                    width:50%;
                    height:auto;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    
                    position:relative;
                    left:150px;
                   
                }
                .perfil-acerca h2{
                    text-align:center;
                    font-size: 2em;
                    font-family:"arial";
                    
                }
                .perfil-acerca p{
                    text-align:center;
                    font-size: 1.1em;
                    font-family:"arial";
                    line-height:1.5em;
                }

               .perfil-datos{
                    width:45%;
                    height:auto;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                   
               }

              
              

               .img-datos{
                    width:60%;
                    height:80%;
                    position: relative;
                   
                   
               }
               .img-datos span{
                    width:100%;
                    background: #0AC4FF;
                    position: absolute;
                    bottom:1em;
                    left:0;
                    font-size:1.5em;
                    text-align:center;
                    border-radius:10px;
                    box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.75);
                    
               }
                .img-datos img{
                    width:100%;
                    height:100%;
                    filter: drop-shadow(5px 5px 10px #000000);
                    
                }
                

                .art-skills{
                    width:90%;
                    display: flex;
                    margin:0 auto;
                }
                .skills{
                    width:70%;
                  
                   
                    display:flex;
                    justify-content:space-around;
                    flex-wrap:wrap;
                   
                
                }
               
                .card-skills{
                    width:45%;
                  
                    background: #fff;
                    border-radius: 25px;
                    margin: 10px 10px;
                    overflow:hidden;
                    filter: drop-shadow(5px 5px 5px #000000);

                    
                }
                .card-header{
                    width:100%;
                    height:20%;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    background:#009EC0;
                    text-align:center;
                    font: 12px 'trebuchet MS', 'lucida sans';
                }
                .estudio{
                    position:relative;
                    top:15px
                }
                .p-estudio{
                    font-size:1.2em;
                }
                .card-body{
                    width:90%;
                    height:auto;
                    padding:15px;
                    display:flex;
                    justify-content:center;
                    flex-wrap:wrap;

                }
                .skills-v1{
                    width:70%;
                }

                #lista5 {
                    counter-reset: li; 
                    font: 12px 'trebuchet MS', 'lucida sans';
                    font-weight: bold;
                    margin-bottom: 4em;
                    text-align:center;
                   
                }
                #lista5 ol {
                    margin: 0 0 0 2em; 
                }

                #lista5 {
                    list-style-type: none;
                    
                     
                    margin: 0;
                    margin-left: 1em;
                    padding: 0;
                     
                   
                }

                #lista5 > li{
                    position: relative;
                    margin-bottom: 1.5em;
                    padding: 1.5em;
                    background-color: #eaeaea;
                }

                .mini-card{
                    width:25%;
                    text-align:center;
                    font: 15px 'trebuchet MS', 'lucida sans';
                    font-weight: bold;
                    
                }
                .mini-card img{
                    width:25%;
                    text-align:center;
                    filter: drop-shadow(5px 5px 5px #000000);
                    
                }

                .skills2{
                    width:50%;
                    height:auto;
                    display:flex;
                    justify-content:space-around;
                    flex-wrap:wrap;
                }
                .skills-card2{
                    width:100%;
                    height:auto;
                    background: #fff;
                    border-radius: 25px;
                    margin: 10px 10px;
                    overflow:hidden;
                    filter: drop-shadow(5px 5px 5px #000000);
                }

                .card-estudio{
                    width:100%;
                    height:25%;
                    margin: 5px 0;
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:center;
                   
                }         

                .card-estudio img{
                    width:15%;
                    filter: drop-shadow(5px 5px 5px #000000);
                }
                .card-estudio h2{
                    width:70%;
                    text-align:center;
                    font: 15px 'trebuchet MS', 'lucida sans';


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
                       
                        <figure class="img-datos">
                             <img src="assets/logo/KevinGalvis.png" />   
                             <span>Programador Junior<span>
                        </figure>

                    </div>
                
                </article>

                <article class="art-skills">
                    <div class="skills">
                        <div class="card-skills">
                            <div class="card-header">
                                <h2>Datos Personales</h2>
                            </div>
                            <div class="card-body">
                                <ol id="lista5">
                                    <li><span class="ec ec-nerd-face"></span>Kevin David Zambrano Galvis</li>
                                    <li><span class="ec ec-mortar-board"></span>Tecnologo En Desarrollo De Softwares</li>
                                    <li><span class="ec ec-city-sunrise"></span>Bogota DC</li>
                                    <li><span class="ec ec-telephone-receiver"></span>3015304944</li>
                                    <li><span class="ec ec-envelope-with-arrow"></span>kevin_david_t@outlook.com</li>
           
                                </ol>
                            </div>
                        </div>

                        <div class="card-skills">
                            <div class="card-header">
                                <h2>Habilidades Personales</h2>
                            </div>
                            <div class="card-body">
                                <ol id="lista5">
                                <li><span class="ec ec-100"></span>Habilidades para resolver problemas</li>
                                    <li><span class="ec ec-busts-in-silhouette"></span>Trabajo En Equipo</li>
                                    <li><span class="ec ec-ear"></span>Escucha Activa</li>
                                    <li><span class="ec ec-memo"></span>Planificación y organización</li>
                                    <li><span class="ec ec-hourglass-flowing-sand"></span>Gestión del tiempo</li>
                                </ol>
                            </div>
                        </div>

                        <div class="card-skills skills-v1">
                            <div class="card-header">
                                <h2>Skills</h2>
                            </div>
                            <div class="card-body">
                                <div class="mini-card">
                                     <img src="assets/logo/Javascript.svg" />
                                     <p>JavaScript</p>   
                                </div>
                                <div class="mini-card">
                                     <img src="assets/logo/Css3.svg" />
                                     <p>Css3/Flexbox</p>   
                                </div>
                                 <div class="mini-card">
                                     <img src="assets/logo/Git.svg" />
                                     <p>Git</p>   
                                </div>
                                <div class="mini-card">
                                     <img src="assets/logo/GitHub.svg" />
                                     <p>GitHub</p>   
                                </div>
                                <div class="mini-card">
                                     <img src="assets/logo/Html5.svg" />
                                     <p>Html5</p>   
                                </div>
                                <div class="mini-card">
                                     <img src="assets/logo/React.svg" />
                                     <p>React</p>   
                                </div>
                                <div class="mini-card">
                                     <img src="assets/logo/Webcomponents.svg" />
                                     <p>web Componets</p>   
                                </div>
                                <div class="mini-card">
                                     <img src="assets/logo/figma-icon.svg" />
                                     <p>Figma</p>   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="skills2">
                         <div class="card-skills skills-card2">
                            <div class="card-header">
                                <h2 class="estudio">Estudios/Cursos Certificados</h2>
                                <p class="p-estudio">Cada Dia siendo mejor </p>
                            </div>
                            <div class="card-body">
                                <div class="card-estudio">
                                    <img src="assets/logo/Sena.svg" />
                                    <h2>Tecnologo En Desarrollo De Software <br> En Proceso</h2>
                                </div>

                                <div class="card-estudio">
                                    <img src="assets/logo/Sena.svg" />
                                    <h2>Tecnico En ProgramacionSoftware<br>2016</h2>
                                </div>
                                <div class="card-estudio">
                                    <img src="assets/logo/linkedin.svg" />
                                    <h2>Scrum Esencial/Avanzado<br>2023</h2>
                                </div>
                                <div class="card-estudio">
                                    <img src="assets/logo/udemy.svg" />
                                    <h2>React<br>2023</h2>
                                </div>
                                <div class="card-estudio">
                                    <img src="assets/logo/udemy.svg" />
                                    <h2>JavaScript<br>2023</h2>
                                </div>
                                <div class="card-estudio">
                                    <img src="assets/logo/udemy.svg" />
                                    <h2>HTML5<br>2023</h2>
                                </div>
                                <div class="card-estudio">
                                    <img src="assets/logo/udemy.svg" />
                                    <h2>Figma Diseño UX/UI<br>2023</h2>
                                </div>
                            </div>
                        </div>
                    
                    </div>



                </article>

              
           </section>
           

           
        
        `;
    }
}

window.customElements.define("template-perfil", selectPerfil);