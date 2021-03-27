// 1. Create a multidimensional array to hold quiz questions and answers

const questions = [

['how many planets in our solar system 2021?', 8],
['how many counties are there in uk?', 48],
['how many legs does a spider have?', 8],
['how many times did andy murray won wimbledon?', 2],
['how many times has england won the world cup football?', 1]

];

// 2. Store the number of questions answered correctly
 let correctAnswer = 0;
 let incorrectAnswer = 0;
 let rank = "";

 const correct = [];
 const incorrect = [];

/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for(let i =0; i<questions.length; i++){
let question = questions[i][0];
let answer = questions[i][1];
let response = prompt(question);

if(+response === answer){
correctAnswer++;
correct.push(question);
}else{
  incorrectAnswer += 1;
  incorrect.push(question);
}

}


//Function for creating list items and displaying them as orderlist on the html page for the correct and incorrect questons

function createListItems(arr){
  let items = '';

for(let i =0; i<arr.length; i++){
  items += `<li>${arr[i]}</li>`;
}
return items;
}


// 4. Display the number of correct answers to the user


let html = `
<h1><strong>You have answered ${correctAnswer} answers correctly</strong></h1><br>
<h2>- These are the correct answers to the question in the list below:- </h2>
<ol>${createListItems(correct)} </ol>

<h2>- and you have ${incorrectAnswer} incorrect answers with the listed questions below:- </h2>
<ol>${createListItems(incorrect)}</ol>
`;

document.querySelector('main').innerHTML = html;
