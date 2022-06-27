const greetings = require('./data/greetings.json');
const subjects = require('./data/subjects.json');

const getRandom = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const greet = () => {
  const randomGreeting = getRandom(greetings.data);
  const randomSubject = getRandom(subjects.data);
  return `${randomGreeting}, ${randomSubject}`;
}

console.log(
  greet()
);
