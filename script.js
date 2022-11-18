function openNav() {
  document.getElementById('drop-down').style.width = '100%';
  document.getElementById('container').style.filter = 'blur(7px)';
}
openNav();

function closeNav() {
  document.getElementById('drop-down').style.width = '0%';
  document.getElementById('container').style.filter = 'blur(0px)';
}
closeNav();

const projectDetails = [
  {
    name: 'Tonic',
    pointersTitle: 'CANOPY',
    pointersLevel: 'Back End Dev',
    pointersYear: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/First card.png',
    mobileImage: './images/Snapshoot Portfolio.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
    mobileName: 'Tonic',
    mobilePointersTitle: 'CANOPY',
    mobilePointersLevel: 'Back End Dev',
    mobilePointersYear: '2015',
    mobileDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    mobileFeaturedImage: './images/Snapshoot Portfolio.png',
    mobileTechnologies: ['html', 'css', 'javascript'],
    mobileLinkToLiveVersion: '#!',
    mobileLinkToSource: '#!',

  },

  {
    name: 'Multi-Post Stories',
    pointersTitle: 'FACEBOOK',
    pointersLevel: 'Full Stack Dev',
    pointersYear: '2015',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featuredImage: './images/second desktop.png',
    technologies: ['html', 'css', 'Ruby on rails', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
    mobileName: 'Multi-Post Stories',
    mobilePointersTitle: 'CANOPY',
    mobilePointersLevel: 'Back End Dev',
    mobilePointersYear: '2015',
    mobileDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    mobileFeaturedImage: './images/Snapshoot Portfolio (1).png',
    mobileTechnologies: ['html', 'css', 'javascript'],
    mobileLinkToLiveVersion: '#!',
    mobileLinkToSource: '#!',
  },

  {
    name: 'Facebook 360',
    pointersTitle: 'FACEBOOK',
    pointersLevel: 'Full Stack Dev',
    pointersYear: '2015',
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    featuredImage: './images/third desktop card.png',
    technologies: ['html', 'css', 'Ruby on rails', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
    mobileName: 'Tonic',
    mobilePointersTitle: 'CANOPY',
    mobilePointersLevel: 'Back End Dev',
    mobilePointersYear: '2015',
    mobileDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    mobileFeaturedImage: './images/Snapshoot Portfolio (2).png',
    mobileTechnologies: ['html', 'css', 'javascript'],
    mobileLinkToLiveVersion: '#!',
    mobileLinkToSource: '#!',
  },

  {
    name: 'Uber Navigation',
    pointersTitle: 'Uber',
    pointersLevel: 'Lead Developer',
    pointersYear: '2018',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featuredImage: './images/fourth desktop.png',
    technologies: ['html', 'css', 'Ruby on rails', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
    mobileName: 'Multi-Post Stories',
    mobilePointersTitle: 'CANOPY',
    mobilePointersLevel: 'Back End Dev',
    mobilePointersYear: '2015',
    mobileDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    mobileFeaturedImage: './images/Snapshoot Portfolio (3).png',
    mobileTechnologies: ['html', 'css', 'javascript'],
    mobileLinkToLiveVersion: '#!',
    mobileLinkToSource: '#!',
  },
];

/* End of project detail object */

/* Populate object to html elements when the page loads */
for (let i = 0; i < projectDetails.length; i += 1) {
  let tech = '';
  let mTech = '';

  for (let j = 0; j < projectDetails[i].technologies.length; j += 1) {
    tech += `<li >${projectDetails[i].technologies[j]}</li>`;
  }

  for (let j = 0; j < projectDetails[i].mobileTechnologies.length; j += 1) {
    mTech += `<li >${projectDetails[i].mobileTechnologies[j]}</li>`;
  }

  if (i % 2 === 0) {
    document.querySelector('#dynamic').innerHTML += `<div >
        <div class="card"> 
            <!-- mobile starts -->
            <div id="mobile-popup" class="card-img">
                <img src="${projectDetails[i].mobileFeaturedImage}" alt="blog image 4">
            </div>
            <div id="mobile-popup" class="card-info">
                <div class="info-header">
                    <h4 class="tonic">${projectDetails[i].mobileName}</h4>
                </div>
                <div class="info-icons">
                    <h4 class="info-icons-p1">${projectDetails[i].mobilePointersTitle}</h4>
                    <img src="./images/Counter.png" alt="dot">
                    <h4 class="info-icons-p2">${projectDetails[i].mobilePointersLevel}</h4>
                    <img src="./images/Counter.png" alt="dot">
                    <h4 class="info-icons-p2">${projectDetails[i].mobilePointersYear}</h4>
                </div>
                <div class="info-text">
                    <p >
                    ${projectDetails[i].mobileDescription}
                    </p>
                </div>
                <div id="lang">
                    <ul class="lang">
                        ${mTech}
                    </ul>
                </div>
                <div>
                    <button class="see-project" onclick="openPopup()">
                        <a href="#">See Project</a>
                    </button>
                </div>
            </div>
            <!-- for desktop -->
            <div id="desktop-popup" class="card-info2">
                <div class="info-header">
                    <h4 class="tonic">${projectDetails[i].name}
                    </h4>
                </div>
                <div class="info-icons">
                    <h4 class="info-icons-p1">${projectDetails[i].pointersTitle}</h4>
                    <img src="./images/Counter.png" alt="dot">
                    <h4 class="info-icons-p2">${projectDetails[i].pointersLevel}</h4>
                    <img src="./images/Counter.png" alt="dot">
                    <h4 class="info-icons-p2">${projectDetails[i].pointersYear}</h4>
                </div>
                <div class="info-text">
                    <p>
                        ${projectDetails[i].description}
                    </p>
                </div>
                <div id="lang">
                    <ul class="lang">
                        ${tech}
                    </ul>
                </div>
                <div>
                    <a href="#"  onclick="openPopup()">
                        <button type="submit" class="see-project">
                        See Project
                        </button>
                    </a>
                </div>
            </div>
            <div id="desktop-popup" class="card-img1">
                <img src="${projectDetails[i].featuredImage}" alt="blog image 1">
            </div>
            <!-- for desktop ends -->
        </div>
    </div>`;
  } else if (i % 2 !== 0) {
    document.querySelector('#dynamic').innerHTML += `<div >
        <div class="card" >
            <!-- mobile starts --> 
            <div id="mobile-popup" class="card-img">
                <img src="${projectDetails[i].mobileFeaturedImage}" alt="blog image 1">
            </div>
            <div id="mobile-popup" class="card-info">
                <div class="info-header">
                    <h4 class="tonic">${projectDetails[i].mobileName}</h4>
                </div>
                <div class="info-icons">
                    <h4 class="info-icons-p1">${projectDetails[i].mobilePointersTitle}</h4>
                    <img src="./images/Counter.png" alt="dot">
                    <h4 class="info-icons-p2">${projectDetails[i].mobilePointersLevel}</h4>
                    <img src="./images/Counter.png" alt="dot">
                    <h4 class="info-icons-p2">${projectDetails[i].mobilePointersYear}</h4>
                </div>
                <div class="info-text">
                    <p>
                    ${projectDetails[i].mobileDescription}
                    </p>
                </div>
                <div id="lang">
                    <ul class="lang">
                    ${mTech}
                    </ul>
                </div>
                <div>
                    <button class="see-project" onclick="openPopup()">
                        <a href="#">See Project</a>
                    </button>
                </div>
            </div>
            <!-- mobile ends -->
            <!-- for desktop -->
            <div id="desktop-popup" class="card-img1">
                <img src="${projectDetails[i].featuredImage}" alt="blog image 1">
            </div>
            <div class="card-info1" id="desktop-popup">
                <div class="info-header">
                    <h4 class="tonic">${projectDetails[i].name}</h4>
                </div>
                <div class="info-icons">
                    <h4 class="info-icons-p1">${projectDetails[i].pointersTitle}</h4>
                    <img src="./images/Counter.png" alt="dot">
                    <h4 class="info-icons-p2">${projectDetails[i].pointersLevel}</h4>
                    <img src="./images/Counter.png" alt="dot">
                    <h4 class="info-icons-p2">${projectDetails[i].pointersYear}</h4>
                </div>
                <div class="info-text">
                    <p>
                    ${projectDetails[i].description}
                    </p>
                </div>
                <div id="lang">
                    <ul class="lang">
                    ${tech}
                    </ul>
                </div>
                <div>
                    <a href="#" onclick="openPopup()">
                        <button type="submit" class="see-project">
                        See Project
                        </button>
                    </a>
                </div>
            </div>
            </div>
        </div>`;
  }
}
/* End of project detail population when the pages loads */

function openPopup() {
  document.querySelector('#popup-sections').innerHTML += `<div class="popup-container">
    <div class="popup"> 
        <div id="desktop-popup" class="">
            <div class="info-header popup-header">
                <h4 class="tonic">Uber Navigation
                </h4>
                <img src="./images/popup=x-Icon.png" alt="popup-x icon" class="popup-header-image" onclick="closePopup()">
            </div>
            <div class="info-icons">
                <h4 class="info-icons-p1">Uber</h4>
                <img src="./images/Counter.png" alt="dot">
                <h4 class="info-icons-p2">Lead Developer</h4>
                <img src="./images/Counter.png" alt="dot">
                <h4 class="info-icons-p2">2018</h4>
            </div>
            <div id="desktop-popup" class="popup-img1">
                <img src="./images/popup desktop.png" alt="popup image 1">
            </div>
            <div id="mobile-popup" class="popup-img2">
                <img src="./images/Snapshoot Portfolio.png" alt="popup image 1">
            </div>
            <div class="popup-text">
                <div class="popup-body">
                    <p class="desk-hidden">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
                    </p>
                    <p class="mobile-hidden">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
                    </p>
                </div>
                <div id ="mobile-popup-langs" class="popup-lang">
                    <div id="lang">
                        <ul class="langs">
                            <li>html</li>
                            <li>css</li>
                            <li>javascript</li>
                            <li>github</li>
                            <li>ruby</li>
                            <li>bootstrap</li>
                        </ul>
                    </div>
                    <div class="pop-button-div">
                        <a href="#">
                            <button type="submit" class="see-project pop-button">
                            See Live
                            <img src="./images/button Icon.png" alt="">
                            </button>
                        </a>
                        <button type="submit" class="see-project pop-button">
                            See Source
                            <img src="./images/button Vector.png" alt="">
                            </button>
                        </a>
                    </div>
                    
                </div>
                <div id ="mobile-popup-langs"class="popup-langs">
                    <div id="lang">
                        <ul class="langs">
                            <li>html</li>
                            <li>css</li>
                            <li>javascript</li>
                        </ul>
                    </div>
                    <div class="pop-button-div">
                        <a href="#">
                            <button type="submit" class="see-project pop-button">
                            See Live
                            <img src="./images/button Icon.png" alt="">
                            </button>
                        </a>
                        <button type="submit" class="see-project pop-button">
                            See Source
                            <img src="./images/button Vector.png" alt="">
                            </button>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </div>
</div>`;

  document.getElementById('popup-section').style.display = 'block';
  document.getElementById('container').style.filter = 'blur(7px)';
}
openPopup();

function closePopup() {
  document.getElementById('popup-section').style.display = 'none';
  document.getElementById('container').style.filter = 'blur(0px)';
}
closePopup();

// form validation

const form = document.getElementById('contact');
const username = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('textBody');
const errormsg = document.getElementById('error');

form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    errormsg.style.display = 'block';
    e.preventDefault();
  }

  localStorage.setItem('name-input', username.value);
  localStorage.setItem('email-input', email.value);
  localStorage.setItem('msg-input', message.value);
});

username.value = localStorage.getItem('name-input');
email.value = localStorage.getItem('email-input');
message.value = localStorage.getItem('msg-input');