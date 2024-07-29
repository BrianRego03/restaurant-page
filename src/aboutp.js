import aboutpic from "./pics/aboutpage/about.png"

const aboutPageLoader=()=>{

    
    let contentSection = document.querySelector("#content");


    let aboutImage = new Image();
    let imageDiv=document.createElement("div");
    contentSection.appendChild(imageDiv).classList.add("aboutPic");
    imageDiv.appendChild(aboutImage);
    aboutImage.src=aboutpic;

    let aboutDiv=document.createElement("div");
    contentSection.appendChild(aboutDiv).classList.add("abouttext");
    aboutDiv.innerHTML="Started in 2002, we have always been and will be going forward too, your cozy corner in this beautiful city of Mangalore. With our enchanting village ambience of warm huts, thatched roof, rustic decor, beautiful waterfalls and a variety of semi-open dining spaces, we aim to give you a unique dining experience.<br>Mangalore is home to the best of coastal cuisines and we have the good fortune of having chefs who happen to specialise in and have mastered these. We specialise in a variety of both vegetarian and non-vegetarian, Chinese, Continental and local delicacies as well.<br>Madhuvan’s Village is a place of community living, a place where everyone regardless of religion, colour and gender feast, laugh and converse under one roof. That is what Maduvan’s village celebrates and this unity is our very essence."



};

export {aboutPageLoader};

