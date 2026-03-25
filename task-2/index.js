// Write your code here. You may create as many files as you like.

import "dotenv/config";
import * as readline from "readline";
import { fetchQuestions } from "./questions.js";
import {
  printQuestion,
  printCorrect,
  printWrong,
  printScore,
} from "./display.js";

const rl = readline.createInterface({
  input: process.stdin, // read from the terminal
  output: process.stdout, // write to the terminal
});


function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}


async function runQuiz() {
  console.log("Welcome to the Quiz App!\n");

  
  const topic = await ask("Enter a topic: ");

  console.log("\nLoading questions...");

 
  const questions = await fetchQuestions(topic);

  let score = 0;

 
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];

    printQuestion(q, i);

   
    const input = await ask("\nYour answer (1-4): ");

   
    const answer = parseInt(input);

    if (answer === q.correct) {
      printCorrect();
      score++; // add 1 point
    } else {
      printWrong(q.correct, q.options);
      // no point added for wrong answers
    }

    // Show current score after each question
    console.log(`Score: ${score} / ${i + 1}`);
  }

  // Show the final score when all questions are done
  printScore(score);

  // Close the terminal input
  rl.close();
}

// Start the quiz!
runQuiz();
