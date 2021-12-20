// Get DOM Elements
const userNameForm = document.querySelector('userName');
const userNameInput = document.querySelector("[name = 'userName]");
const userName = document.getElementById('userName');

const userQuestionForm = document.querySelector('userQuestion');
const userQuestionInput = document.querySelector("[name = 'userQuestion]");
const userQuestion = document.getElementById('userQuestion'); 

//const userName = 'Paul';
userName ? console.log(`Hello, ${userName}!`) : console.log (`Hello!`)

//const userQuestion = 'Will I become a developer?';
let output =''

/* Considering the variables that we have, we have 4 cases.
 
|   variable   |            Case 1            |    Case 2    |                 Case 3                 |            Case 4            |
|--------------|------------------------------|--------------|----------------------------------------|------------------------------|
| userName     | falsy                        | falsy        | truthy                                 | truthy                       |
| userQuestion | falsy                        | truthy       | falsy                                  | truthy                       |
| output       | What would you like to know? | userQuestion | userName, what would you like to know? | userName asks, "userQuestion" |

The most intuitive and simple-to-read implementation is via an if else operator.
*/

if(userName && userQuestion){
  output = `${userName} asks "${userQuestion}"`;
} else if (!userName && userQuestion) {
  output = userQuestion;
} else if (userName && !userQuestion){
  output = `${userName}, what would you like to know?`
} else {
  output = 'What would you like to know?'
}

console.log(output);

const randomNumber = Math.floor(Math.random()*8);
let eightBall = '';

/*The switch case is the most readable way to implement this many options.
If the user didn't ask a question, the eightBall will still log a reply to the console, which is not a desired behaviour.
So we wrap the switch case that produced output into an if statement that checks if userQuestion is truthy (or !=== '').
*/
if(userQuestion){
  switch (randomNumber) {
    case 0:
      eightBall = 'It is certain';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      break;
    case 2:
      eightBall = 'Reply hazy try again';
      break;
    case 3:
      eightBall = 'Cannot predict now';
      break;
    case 4:
      eightBall = 'Do not count on it';
      break;
    case 5:
      eightBall = 'My sources say no';
      break;
    case 6:
      eightBall = 'Outlook not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
    default:
      eightBall = 'Error';
      break;
}}

console.log(eightBall)
