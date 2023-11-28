/** creamos switch de las template */
import { selectPerfil } from "../../views/perfil.js";


const $linksNav = document.querySelectorAll('#linksNav a')
const $contTemplate = document.getElementById('app');

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
            
                default:
                    break;
            }
    
        });
    });

}

switchTemplate();

