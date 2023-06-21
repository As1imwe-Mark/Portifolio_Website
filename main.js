// const { isInteger } = require("lodash");

const menu = document.querySelector('#mobile');
const openBtn = document.querySelector('#menu-icon');
const closeBtn = document.querySelector('.menu_close');
const items = document.querySelectorAll('#mobile ul li');
openBtn.addEventListener('click', () => {
  menu.classList.add('mobile');
});
closeBtn.addEventListener('click', () => {
  menu.classList.remove('mobile');
});
items.forEach((e) => {
  e.addEventListener('click', () => {
    menu.classList.remove('mobile');
  });
});

const projects = [
  {
    id: 1,
    image: './images/Snapshoot Portfolio.png',
    image_d: '../images/snap-1.png',
    title_d: 'Tonic',
    title: 'Tonic',
    client: 'CANOPY',
    client_d: 'CANOPY',
    role: 'Back End Dev',
    role_d: 'Back End Dev',
    year: '2015',
    year_d: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description_d: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    // stacks:['HTML','CSS','Ruby On Rails','JavaScript']
  },
  {
    id: 2,
    image: './images/Snapshoot Portfolio2.png',
    image_d: '../images/snap-2.png',
    title: 'Multiple-Post Stories',
    title_d: 'Multiple-Post Stories',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    client_d: 'FACEBOOK',
    role_d: 'Full Stack Dev',
    year_d: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description_d: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends..',
    // reverse: "right",
    // reverse_d:"right",
  },
  {
    id: 3,
    image: './images/Snapshoot Portfolio3.png',
    image_d: '../images/snap-3.png',
    title: 'Tonic',
    title_d: 'Facebook 360',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    client_d: 'FACEBOOK',
    role_d: 'Full Stack Dev',
    year_d: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description_d: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  },
  {
    id: 4,
    image: './images/Snapshoot Portfolio4.png',
    image_d: '../images/snap-4.png',
    title: 'Multiple-Post Stories',
    title_d: 'Uber Navigation',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    client_d: 'Uber',
    role_d: 'Lead Developer',
    year_d: '2018',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description_d: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends..',
    // reverse: "right",
    // reverse_d:"right",
  }
];
let projectHtml = '';
projects.forEach((card) => {
  projectHtml += `<div class="works-card-container">
<div class="works">
    <div class="card-snapshoot-3">
        <img src="${card.image_d}" alt="project image">
    </div>
    <div class="card-snapshoot_3">
        <img src="${card.image}" alt="project image">
    </div>
    <div class="works_details">
        <div class="works-card-title">
            <h2 class="mobile_h2">${card.title}</h2>
            <h2 class="desktop_h2">${card.title_d}</h2>
        </div>
        <div class="works-client-info_mobile">
            <span class="client">${card.client}</span>
            <span class="role"><img src="./Icons/Counter.png" alt="counter">${card.role}</span>
            <span class="year"><img src="./Icons/Counter.png" alt="counter">${card.year}</span>
        </div>
        <div class="works-client-info_desktop">
            <span class="client">${card.client_d}</span>
            <span class="role"><img src="./Icons/Counter.png" alt="counter">${card.role_d}</span>
            <span class="year"><img src="./Icons/Counter.png" alt="counter">${card.year_d}</span>
            </div>
        <p class="works-description_mobile">${card.description}</p>
        <p class="works-description_desktop">${card.description_d}</p>
            <ul class="works-stacks">
                <li class="html"><a href="" class="html">HTML</a></li>
                <li class="ruby_on_rails"><span class="ruby_on_rails">Ruby on rails</span></li>
                <li class="css"><a href="" class="css">CSS</a></li>
                <li class="javaScript"><a href="" class="javascript">JavaScript</a></li>
            </ul>
        <button type="button" class="more-projects"  id='${card.id}'>See project</button>
    </div>
</div>
</div>`;

  //  console.log(projectHtml)
});

const works = document.getElementById('works');
works.innerHTML = projectHtml;

function Selection(e) {
  if (e.target.id !== null) {
    const item = projects.find((project) => project.id === e.target.id);
    if (item !== undefined) {
      const PopHtml = ` <div class="pop_up">
      <div class="works-card-title">
      <button type="button" class="close" id="pop-close"><span class="material-symbols-outlined">
      close
      </span></button>
          <h2 class="mobile_h2">${item.title}</h2>
          <h2 class="desktop_h2">${item.title_d}</h2>
      </div>
      <div class="works-client-info_mobile">
          <span class="client">${item.client}</span>
          <span class="role"><img src="./Icons/Counter.png" alt="counter">${item.role}</span>
          <span class="year"><img src="./Icons/Counter.png" alt="counter">${item.year}</span>
      </div>
      <div class="works-client-info_desktop">
          <span class="client">${item.client_d}</span>
          <span class="role"><img src="./Icons/Counter.png" alt="counter">${item.role_d}</span>
          <span class="year"><img src="./Icons/Counter.png" alt="counter">${item.year_d}</span>
          </div>
          <div class="card-snapshoot-3 snap">
      <img src="${item.image_d}" alt="project image">
  </div>
  <div class="card-snapshoot_3">
      <img src="${item.image}" alt="project image">
  </div>
      <div class='pop-info'>
      <p class="works-description_mobile">${item.description}</p>
      <p class="works-description_desktop">${item.description_d}</p>
      <div class='pop_links'>
      <ul class="works-stacks">
              <li class="html"><a href="" class="html">HTML</a></li>
              <li class="ruby_on_rails"><span class="ruby_on_rails">Ruby on rails</span></li>
              <li class="css"><a href="" class="css">CSS</a></li>
              <li class="javaScript"><a href="" class="javascript">JavaScript</a></li>
          </ul>
       <div class="pop_btns">
            <button type="button" class="more-projects">See live <span class="material-symbols-outlined">
                open_in_new
                </span></button> <span><button type="button" class="more-projects git">See source<img src="Icons/github.png" width="16px" alt="github"></button></span>
        </div>
      </div>
      </div>
  </div>`;
      document.querySelector('.pop_up-container').innerHTML = PopHtml;
      openPop();
      const closePop = document.querySelector('#pop-close');
      closePop.addEventListener('click', () => {
        popUp.classList.remove('open_pop-up');
      });
    }
  }
}
works.addEventListener('click', Selection);
const popUp = document.querySelector('.pop_up-container');
function openPop() {
  popUp.classList.add('open_pop-up');
}
