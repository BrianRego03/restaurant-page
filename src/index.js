import './style.css';


let contentSection=document.querySelector("#content");

function clearscreen(){
    while (contentSection.hasChildNodes()) {
        contentSection.removeChild(contentSection.firstChild);
      }
      console.log("Is this thing working?")
}
// clearscreen();



// contentSection.appendChild(mycrab);

