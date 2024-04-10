const btn= document.querySelector("#js-new-quote");
btn.addEventListener('click',getQuote);

const answerbtn= document.querySelector("#js-tweet");
answerbtn.addEventListener('click',getAnswer);

const answerText=document.querySelector("#js-answer-text");

const endpoint= "https://trivia.cyberwisp.com/getrandomchristmasquestion"
let answer='';

async function getQuote(){
   // console.log("Test");
   try {
        const response = await fetch (endpoint);
        if (!response.ok){
            throw error (response.statusTextText)
        }    

        const json = await response.json();
        displayQuote(json['question']);
        console.log(json ['question']);
        console.log(json ['answer']);
        answer=(json['answer']); 
        answerText.textContent='';

   } catch (err){
        console.log(err);
        alert('failed to load new quote');

   }
}

function displayQuote(quote){
    const quoteText=document.querySelector("#js-quote-text");
    quoteText.textContent=quote;

}
function getAnswer(){
    answerText.textContent=answer;
    
}





getQuote();

