const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Declaring the array of image filenames */
const pics= ["./images/pic6.jpg","./images/pic7.jpg","./images/pic8.jpg","./images/pic9.jpg","./images/pic10.jpg"];
/* Declaring the alternative text for each image file */
const alts=["picture of human eye","sand","flowers","egypt","butterfly"];
/* Looping through images */
for (let i=0;i<5;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pics[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click",()=>{
        displayedImage.setAttribute('src',pics[i]);
        displayedImage.setAttribute('alt',alts[i]);

    });
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", ()=>{
    const button=btn.getAttribute("class");
    if (button=="dark"){
        btn.setAttribute("class","light");
        btn.textContent="lighten";
        overlay.style.backgroundColor="rgb(0 0 0/ 50%)";
    } else{
        btn.setAttribute("class","dark");
        btn.textContent="darken";
        overlay.style.backgroundColor= "rgb(0 0 0/ 0%)";
    }
})

