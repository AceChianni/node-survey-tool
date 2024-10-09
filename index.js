const inquirer = require('inquirer').default;
const { questions } = require('./questions');
const { handleAnswers } = require('./handleAnswers');

inquirer.prompt(questions).then(handleAnswers).catch((error) => {
  console.error("Oops, something went wrong:", error);
});
