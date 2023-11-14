export class barraNavegacion extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
       this.innerHTML = `
        <header class="mainHeader">
            <nav class="mainNav">
                
                <div class="navLogo">
                    <img src="../../assets/logo/logoColor.svg" />
                </div>
                <div class="navLinks" id="y">
                    <a href="https://www.mozilla.com/"><i class="fa-solid fa-user-tie"></i>Perfil</a>
                    <a href="https://www.mozilla.com/"><i class="fa-solid fa-screwdriver-wrench"></i>Projectos</a>
                    <a href="https://www.mozilla.com/"><i class="fa-solid fa-envelope"></i>Contactame</a>
                </div>
                <div class="navTheme" id="navTheme">
                    <a id="switch-theme" class=""><i class="fa-solid fa-cloud-moon" id="icon-theme-sun"></i></a>
                    <a id="switch-theme-sun" class="navTheme_disabled"><i class="fa-solid fa-cloud-sun" id="icon-theme-moon"></i></a>
                  
                </div>

            </nav>
        </header>`;

       
    }
    
    

}

