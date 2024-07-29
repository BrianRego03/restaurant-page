import chicken from "./pics/menupage/chicken.jpg";
import anjal from "./pics/menupage/anjal.jpg";
import thali from "./pics/menupage/thali.jpg";

const menuPageLoader = () => {

    let contentSection = document.querySelector("#content");

    let menuTitleDiv = document.createElement("div");
    contentSection.appendChild(menuTitleDiv).setAttribute("id", "menuTitle");
    menuTitleDiv.innerText = "Menu";

    let secondTitleDiv = document.createElement("div");
    contentSection.appendChild(secondTitleDiv).setAttribute("id", "secondTitle");
    secondTitleDiv.innerText = "Our signature Dishes";

    

    let firstMenuItem = document.createElement("div");
    contentSection.appendChild(firstMenuItem).classList.add("menuItem");
    let firstItemTitle = document.createElement("div");
    firstMenuItem.appendChild(firstItemTitle).classList.add("hometitle");
    firstItemTitle.innerText='Chicken Ghee Roast';
    let firstItemImage = document.createElement("img");
    firstMenuItem.appendChild(firstItemImage).classList.add("menuImage");
    firstItemImage.src=chicken;


    let secondMenuItem = document.createElement("div");
    contentSection.appendChild(secondMenuItem).classList.add("menuItem");
    let secondItemTitle = document.createElement("div");
    secondMenuItem.appendChild(secondItemTitle).classList.add("hometitle");
    secondItemTitle.innerText='Anjal fry';
    let secondItemImage = document.createElement("img");
    secondMenuItem.appendChild(secondItemImage).classList.add("menuImage");
    secondItemImage.src=anjal;



    let thirdMenuItem = document.createElement("div");
    contentSection.appendChild(thirdMenuItem).classList.add("menuItem");
    let thirdItemTitle = document.createElement("div");
    thirdMenuItem.appendChild(thirdItemTitle).classList.add("hometitle");
    thirdItemTitle.innerText='Fish Thali';
    let thirdItemImage = document.createElement("img");
    thirdMenuItem.appendChild(thirdItemImage).classList.add("menuImage");
    thirdItemImage.src=thali;


}

export { menuPageLoader };