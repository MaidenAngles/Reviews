// changed object information
const reviews = [
  {
    id: 1,
    name: 'haruhi suzumiya',
    job: 'god',
    img: 'https://upload.wikimedia.org/wikipedia/en/4/48/Suzumiya_Haruhi.jpg',
    text: 'Haruhi Suzumiyas job of being the controller of the universe is a job she does undercover & unknowlingly while being a high school student.'
  },
  {
    id: 2,
    name: 'yuki nagato',
    job: 'mentor',
    img: 'https://static.wikia.nocookie.net/haruhi/images/7/7e/Yuki_Nagato_2.jpg',
    text: 'Yuki Nagato acts as an assistant to assist Kyon as he deals with Haruhi. She often assists in how he is able to do actions abnormal to the human perception of physics.'
  },
  {
    id: 3,
    name: 'Mikuru Asahina',
    job: 'assistant',
    img: 'https://cdn.myanimelist.net/images/characters/12/75529.jpg',
    text: 'Miikuru keeps the friend group in check as an assistant to Haruhi in her school atmosphere.',
  },
  {
    id: 4,
    name: 'Kyon',
    job: 'overlooker',
    img: 'https://static.wikia.nocookie.net/infinite-loops/images/7/7a/Kyon.jpg',
    text: 'Kyon is the only person that Haruhi will listen to. With that responsibility, he is the one that overlooks what she does in order that it nothing will go wrong.',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const startBtn = document.querySelector('.startbutton');
const endBtn = document.querySelector('.endbutton');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

// Added Start Button
startBtn.addEventListener('click', function () {
  console.log('hello');
    currentItem = 0;
  showPerson(currentItem);
});

// Added End Button
endBtn.addEventListener('click', function () {
  console.log('hello');
    currentItem = 3;
  showPerson(currentItem);
});