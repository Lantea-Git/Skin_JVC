// ==UserScript==
// @name         Clean_Pub_Risi_JVC
// @namespace    Clean_Pub_Risi_JVC
// @version      7.9.0
// @description  Vire les onglets secondaires dans risibank.
// @author       Atlantis
// @match        *://risibank.fr/embed*
// @grant        none
// @icon         https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/128px/1f7ea.png
// @license      CC0-1.0
// @run-at       document-start
// ==/UserScript==


const style = document.createElement("style");
style.id = 'risiCleanCss';
style.textContent = `

    .risibank-tile-fav {
        display :none;
    }

    .bg-pink-500:not(button) {
        display :none;
    }

    .bg-violet-500:not(button) {
        display :none;
    }

    .risibank-tile > .bg-gradient-to-b, 
    .risibank-tile > .bg-gradient-to-br {
        background-image: none;
    }

    .risibank-tile,
    .risibank-tile-image {
         border-radius : 0.4rem !important
    }

    nav > a[href^="https://discord.com/"],
    nav > a[href^="https://risibank.fr"] {
        display : none;
    }

   .risibank-tile,
   .risibank-tile img {
       transform: none !important;
       translate: none !important;
       rotate: none !important;
       scale: none !important;
       transition: none !important;
       box-shadow: none !important;
   }
`;
document.head.append(style);
