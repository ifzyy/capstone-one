const hamBurger = document.querySelector('.hamburger-container');
const closeBtn = document.querySelector('#closeBtn');
const hamBurgerBtn = document.querySelector('#hamburger');
const menuItem1 = document.querySelector('#menuabout');
const menuItem2 = document.querySelector('#program');
const menuItem3 = document.querySelector('#join');
const menuItem4 = document.querySelector('#Sponsor');
const menuItem5 = document.querySelector('#enlist');
function openMenu() {
  hamBurger.classList.toggle('extended');
}
function closeMenu() {
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
  description: 'A musical band',
  overview: 'Cory Alexander Henry is an American singer-songwriter, pianist and producer.',
};
const featuring2 = {
  image: 'images/Richard_Bona_in_2009.jpg',
  name: 'Richard Bona',
  description: 'A bass player',
  overview: 'Richard Bona (born 28 October 1967) is a Cameroon-born American musician',
};
const featuring3 = {
  image: 'images/michaelleague_5050.jpg',
  name: 'Snarky Puppy',
  description: 'A musical band',
  overview: 'Snarky Puppy is an American instrumental ensemble led by bassist  Michael League.',
};
const featuring4 = {
  image: 'images/stanleyrandolph730.jpg',
  name: 'Stanley Randolph',
  description: 'A drummer',
  overview: 'Stanley Randolph continues to amaze the drumming world with his quick hands.',
};

const container = document.querySelector('.featured-speaker-container');
const h3 = document.createElement('h3');
h3.append('Featuring');
h3.classList.add('featuring');
container.appendChild(h3);

const featureBoxContainer = document.createElement('div');
featureBoxContainer.classList.add('feature-box-container');
container.appendChild(featureBoxContainer);

const featureBox = document.createElement('div');
featureBox.classList.add('feature-box');
featureBoxContainer.appendChild(featureBox);

const image = document.createElement('img');
image.classList.add('image', 'cimage');
featureBox.appendChild(image);

const featureBoxContent = document.createElement('div');
featureBoxContent.classList.add('feature-box-content');
featureBox.appendChild(featureBoxContent);

const featureBoxText = document.createElement('div');
featureBoxText.classList.add('feature-box-text', 'cname');
featureBoxContent.appendChild(featureBoxText);

const featureBoxText1 = document.createElement('div');
featureBoxText1.classList.add('feature-box-text1', 'cdescription');
featureBoxContent.appendChild(featureBoxText1);

const featureBoxText2 = document.createElement('div');
featureBoxText2.classList.add('feature-box-text2', 'coverview');
featureBoxContent.appendChild(featureBoxText2);
// Richard Bona
const featureBox2 = document.createElement('div');
featureBox2.classList.add('feature-box');
featureBoxContainer.appendChild(featureBox2);

const image2 = document.createElement('img');
image2.classList.add('image', 'rimage');
featureBox2.appendChild(image2);

const featureBoxContent2 = document.createElement('div');
featureBoxContent2.classList.add('feature-box-content');
featureBox2.appendChild(featureBoxContent2);

const featureBoxTextr = document.createElement('div');
featureBoxTextr.classList.add('feature-box-text', 'rname');
featureBoxContent2.appendChild(featureBoxTextr);

const featureBoxText1r = document.createElement('div');
featureBoxText1r.classList.add('feature-box-text1', 'rdescription');
featureBoxContent2.appendChild(featureBoxText1r);

const featureBoxText2r = document.createElement('div');
featureBoxText2r.classList.add('feature-box-text2', 'roverview');
featureBoxContent2.appendChild(featureBoxText2r);
// snarky puppy

const featureBox3 = document.createElement('div');
featureBox3.classList.add('feature-box');
featureBoxContainer.appendChild(featureBox3);

const image3 = document.createElement('img');
image3.classList.add('image', 'simage');
featureBox3.appendChild(image3);

const featureBoxContent3 = document.createElement('div');
featureBoxContent3.classList.add('feature-box-content');
featureBox3.appendChild(featureBoxContent3);

const featureBoxTexts = document.createElement('div');
featureBoxTexts.classList.add('feature-box-text', 'sname');
featureBoxContent3.appendChild(featureBoxTexts);

const featureBoxText1s = document.createElement('div');
featureBoxText1s.classList.add('feature-box-text1', 'sdescription');
featureBoxContent3.appendChild(featureBoxText1s);

const featureBoxText2s = document.createElement('div');
featureBoxText2s.classList.add('feature-box-text2', 'soverview');
featureBoxContent3.appendChild(featureBoxText2s);

// stanley randolph

const featureBox4 = document.createElement('div');
featureBox4.classList.add('feature-box');
featureBoxContainer.appendChild(featureBox4);

const image4 = document.createElement('img');
image4.classList.add('image', 'stimage');
featureBox4.appendChild(image4);

const featureBoxContent4 = document.createElement('div');
featureBoxContent4.classList.add('feature-box-content');
featureBox4.appendChild(featureBoxContent4);

const featureBoxTextst = document.createElement('div');
featureBoxTextst.classList.add('feature-box-text', 'stname');
featureBoxContent4.appendChild(featureBoxTextst);

const featureBoxText1st = document.createElement('div');
featureBoxText1st.classList.add('feature-box-text1', 'stdescription'),
  featureBoxContent4.appendChild(featureBoxText1st);

const featureBoxText2st = document.createElement('div');
featureBoxText2st.classList.add('feature-box-text2', 'stoverview');
featureBoxContent4.appendChild(featureBoxText2st);

function coryHenry() {
  document.querySelector('.cimage').src = `${featuring1.image}`
  document.querySelector('.cname').innerHTML = featuring1.name
  document.querySelector('.cdescription').innerHTML = featuring1.description
  document.querySelector('.coverview').innerHTML = featuring1.overview
}


function richardBona() {
  document.querySelector('.rimage').src = `${featuring2.image}`
  document.querySelector('.rname').innerHTML = featuring2.name
  document.querySelector('.rdescription').innerHTML = featuring2.description
  document.querySelector('.roverview').innerHTML = featuring2.overview
}

function snarkyPuppy() {
  document.querySelector('.simage').src = `${featuring3.image}`
  document.querySelector('.sname').innerHTML = featuring3.name
  document.querySelector('.sdescription').innerHTML = featuring3.description
  document.querySelector('.soverview').innerHTML = featuring3.overview
}

function stanleyRandolph() {
  document.querySelector('.stimage').src = `${featuring4.image}`
  document.querySelector('.stname').innerHTML = featuring4.name
  document.querySelector('.stdescription').innerHTML = featuring4.description
  document.querySelector('.stoverview').innerHTML = featuring4.overview
}

coryHenry();
richardBona();
snarkyPuppy();
stanleyRandolph();
