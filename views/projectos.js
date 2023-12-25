export class selectProjecto extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
      
        this.shadowRoot.innerHTML = `

            <style> 
                .sect-projecto{
                    width:100%;
                    height:auto;
                   
                }
                .art-projecto{
                    width:80%;
                    height:auto;
                    margin: 0 auto;
                    
                }
                .cont-projecto{
                    width:100%;
                    height:auto;
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:center;
                    align-items:center;
                    margin-top:20px;
                    margin-bottom:20px;
                    
                }
                .card-img{
                    width:45%;
                    height:100%;
                    background:#fff;
                    z-index:80;
                    
                   
                }
                .card-img img{
                    width:100%;
                    height:100%;
                    box-shadow: 2px 10px 5px 0px rgba(0,0,0,0.75);
                }

            
                iframe{
                    width:100%;
                    height:350px;
                    box-shadow: 2px 10px 5px 0px rgba(0,0,0,0.75);
                    
                }

                .card-text{
                    width:50%;
                    height:100%;
                    position:relative;
                    font-family:arial;
                    padding:15px;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    text-align:center;
                    border-radius:25px;
                    background-image: linear-gradient(
                        45deg,
                        hsl(201deg 100% 50%) 0%,
                        hsl(200deg 99% 49%) 6%,
                        hsl(199deg 98% 49%) 13%,
                        hsl(198deg 98% 49%) 20%,
                        hsl(197deg 97% 49%) 26%,
                        hsl(196deg 96% 48%) 33%,
                        hsl(195deg 95% 48%) 40%,
                        hsl(194deg 94% 48%) 46%,
                        hsl(193deg 93% 48%) 53%,
                        hsl(192deg 93% 48%) 60%,
                        hsl(191deg 92% 47%) 66%,
                        hsl(190deg 92% 47%) 73%,
                        hsl(189deg 91% 47%) 80%,
                        hsl(188deg 90% 46%) 87%,
                        hsl(187deg 89% 46%) 93%,
                        hsl(186deg 88% 46%) 100%
                      );
                    box-shadow: 2px 10px 5px 0px rgba(0,0,0,0.75);
                
                   

                }

                .decoracion-text{
                    width:250px;
                    height:50px;
                    display:block-line;
                    position:absolute;
                    right:-50px;
                    border-radius:15px;
                    transform: rotate(40deg);
                    background-image: linear-gradient(
                            45deg,
                            hsl(201deg 95% 54%) 0%,
                            hsl(200deg 93% 53%) 6%,
                            hsl(199deg 89% 52%) 13%,
                            hsl(198deg 87% 50%) 20%,
                            hsl(197deg 84% 49%) 26%,
                            hsl(196deg 81% 48%) 33%,
                            hsl(195deg 78% 47%) 40%,
                            hsl(194deg 76% 46%) 46%,
                            hsl(193deg 74% 45%) 53%,
                            hsl(192deg 70% 43%) 60%,
                            hsl(191deg 67% 42%) 66%,
                            hsl(190deg 65% 41%) 73%,
                            hsl(189deg 62% 40%) 80%,
                            hsl(188deg 60% 38%) 87%,
                            hsl(187deg 57% 37%) 93%,
                            hsl(186deg 54% 36%) 100%
                            );
                            box-shadow: 2px 10px 5px 0px rgba(0,0,0,0.75);

                }

                .d-dos{
                    left:-50px;
                    transform: rotate(-40deg);
                }
               
                .card-text span{
                    
                    display: block;
                    width:40%;
                    background-color:#09677B;
                    padding:10px;
                    border-radius:15px;
                    color:#fff;
                    letter-spacing:1px;
                    font-size:0.9em;
                    margin:10px;
                }
                .card-text h2{
                    
                   
                    width:60%;
                    letter-spacing:1px;
                    font-size:0.9em;
                    margin:15px;
                }
                .card-text a{
                    
                   
                    width:80%;
                    letter-spacing:1px;
                    font-size:0.9em;
                    padding:8px;
                    margin:15px;
                    color:#000;
                    border-radius:15px;
                    background-color:#fff;
                    cursor: pointer;
                    box-shadow: 2px 10px 5px 0px rgba(0,0,0,0.75);
                   
                }

            </style>

            
            
            <section class="sect-projecto">
                <article class="art-projecto">
                    <div class="cont-projecto">
                        <div class="card-img">
                            <iframe src="https://kevingalvis.github.io/RelojeriaCatalogo/" class="frame"></iframe>
                        </div>

                        <div class="card-text">
                            <div Class="decoracion-text">
                                <h2>Projecto 1 </h2>
                            </div>
                            <span>Projecto Name</span>
                            <h2>Night Clock Relojeria Joyeria</h2>
                            <span>Descripcion</span>
                            <h2>Projecto Basico donde trabe conceptos basicos de Html5, Css3 Flex-Box y Javascript y diseño UX / UI adicionando tambien el diseño responsive</h2>
                            <span>Tecnologia</span>
                            <h2>JavaScript Html5 Css3 Flexbox</h2>
                            <span>Link GitHub</span>
                            <a href="https://kevingalvis.github.io/RelojeriaCatalogo/">https://kevingalvis.github.io/RelojeriaCatalogo/ </a>

                            
                        </div>
                    <div>

                    <div class="cont-projecto">
                    
                        <div class="card-text">
                            <div Class="decoracion-text d-dos">
                                <h2>Projecto 2</h2>
                            </div>
                            <span>Projecto Name</span>
                            <h2>Podomoro Online</h2>
                            <span>Descripcion</span>
                            <h2>Projecto Basico en donde utilizamos los conceptos de los SetTimeOut y IntervalSet para el podomoro, adicionar, utilizamos form para la selecion de los tiempos, y manejo los arrays con combinnacion de los objectos para guardar la informacion y mostrarla en una lista que contiene dos botones inicia y eliminar</h2>
                            <span>Tecnologia</span>
                            <h2>JavaScript Html5 Css3 Flexbox</h2>
                            <span>Link GitHub</span>
                            <a href="https://kevingalvis.github.io/PodomoroOnline/">https://kevingalvis.github.io/PodomoroOnline/</a>
                        
                        </div>
                        <div class="card-img">
                            <img src="assets/logo/noDisponibleMovil.svg" />
                        </div>
                    <div>

                    <div class="cont-projecto">
                    <div class="card-img">
                    <img src="assets/logo/noDisponibleMovil2.svg" />
                    </div>

                    <div class="card-text">
                        <div Class="decoracion-text">
                            <h2>Projecto 3 </h2>
                        </div>
                        <span>Projecto Name</span>
                        <h2>Gestos De Entregas Activos</h2>
                        <span>Descripcion</span>
                        <h2>Projecto pensado en la entrega de activos en donde tenemos un select con los Owner de activo y un formulario tanto para el cliente que recibe como los activos que van a tener asignados , agregamos una tabla oculta en donde se visualiza todos los activos asignados con un buscador que filtra por Serial de cada equipo o activo</h2>
                        <span>Tecnologia</span>
                        <h2>JavaScript Html5 Css3 Flexbox</h2>
                        <span>Link GitHub</span>
                        <a href="https://kevingalvis.github.io/RelojeriaCatalogo/">https://kevingalvis.github.io/RelojeriaCatalogo/</a>
                    </div>
                <div>
                
                </article>
            </section>
        
        
        `;
    }
}

window.customElements.define("template-projecto", selectProjecto);
