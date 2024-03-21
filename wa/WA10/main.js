const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storytext="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised  :insertx: weighs 300 pounds, and it was a hot day."

const insertX= ["Charlie", "Donald Duck", "Kate Middleton"];
const insertY=["Cabo","Florida", "Miamia"];
const insertZ=["flew the coop","fell into the pool","surfed into the sunset"]

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
let newStory=storytext;

let xItem = randomValueFromArray(insertX); 
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

newStory.replace(":insertx:",xItem);
newStory.replace(":inserty:",yItem);
newStory.replace(":insertz:",zItem);

newStory=newStory.replaceAll(":insertx:",xItem);
newStory=newStory.replaceAll(":inserty:",yItem);
newStory=newStory.replaceAll(":insertz:",zItem);



  if(customName.value !== '') {
    const name = customName.value;
    newStory=newStory.replace("Bob",name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14);
    weight=weight+ " stones"; 
    let temperature = Math.round((94-32)*(5/9));
    temperature=temperature + " centigrade";

    newStory=newStory.replace( "300 pounds",weight);
    newStory=newStory.replace( "94 fahrenheit",temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
