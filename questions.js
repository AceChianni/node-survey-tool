const questions = [
    {
      type: 'input',
      name: 'name',
      message: "What's your name?",
    },
    {
      type: 'list',
      name: 'favoriteLanguage',
      message: "Which programming language do you prefer?",
      choices: ['JavaScript', 'Python', 'Java', 'C++']
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Is this your final answer?',
      default: true
    },
    {
      type: 'input',
      name: 'quirky',
      message: 'If you were a programming language, what would your mascot be?',
      default: 'A dancing robot'
    }
  ];
  
  module.exports = { questions };
  