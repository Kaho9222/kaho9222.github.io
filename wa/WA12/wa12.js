const btn= document.querySelector("#js-dog-button");
const image=document.querySelector('#js-dog-image');
if(image.style.height >= '30px') {
    image.style.height = '40opx'
    } else {
    image.style.width = '400px'
    }



//const answerbtn= document.querySelector("#js-a");
//answerbtn.addEventListener('click',getAnswer);

//const answerText=document.querySelector("#js-answer-text");
btn.addEventListener('click',getDog);
    


async function getDog(){
   try {
    const response = await fetch ("https://dog.ceo/api/breeds/image/random");  

        const jsonData = await response.json();

        console.log(jsonData);
        image.src=jsonData['message'];
    }      

    catch(error){
        console.log('failed to load');
    }
}

//getDog();
