var readlineSync= require ('readline-sync');

const chalk = require('chalk');
var currentScore=0;

var userName= readlineSync.question(chalk.bold.blueBright
("May I Have Your Name?"));

var welcomeMsg= ("\nWelcome "+userName);
console.log(chalk.bold.cyanBright(welcomeMsg));
console.log("    ");

var game="How Much You Know ANANYA!!";
console.log(chalk.bold.yellowBright("Lets play "+game));
console.log("    ");

//function
function play(ques,answer)
{
var  userAnswer=readlineSync.question(chalk.bold.blueBright(ques));
if(userAnswer.toLowerCase()===answer)
{
  console.log(chalk.bold.green("You Are Right!"));
  currentScore+=1
  console.log(chalk.bold.magentaBright("Your score is: "+currentScore));
}
else
{
  console.log(chalk.bold.red("You Are Wrong!"));
  console.log(chalk.bold.magentaBright("Your score is: "+currentScore));
}
console.log("------------");
}

//array of questions and answers
var quesAndanswer=[
  {
   question:"Where am I from?"+chalk.yellow("\na:Banglore\nb:Hubli\nc:Raichur\nd:Mudhol\n")+chalk.bold.white("Ans: "),
   answer:"d",
  },

 {
   question:"What is my favorite food?"+chalk.yellow("\na:Biryani\nb:Pasta\nc:Sandwiches\nd:French Fries\n")+chalk.bold.white("Ans: "),
   answer:"a",
 },
 {
   question:"What is my nickname?"+chalk.yellow("\na:Anni\nb:Sweety\nc:Golu\nd:Anu\n")+chalk.bold.white("Ans: "),
   answer:"a",
 },
 {
   question:"Who is my favorite film star?"+chalk.yellow("\na:Puneeth\nb:Yash\nc:Sudeep\nd:Darshan\n")+chalk.bold.white("Ans: "),
   answer:"b",
 },
 {question:"What is my favorite color?"+chalk.yellow("\na:Black\nb:Green\nc:Blue\nd:Red\n")+chalk.bold.white("Ans: "),
 answer:"c",
 },
]

for (i=0;i<quesAndanswer.length;i++)
{
  play(quesAndanswer[i].question,quesAndanswer[i].answer);
}

console.log(chalk.bold.yellowBright("Your Total Score Is "+currentScore));


//array to store userName and scores

var database=[{name:"Player One",score:"0",}]
database.push({name:userName,score:currentScore})

for(i=0;i<database.length;i++)
{
  console.log(chalk.bold.gray(""+database[i].name,""+database[i].score));
}
console.log("      ");

for(i=0;i<database.length;i++)
{
if (currentScore>database[i].score)
{
console.log(chalk.bold.yellowBright(userName+" You Have Beaten Player One"));

break;
}
else{
  console.log(chalk.bold.cyanBright("Better Luck Next Time"));
}break;
}
console.log("     ");

console.log (chalk.bold.red("Thanks For Playing"));