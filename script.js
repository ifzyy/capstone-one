const hamBurger = document.querySelector('.hamburger-container');
const closeBtn = document.querySelector('#closeBtn');
const hamBurgerBtn = document.querySelector ('#hamburger');
const menuItem1 = document.querySelector('#menuabout');
const menuItem2 = document.querySelector('#program');
const menuItem3 = document.querySelector('#join');
const menuItem4 = document.querySelector('#Sponsor');
const menuItem5 = document.querySelector('#enlist');
function openMenu () {
    hamBurger.classList.toggle('extended');
}
function closeMenu () {
    hamBurger.classList.remove('extended');
}
hamBurgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

menuItem1.addEventListener('click', closeMenu);
menuItem2.addEventListener('click', closeMenu);
menuItem3.addEventListener('click', closeMenu);
menuItem4.addEventListener('click', closeMenu);
menuItem5.addEventListener('click', closeMenu);


const featuring1 = {
  image: 'images/Cory_Henry.png',
  name: 'Cory henry and the funk apostles',
  description: 'A musical ban d',
  overview: 'Cory Alexander Henry is an American singer-songwriter, pianist and producer.'
};
const featuring2 = {
  image: 'images/Richard_Bona_in_2009.jpg',
  name: 'Richard Bona',
  description: 'A bass player',
  overview: 'Richard Bona (born 28 October 1967) is a Cameroon-born American musician'
};
const featuring3 = {
  image: 'images/michaelleague_5050.jpg',
  name: 'Snarky Puppy',
  description: 'A musical band',
  overview: 'Snarky Puppy is an American instrumental ensemble led by bassist  Michael League.'
};
const featuring4 = {
  image: 'images/stanleyrandolph730.jpg',
  name: 'Stanley Randolph',
  description: 'A drummer',
  overview: 'Stanley Randolph continues to amaze the drumming world with his quick hands.'
};

function coryHenry (){
  document.querySelector('.cimage').src = `${featuring1.image}`;
  document.querySelector('.cname').innerHTML= featuring1.name;
  document.querySelector('.cdescription').innerHTML = featuring1.description;
  document.querySelector('.coverview').innerHTML = featuring1.overview;
}


function richardBona () {
  document.querySelector('.rimage').src = `${featuring2.image}`;
  document.querySelector('.rname').innerHTML = featuring2.name;
  document.querySelector('.rdescription').innerHTML = featuring2.description;
  document.querySelector('.roverview').innerHTML = featuring2.overview;
}

function snarkyPuppy (){
  document.querySelector('.simage').src = `${featuring3.image}`;
  document.querySelector('.sname').innerHTML = featuring3.name;
  document.querySelector('.sdescription').innerHTML = featuring3.description;
  document.querySelector('.soverview').innerHTML = featuring3.overview;
}

function stanleyRandolph (){
  document.querySelector('.stimage').src = `${featuring4.image}`;
  document.querySelector('.stname').innerHTML = featuring4.name;
  document.querySelector('.stdescription').innerHTML = featuring4.description;
  document.querySelector('.stoverview').innerHTML = featuring4.overview;
}

coryHenry();
richardBona();
snarkyPuppy();
stanleyRandolph();
