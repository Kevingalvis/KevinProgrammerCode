/** creamos switch de las template */
import { selectPerfil } from "../../views/perfil.js";
import { selectProjecto } from "../../views/projectos.js";


const $linksNav = document.querySelectorAll('#linksNav a')
const $contTemplate = document.getElementById('app');
const $modal = document.getElementById('modal');
const $modalBtnCancelar = document.getElementById('form-btn-cancelar');

export function switchTemplate (){
    $linksNav.forEach((enlaces) =>{
        enlaces.addEventListener('click',(e) =>{
            let keyTemplate =  e.target.textContent;
            console.log(keyTemplate);
    
            switch (keyTemplate) {
                case 'Perfil':
                    $contTemplate.innerHTML = `<template-perfil></template-perfil>`
                    break;
                case 'Home':
                    $contTemplate.innerHTML = `<template-home></template-home>`
                    break;
               
                case 'Projectos':
                    $contTemplate.innerHTML = `<template-projecto></template-projecto>`
                    break;
                case 'Contactame':
                    
                    $modal.classList.remove("modal-disabled");
                    break;
            
                default:
                    break;
            }
            /** ventana modal */

    
        });
    });

}
$modalBtnCancelar.addEventListener('click',()=>{
    $modal.classList.add("modal-disabled");
})

switchTemplate();



