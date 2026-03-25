// This function prints a question and its options to the terminal
export function printQuestion(q, index) {
  console.log(`\nQuestion ${index + 1}: ${q.question}`);

  // Loop through each option and print it with a number
  q.options.forEach((opt, i) => {
    console.log(`  ${i + 1}. ${opt}`);
  });
}

// \x1b[32m means green, \x1b[0m resets the colour back to normal
export function printCorrect() {
  console.log("\x1b[32m✓ Correct! +1 point\x1b[0m");
}

export function printWrong(correct, options) {
  console.log(
    `\x1b[31m✗ Wrong! The correct answer was ${correct}: ${options[correct - 1]}\x1b[0m`,
  );
}


export function printScore(score) {
  console.log(`\n=============================`);
  console.log(`Final score: ${score} / 10`);
  console.log(`=============================\n`);
}
