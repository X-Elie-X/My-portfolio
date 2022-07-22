const body = document.querySelector('body');
const listInfo = document.getElementById('listinfo');
const icon = document.getElementById('menu-icon');

function mobileMenu() {
  if (listInfo.style.display === 'block') {
    icon.innerHTML = '<i class="fa fa-bars 2x"></i>';
    listInfo.style.display = 'none';
  } else {
    icon.innerHTML = '<i class="fa fa-times-circle"></i>';
    listInfo.style.display = 'block';
  }
}
const element = document.getElementById('menu-icon');
element.addEventListener('click', mobileMenu);

const projects = [
  {
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: ['./img/ImgPlaceholder.png', './img/ImgPlaceholder6.png'],
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
  },
];
const div = document.getElementById('test0');
div.innerHTML = projects
  .map(
    (project) => `<section class="works">
<a class="placeholder">
  <img src="${project.image[0]}" alt="project" />
</a>
<a class="placeholders"
  ><img src="${project.image[1]}" alt="project"
/></a>
<div class="works-details">
  <h3 class="post">${project.name}</h3>
  <p class="info1">
    ${project.description}
  </p>
  <ul class="categories">
    <li>${project.technologies[0]}</li>
    <li>${project.technologies[1]}</li>
    <li>${project.technologies[2]}</li>
    <li>${project.technologies[3]}</li>
  </ul>
  <button type="button" class="btn effect open-modal-btn" id="open-modal-btn">
    See Project
  </button>
</div>
</section>`
  )
  .join('');
const projects1 = [
  {
    name1: 'Profesional Art Printing Data',
    description1:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies1: ['html', 'bootstrap', 'Ruby'],
  },
];
const div1 = document.getElementById('test1');
div1.innerHTML = projects1
  .map(
    (project1) => `
    <section class='projects'>
      <div class='project'>
        <h3>${project1.name1}</h3>
        <p>${project1.description1}</p>
        <ul>
          <li>${project1.technologies1[0]}</li>
          <li>${project1.technologies1[1]}</li>
          <li>${project1.technologies1[2]}</li>
        </ul>
        <button type='"button"' class="effect project-btn open-modal-btn">
          See Project
        </button>
      </div>
      <div class='project'>
        <h3>${project1.name1}</h3>
        <p>${project1.description1}</p>
        <ul>
          <li>${project1.technologies1[0]}</li>
          <li>${project1.technologies1[1]}</li>
          <li>${project1.technologies1[2]}</li>
        </ul>
        <button type='"button"' class="effect project-btn open-modal-btn">
          See Project
        </button>
      </div>
      <div class='project'>
        <h3>${project1.name1}</h3>
        <p>${project1.description1}</p>
        <ul>
          <li>${project1.technologies1[0]}</li>
          <li>${project1.technologies1[1]}</li>
          <li>${project1.technologies1[2]}</li>
        </ul>
        <button type="button" class="effect project-btn open-modal-btn">
          See Project
        </button>
      </div>
      <div class='project'>
        <h3>${project1.name1}</h3>
        <p>${project1.description1}</p>
        <ul>
          <li>${project1.technologies1[0]}</li>
          <li>${project1.technologies1[1]}</li>
          <li>${project1.technologies1[2]}</li>
        </ul>
        <button type="button" class="effect project-btn open-modal-btn">
          See Project
        </button>
      </div>
      <div class='project'>
        <h3>${project1.name1}</h3>
        <p>${project1.description1}</p>
        <ul>
          <li>${project1.technologies1[0]}</li>
          <li>${project1.technologies1[1]}</li>
          <li>${project1.technologies1[2]}</li>
        </ul>
        <button type='button' class='effect project-btn open-modal-btn'>
          See Project
        </button>
      </div>
      <div class='project'>
        <h3>${project1.name1}</h3>
        <p>${project1.description1}</p>
        <ul>
          <li>${project1.technologies1[0]}</li>
          <li>${project1.technologies1[1]}</li>
          <li>${project1.technologies1[2]}</li>
        </ul>
        <button type='button' class="effect project-btn open-modal-btn">
          See Project
        </button>
      </div>
    </section>`
  )
  .join('');

