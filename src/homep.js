import crab from './pics/homepage/crabhome.png'
const mycrab=new Image();
mycrab.src=crab;

import logo from './pics/homepage/logo.png'
const myLogo=new Image();
myLogo.src=logo;

import mockt from './pics/homepage/mockt.jpg'
const myMocktail=new Image();
myMocktail.src=mockt;

import resto1 from './pics/homepage/resto1.jpg'
const myResto1=new Image();
myResto1.src=resto1;


const homepageLoader=()=>{
    let contentSection=document.querySelector("#content");

    const headImageDiv=document.createElement("div");
    contentSection.appendChild(headImageDiv).setAttribute("id","headimage");
    document.getElementById("headimage").appendChild(myLogo);

    let divContain=document.createElement("div");
    contentSection.appendChild(divContain);
    divContain.setAttribute("id","divcontainer");
    
    
    const newLayoutDiv0=document.createElement("div");
    divContain.appendChild(newLayoutDiv0).classList.add("homelayout");

    const newTextDiv0=document.createElement("div");
    newLayoutDiv0.appendChild(newTextDiv0).classList.add("hometext");
    const newTitleP0=document.createElement("p");
    newTextDiv0.appendChild(newTitleP0).classList.add("hometitle");
    newTitleP0.innerText=("Unparalleled ambience");
    const newContentP0=document.createElement("p");
    newTextDiv0.appendChild(newContentP0).classList.add("homecontent");
    newContentP0.innerText="Our restaurant immerses you in the beautiful coastal climate of Mangalore. Step into our restaurant to travel to a different reality.";

    const newImageDiv0=document.createElement("div");
    newLayoutDiv0.appendChild(newImageDiv0).classList.add("homeimage");
    newImageDiv0.appendChild(myResto1);



    const newLayoutDiv1=document.createElement("div");
    divContain.appendChild(newLayoutDiv1).classList.add("homelayout");
    newLayoutDiv1.setAttribute("id","midsection");

    const newImageDiv1=document.createElement("div");
    newLayoutDiv1.appendChild(newImageDiv1).classList.add("homeimage");
    newImageDiv1.appendChild(mycrab);

    const newTextDiv1=document.createElement("div");
    newLayoutDiv1.appendChild(newTextDiv1).classList.add("hometext");
    const newTitleP1=document.createElement("p");
    newTextDiv1.appendChild(newTitleP1).classList.add("hometitle");
    newTitleP1.innerText=("Scrumptuous seafood");
    const newContentP1=document.createElement("p");
    newTextDiv1.appendChild(newContentP1).classList.add("homecontent");
    newContentP1.innerText="Partake in the delectable taste of coastal Karnataka cuisine. Delight your taste-buds with our wide variety of signature dishes.";



    const newLayoutDiv2=document.createElement("div");
    divContain.appendChild(newLayoutDiv2).classList.add("homelayout");

    const newTextDiv2=document.createElement("div");
    newLayoutDiv2.appendChild(newTextDiv2).classList.add("hometext");
    const newTitleP2=document.createElement("p");
    newTextDiv2.appendChild(newTitleP2).classList.add("hometitle");
    newTitleP2.innerText=("Classy Bar");
    const newContentP2=document.createElement("p");
    newTextDiv2.appendChild(newContentP2).classList.add("homecontent");
    newContentP2.innerText="Our restaurant immerses you in the beautiful coastal climate of Mangalore. Step into our restaurant to travel to a different reality.";

    const newImageDiv2=document.createElement("div");
    newLayoutDiv2.appendChild(newImageDiv2).classList.add("homeimage");
    newImageDiv2.appendChild(myMocktail);
 
    

}

export {homepageLoader};