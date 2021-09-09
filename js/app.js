const menu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.fa-bars');
const body = document.querySelector('body');
const featuredSpeakers = document.querySelector('#featured-speakers');
// const img = document.querySelector('.image-speaker-1');

const speakers = [
  {
    name: 'Asha McMillan',
    job: 'Founder & CEO',
    description: 'Asha McMillan is the Founder and CEO of the company.',
    image: './business-people-at-the-office.webp',
  },
  {
    name: 'Kameron Coleman',
    job: 'Event Manager',
    description: 'Kameron is the Event Manager of the compay.',
    image: './pexels-icsa-1709001.webp',
  },
  {
    name: 'Alima Pate',
    job: 'Marketing Manager',
    description: 'Alima is the Marketing Manager of the company.',
    image: './businesswoman-posing-at-the-office.webp',
  },
  {
    name: 'Katy Mustafa',
    job: 'Art Design Manager',
    description: 'Katy is responsible for all the images, logos and colors of the company.',
    image: './pexels-andrea-piacquadio-3756679.webp',
  },
  {
    name: 'Nicholas Boyer',
    job: 'Web Developer',
    description: 'Nicholas is the Web Developer of the company.',
    image: './pexels-mikhail-nilov-7989081.webp',
  },
  {
    name: 'Hannah Finley',
    job: 'General Artist Manager',
    description: 'Hannah works directly with the artist to make sure they have all they need.',
    image: './pexels-thisisengineering-3861962.webp',
  },
];

window.onload = () => {
  const {
    name, job, description, image,
  } = speakers[0];
  const {
    name: name2, job: job2, description: description2, image: image2,
  } = speakers[1];
  const {
    name: name3, job: job3, description: description3, image: image3,
  } = speakers[2];
  const {
    name: name4, job: job4, description: description4, image: image4,
  } = speakers[3];
  const {
    name: name5, job: job5, description: description5, image: image5,
  } = speakers[4];
  const {
    name: name6, job: job6, description: description6, image: image6,
  } = speakers[5];

  featuredSpeakers.innerHTML = `
  <div class="featured-title">
    <h2>Featured Speakers</h2>
    <hr class=speakers-hr>
  </div>
  <div class="featured-speakers">
    <div class="speaker">
      <div class="speaker-image">
        <img class="image-speaker" src='${image}'></img>
      </div>
      <div class="speaker-info">
        <h2>${name}</h2>
        <h3 class="position">${job}</h3>
        <hr class="position-hr">
        <p class="speaker-description">${description}</p>
      </div>
    </div>
    <div class="speaker">
      <div class="speaker-image">
        <img class="image-speaker" src='${image2}'></img>
      </div>
      <div class="speaker-info">
        <h2>${name2}</h2>
        <h3 class="position">${job2}</h3>
        <hr class="position-hr">
        <p class="speaker-description">${description2}</p>
      </div>
    </div>
    <div class="speaker">
      <div class="speaker-image">
        <img class="image-speaker" src='${image3}'></img>
      </div>
      <div class="speaker-info">
        <h2>${name3}</h2>
        <h3 class="position">${job3}</h3>
        <hr class="position-hr">
        <p class="speaker-description">${description3}</p>
      </div>
    </div>
    <div class="speaker">
      <div class="speaker-image">
        <img class="image-speaker" src='${image4}'></img>
      </div>
      <div class="speaker-info">
        <h2>${name4}</h2>
        <h3 class="position">${job4}</h3>
        <hr class="position-hr">
        <p class="speaker-description">${description4}</p>
      </div>
    </div>
    <div class="speaker">
      <div class="speaker-image">
        <img class="image-speaker" src='${image5}'></img>
      </div>
      <div class="speaker-info">
        <h2>${name5}</h2>
        <h3 class="position">${job5}</h3>
        <hr class="position-hr">
        <p class="speaker-description">${description5}</p>
      </div>
    </div>
    <div class="speaker">
      <div class="speaker-image">
        <img class="image-speaker" src='${image6}'></img>
      </div>
      <div class="speaker-info">
        <h2>${name6}</h2>
        <h3 class="position">${job6}</h3>
        <hr class="position-hr">
        <p class="speaker-description">${description6}</p>
      </div>
    </div>
  </div>
  `;
  featuredSpeakers.classList.remove('d-none');
};

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) {
    hamburger.classList.remove('fa-bars');
    hamburger.style = 'transition: all 0.3s ease-in-out; transform: rotate(90deg)';
    hamburger.classList.add('fa-times');
    body.classList.add('no-scroll');

    // wait 0.5 seconds before adding inner html
    setTimeout(() => {
      menu.innerHTML = `<ul class="nav-ul">
      <li class="nav-item"><a href="about.html">About</a></li>
      <li class="nav-item"><a href="#">Tickets</a></li>
      <li class="nav-item"><a href="#">Contact</a></li>
      <li class="nav-item"><a href="#">Sponsors</a></li>
      <li class="nav-item"><a href="#">News</a></li>
    </ul>`;
    }, 300);
  } else {
    menu.innerHTML = '';
    setTimeout(() => {
      hamburger.classList.remove('fa-times');
      hamburger.classList.add('fa-bars');
      hamburger.style = 'transform: rotate(0deg); transition: all 0.3s ease-in-out';
      hamburger.classList.remove('close');
      body.classList.remove('no-scroll');
    }, 300);
  }
});