const projects2 = [
  {
    name2: [
      'Data Dashboard Healthcare',
      'Website Protfolio ',
      'Profesional Art Printing Data More',
    ],
    description2:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",

    technologies2: ['html', 'bootstrap', 'Ruby'],
  },
];
const div2 = document.getElementById('test2');
div2.innerHTML = projects2
  .map(
    (project2) => `<section class="projects1">
    <div class="project1">
      <button type="button" class="effect project-btn open-modal-btn">
        See Project
      </button>
    </div>
    <div class="project2">
      <h3>${project2.name2[0]}</h3>
      <p>
      ${project2.description2}
      </p>
      <ul>
      <li>${project2.technologies2[0]}</li>
      <li>${project2.technologies2[1]}</li>
      <li>${project2.technologies2[2]}</li>
      </ul>
    </div>
    <div class="project3">
      <h3>${project2.name2[1]}</h3>
      <p>
      ${project2.description2}
      </p>
      <ul>
      <li>${project2.technologies2[0]}</li>
      <li>${project2.technologies2[1]}</li>
      <li>${project2.technologies2[2]}</li>
      </ul>
    </div>
    <div class="project4">
      <h3>${project2.name2[2]}</h3>
      <p>
      ${project2.description2}
      </p>
      <ul>
      <li>${project2.technologies2[0]}</li>
      <li>${project2.technologies2[1]}</li>
      <li>${project2.technologies2[2]}</li>
      </ul>
    </div>
    <div class="project5">
      <h3>${project2.name2[0]}</h3>
      <p>
      ${project2.description2}
      </p>
      <ul>
      <li>${project2.technologies2[0]}</li>
      <li>${project2.technologies2[1]}</li>
      <li>${project2.technologies2[2]}</li>
      </ul>
    </div>
    <div class="project6">
      <h3>${project2.name2[1]}</h3>
      <p>
      ${project2.description2}
      </p>
      <ul>
      <li>${project2.technologies2[0]}</li>
      <li>${project2.technologies2[1]}</li>
      <li>${project2.technologies2[2]}</li>
      </ul>
    </div>
  </section>`
  )
  .join('');

const projects3 = [
  {
    name3: [
      'Keeping track of hundreds  of components website',
      'Multi Post Stories',
    ],
    description3: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    ],
    image3: [
      './img/SnapshootPortfolioMobile.png',
      './img/SnapshootPortfolio2.png',
      './img/seelive.png',
      './img/seesourcce.png',
    ],
    technologies3: ['html', 'bootstrap', 'Ruby on rails'],
    liveVersion: 'https://x-elie-x.github.io/',
    linkSource: 'https://github.com/X-Elie-X',
  },
];
const div3 = document.getElementById('test3');
div3.innerHTML = projects3
  .map(
    (project3) => `<section class="popup" id="modal">
    
    <button type="button" class="close-popup" id="close-modal-btn">X</button>
    <h4 class="popup-post">${project3.name3[1]}</h4>
    <h4 class="popup-posts">
    ${project3.name3[0]}
    </h4>
    <ul class="popuplist">
    <li>${project3.technologies3[0]}</li>
    <li>${project3.technologies3[1]}</li>
    <li>${project3.technologies3[2]}</li>
    </ul>
    <a href="#" class="snapshoot"
      ><img src="${project3.image3[0]}" alt="Snapshoot"
    /></a>
    <a href="#" class="snap"
      ><img src="${project3.image3[1]}" alt=""
    /></a>
    <p class="popup-info">
    ${project3.description3[1]} </p>
    <p class="popup-info2">
    ${project3.description3[0]}</p>
    <div class="popup-btns">
      <button
        type="button"
        class="popup-btn effect"
        onclick="document.location='${project3.liveVersion}'"
      >
        See Live <img src="${project3.image3[2]}" alt="seelive" />
      </button>
      <button
        type="button"
        class="popup-btn effect"
        onclick="document.location='${project3.linkSource}'"
      >
        See Source<img src="${project3.image3[3]}" alt="seesourcce" />
      </button>
    </div>
  </section>`
  )
  .join('');
