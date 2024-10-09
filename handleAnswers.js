function handleAnswers(answers) {
    console.log(`\nThank you, ${answers.name}!\n`);
    console.log(`Your favorite programming language is ${answers.favoriteLanguage}.`);
  
    if (answers.confirm) {
      console.log('Great! We’ve locked in your answer.');
    } else {
      console.log('No worries, you can change your mind later.');
    }
  
    console.log(`\nAlso, if you were a programming language, your mascot would be: ${answers.quirky}! That's awesome!\n`);
  }
  
  module.exports = { handleAnswers };
  