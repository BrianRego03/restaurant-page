import './style.css';
// import crab from './pics/homepage/crabhome.png'

let contentSection=document.querySelector("#content");

function clearscreen(){
    while (contentSection.hasChildNodes()) {
        contentSection.removeChild(contentSection.firstChild);
      }
      console.log("Is this thing working?")
}
// clearscreen();


// const mycrab=new Image();
// mycrab.src=crab;
// contentSection.appendChild(mycrab);

