import './style.css';
import {homepageLoader} from './homep.js'

let contentSection=document.querySelector("#content");

function clearscreen(){
    while (contentSection.hasChildNodes()) {
        contentSection.removeChild(contentSection.firstChild);
      }
      console.log("Is this thing working?")
}
// clearscreen();
homepageLoader();



// contentSection.appendChild(mycrab);

