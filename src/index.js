import './style.css';
import {homepageLoader} from './homep.js';
import {menuPageLoader} from './menup.js';
import {aboutPageLoader} from './aboutp.js';

let contentSection=document.querySelector("#content");

function clearscreen(){
    while (contentSection.hasChildNodes()) {
        contentSection.removeChild(contentSection.firstChild);
      }
      console.log("Is this thing working?")
}
// clearscreen();
// homepageLoader();

let homeBtn=document.querySelector("#homebutton");

homeBtn.addEventListener('click',()=>{
    clearscreen();
    homepageLoader();
})

let menuBtn=document.querySelector("#menubutton");

menuBtn.addEventListener('click',()=>{
    clearscreen();
    menuPageLoader();
})

let aboutBtn=document.querySelector("#aboutbutton");

aboutBtn.addEventListener('click',()=>{
    clearscreen();
    aboutPageLoader();
})