const modal = document.querySelector('#modal');
const openModalButton = document.querySelectorAll('.open-modal-btn');
const closeModalButton = document.querySelector('#close-modal-btn');
const overlay = document.querySelector('#overlay');

function openPopup() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
  body.style.overflow = 'hidden';
}

openModalButton.forEach((openModalButton) => {
  openModalButton.addEventListener('click', openPopup);
});

function closePopup() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
  body.style.overflow = 'auto';
}

closeModalButton.addEventListener('click', closePopup);

const email1 = document.querySelector('#email1');
const form1 = document.getElementById('contact-form');
const errorElement = document.getElementById('error1');

form1.addEventListener('submit', (e) => {
  const messages1 = [];
  if (email1.value !== email1.value.toLowerCase()) {
    messages1.push('lower case is required the form is not sent!!!');
    if (messages1.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages1.join();
    }
  }
});

const error = document.getElementById('error2');
const form2 = document.getElementById('contact-forms');
const email2 = document.querySelector('#email2');
form2.addEventListener('submit', (e) => {
  const messages2 = [];
  if (email2.value !== email2.value.toLowerCase()) {
    messages2.push('lower case is required the form is not sent!!!');
    if (messages2.length > 0) {
      e.preventDefault();
      error.innerText = messages2.join();
    }
  }
});
// localStorage.clear();
const contactInfo1 = {
  email: document.querySelector('#email1').value,
  username: document.querySelector('#username').value,
  message1: document.querySelector('.text').value,
};

const contactInfo2 = {
  email2: document.querySelector('#email2').value,
  first: document.querySelector('#first').value,
  lasst: document.querySelector('#last').value,
  message2: document.querySelector('.text').value,
};

form1.addEventListener('change', () => {
  localStorage.setItem('contactInfo1', JSON.stringify(contactInfo1));
});
window.addEventListener('load', () => {
  const contactData = JSON.parse(localStorage.getItem('contactInfo1'));
  document.querySelector('#username').value = contactData.username;
  document.querySelector('#email1').value = contactData.email;
  document.querySelector('.text').value = contactData.message1;
});

form2.addEventListener('change', () => {
  localStorage.setItem('contactInfo2', JSON.stringify(contactInfo2));
});
window.addEventListener('load', () => {
  const contactData = JSON.parse(localStorage.getItem('contactInfo2'));
  document.querySelector('#first').value = contactData.first;
  document.querySelector('#last').value = contactData.last;
  document.querySelector('#email2').value = contactData.email2;
  document.querySelector('.text').value = contactData.message1;
});

// localStorage mobile
const sendBtn1 = document.getElementById('send1');
// const form1 = document.getElementById('contact-form');
const email3 = document.querySelector('#email1');
const username = document.querySelector('#username');
sendBtn1.addEventListener('submit', (e) => {
  const email3 = document.querySelector('#email1');
  const username = document.querySelector('#username');
  username = username.value;
  localStorage.setItem('name', username);
  email3 = email1.value;
  localStorage.setItem('email1', email1);
  // e.preventDefault();
});

// localStorage descktop
const sendBtn2 = document.getElementById('send2');
sendBtn2.addEventListener('submit', (e) => {
  const email3 = document.querySelector('#email2');
  const username = document.querySelector('#username');
  username = username.value;
  localStorage.setItem('name', username);
  email3 = email1.value;
  localStorage.setItem('email2', email3);
  localStorage.setItem('first', document.querySelector('#first').value);
  localStorage.setItem('last', document.querySelector('#last').value );
  // e.preventDefault();
});