import {barraNavegacion} from "./component/barraNavegacion.js";
import {barraRedes} from "./component/barra_redes_sociales.js";

/** ejecucion del componente */
window.customElements.define("barra-navegacion", barraNavegacion);
window.customElements.define("barra-redes", barraRedes);

/** variables */
const $btnTheme = document.querySelectorAll('#navTheme a'); /** Variable para el modo oscuro y dia */

/** esto hace que aparezca el modo oscuro y dia */
$btnTheme.forEach((btnTheme) => {
    btnTheme.addEventListener('click', (e) =>{
        /** obtenemos el valor id de los iconos que van hacer las dos llaves */
        let themeKey = e.target.id;
        switch (themeKey) {
            /** lo que hacemos es agregar y quitar la clase (navTheme_disabled), que es la que desactiva el icono para que aparezca el otro
             * en esta primera parte lo que hace es quitar el icono (SUN) para activar el modo oscuro
            */
            case 'icon-theme-moon':
                document.getElementById('switch-theme-sun').classList.toggle('navTheme_disabled');
                document.getElementById('switch-theme').classList.remove('navTheme_disabled');
                document.body.classList.remove('dark');
                break;
            
            case 'icon-theme-sun':
                
            /** lo que hacemos es agregar y quitar la clase (navTheme_disabled), que es la que desactiva el icono para que aparezca el otro
             * en esta primera parte lo que hace es quitar el icono (Moon) para activar el modo claro
            */
                document.getElementById('switch-theme').classList.toggle('navTheme_disabled');
                document.getElementById('switch-theme-sun').classList.remove('navTheme_disabled');
                document.body.classList.toggle('dark');
            break;
        
            default:
                break;
        }


    });
});




