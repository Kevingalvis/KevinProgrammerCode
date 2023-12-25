export class barraNavegacion extends HTMLElement{
    constructor(){
        super();
        
    }

    connectedCallback(){
        this.innerHTML = `
        <style>
            .mainHeader{
                width: 100%;
                height: 6.5rem;
                background: #fff;
                position: sticky;
                top: 0;
                border-bottom: 3px var(--color-blue) solid;
                z-index: 90;
            }
            .mainNav{
                width: 90%;
                height: 100%;
                margin: 0 auto;
                display: flex;
            }
            .navLogo{
                width: 25%;
                height: 100%;
             
                line-height: 8.975rem; /*110px*/
            }
            .navLogo img{
                width: 100%;
                height: 50%;
            
            }

            .navLinks{
                width: 55%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
          
            }

            .navLinks a{
                padding: 1rem;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: bold;
                color: var(--color-dark-light);
                text-decoration: none;
            }

            .navLinks a:active{
                color: rebeccapurple;
            }

            .navLinks a i{
                padding: 1rem;
                
            }

            .navTheme{
                width: 25%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                cursor: pointer;
               
            }

            .navTheme a{
               
                position:   absolute;
            }
            
            .navTheme_disabled{
                display: none;   
            }
        
        
        
        </style>


        <header class="mainHeader">
                <nav class="mainNav">
                    
                    <div class="navLogo">
                        <img src="assets/logo/logoColor.svg" alt="logoColor "/>
                    </div>
                    <div class="navLinks" id="linksNav">
                        <a href="#"><i class="fa-solid fa-house"></i>Home</a>
                        <a href="#"><i class="fa-solid fa-user-tie"></i>Perfil</a>
                        <a href="#"><i class="fa-solid fa-screwdriver-wrench"></i>Projectos</a>
                        <a href="#"><i class="fa-solid fa-envelope"></i>Contactame</a>
                    </div>
                    <div class="navTheme" id="navTheme">
                        <a id="switch-theme" class=""><i class="fa-solid fa-cloud-moon " id="icon-theme-sun"></i></a>
                        <a id="switch-theme-sun" class="navTheme_disabled"><i class="fa-solid fa-cloud-sun" id="icon-theme-moon" style="color:#fff"></i></a>
                    
                    </div>

                </nav>
        </header>

    `;
    
    }
    
    

}


window.customElements.define("barra-navegacion", barraNavegacion);


