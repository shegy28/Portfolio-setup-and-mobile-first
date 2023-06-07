function targetBlank() {
    // Get all the <a> tags on the page
    var allLinks = document.querySelectorAll("a");
  
    // Loop through each <a> tag
    for (var i = 0; i < allLinks.length; i++) {
      // Add the target="_blank" attribute
      allLinks[i].setAttribute("target", "_blank");
    }
}
targetBlank();
  


function openNav() {
  document.getElementById('drop-down').style.width = '100%';
  document.getElementById('container').style.filter = 'blur(7px)';
  document.getElementById('head-container').style.display = 'none';
}
openNav();

function closeNav() {
  document.getElementById('drop-down').style.width = '0%';
  document.getElementById('container').style.filter = 'blur(0px)';
  document.getElementById('head-container').style.display = 'block';
}
closeNav();

function langOpen() {
    document.getElementById('direct-down').style.display = 'none';
    document.getElementById('direct').style.display = 'block';
    document.getElementById('lang-icons').style.display = 'none';
}

function langClose() {
    document.getElementById('direct-down').style.display = 'block';
    document.getElementById('direct').style.display = 'none';
    let langIcons = document.getElementById('lang-icons');
    if (window.innerWidth >= 768) {
        langIcons.style.display = 'flex'; 
      } else {
        langIcons.style.display = 'flex';
    }
}

function fOpen() {
    document.getElementById('ddf').style.display = 'none';
    document.getElementById('df').style.display = 'block';
    document.getElementById('frame-icon').style.display = 'none';
}

function fClose() {
    document.getElementById('ddf').style.display = 'block';
    document.getElementById('df').style.display = 'none';
    let langIcons = document.getElementById('frame-icon');
    if (window.innerWidth >= 768) {
        langIcons.style.display = 'flex'; 
      } else {
        langIcons.style.display = 'flex';
    }
}

function sOpen() {
    document.getElementById('sdf').style.display = 'none';
    document.getElementById('sf').style.display = 'block';
    document.getElementById('skill-icon').style.display = 'none';
}

function sClose() {
    document.getElementById('sdf').style.display = 'block';
    document.getElementById('sf').style.display = 'none';
    let langIcons = document.getElementById('skill-icon');
    if (window.innerWidth >= 768) {
        langIcons.style.display = 'flex'; 
      } else {
        langIcons.style.display = 'flex';
    }
}

const projectDetails = [
  {
    name: 'Space Traveler&lsquo;s Hub',
    pointersTitle: 'SPACE X',
    pointersLevel: 'Front End Dev',
    pointersYear: '2023',
    description: 'Space Traveller hub-app is based on data from Space X&lsquo;s API. The Space Travelers&lsquo;s Hub App displays a list of available rockets on its homepage and a list of missions on its mission page. Both lists options can be booked and reserved, and the reserved rocket or mission shows on the profile page. Built with React and Redux.',
    featuredImage: './images/Group 4.png',
    mobileImage: './images/Group 4 m.png',
    technologies: ['HTML5', 'CSS3', 'React', 'Redux'],
    linkToLiveVersion: 'https://spacetravelerhub.onrender.com/',
    linkToSource: 'https://github.com/shegy28/spacetravellerhub-app',
    mobileName: 'Space Traveler&lsquo;s Hub',
    mobilePointersTitle: 'SPACE X',
    mobilePointersLevel: 'Front End Dev',
    mobilePointersYear: '2023',
    mobileDescription: 'spacetravellerhub-app is based on data from Space X&lsquo;s API. The Space Travelers&lsquo;s Hub App displays a list of available rockets on its homepage and a list of missions on its mission page. Both lists options can be booked and reserved, and the reserved rocket or mission shows on the profile page. Built with React and Redux.',
    mobileFeaturedImage: './images/Group 4 m.png',
    mobileTechnologies: ['HTML5', 'CSS3', 'React', 'Redux'],
    mobileLinkToLiveVersion: '#!',
    mobileLinkToSource: '#!',

  },

  {
    name: 'MoneyWise',
    pointersTitle: 'RAILS API',
    pointersLevel: 'Full Stack Dev',
    pointersYear: '2023',
    description: 'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what. Built with Ruby on Rails.',
    featuredImage: './images/bugg.png',
    technologies: ['Ruby', 'Rails', 'SQL'],
    linkToLiveVersion: 'https://moneywise-vzr4.onrender.com/',
    linkToSource: 'https://github.com/shegy28/budget-app',
    mobileName: 'MoneyWise',
    mobilePointersTitle: 'RAILS API',
    mobilePointersLevel: 'Back End Dev',
    mobilePointersYear: '2023',
    mobileDescription: 'A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what. Built with Ruby on Rails.',
    mobileFeaturedImage: './images/budget app mobile.png',
    mobileTechnologies: ['Ruby', 'Rails', 'SQL'],
    mobileLinkToLiveVersion: '#!',
    mobileLinkToSource: '#!',
  },

  {
    name: 'Fashion Week',
    pointersTitle: 'CC',
    pointersLevel: 'Front End Dev',
    pointersYear: '2022',
    description: 'A website that tell and shows more information about a fashion event that is held annually. Its main feature is that the speakers sections is loaded dynamically using Javascript. Built with HTML5, CSS3 and JavaScript',
    featuredImage: './images/fas.png',
    technologies: ['html', 'css', 'Ruby on rails', 'javascript'],
    linkToLiveVersion: 'https://shegy28.github.io/Fashion-week/',
    linkToSource: 'https://github.com/shegy28/Fashion-week',
    mobileName: 'Fashion Week',
    mobilePointersTitle: 'CC',
    mobilePointersLevel: 'Front End Dev',
    mobilePointersYear: '2022',
    mobileDescription: 'A website that tell and shows more information about a fashion event that is held annually. Its main feature is that the speakers sections is loaded dynamically using Javascript. Built with HTML5, CSS3 and JavaScript',
    mobileFeaturedImage: './images/fas mobile.png',
    mobileTechnologies: ['html', 'css', 'javascript'],
    mobileLinkToLiveVersion: '#!',
    mobileLinkToSource: '#!',
  },

  {
    name: 'Crypto App',
    pointersTitle: 'API',
    pointersLevel: 'Front End Dev',
    pointersYear: '2023',
    description: 'Stay informed with our mobile app that gathers and presents real time cryptocurrency market data. Get up-to-the-minute updates on significant cryptocurrencies, including prices, market valuations, and ranks. Crafted with React and Redux.',
    featuredImage: './images/cryp d.png',
    technologies: ['HTML5', 'CSS3', 'React', 'Redux'],
    linkToLiveVersion: 'https://crypto-metrics-webapp.onrender.com/',
    linkToSource: 'https://github.com/shegy28/crypto-metrics-Webapp',
    mobileName: 'Crypto App',
    mobilePointersTitle: 'API',
    mobilePointersLevel: 'Front End Dev',
    mobilePointersYear: '2023',
    mobileDescription: 'Stay informed with our mobile app that gathers and presents real time cryptocurrency market data. Get up-to-the-minute updates on significant cryptocurrencies, including prices, market valuations, and ranks. Crafted with React and Redux.',
    mobileFeaturedImage: './images/cryp m.png',
    mobileTechnologies: ['HTML5', 'CSS3', 'React', 'Redux'],
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
                    <button class="see-project" onclick="openPopup(${i})">
                        <a>See Project</a>
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
                    <a  onclick="openPopup(${i})">
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
                    <button class="see-project" onclick="openPopup(${i})">
                        <a>See Project</a>
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
                    <a onclick="openPopup(${i})">
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

function openPopup(index) {
    targetBlank()
  const obj = projectDetails[index];
  let tech = '';
  let mTech = '';

  for (let j = 0; j < obj.technologies.length; j += 1) {
    tech += `<li >${obj.technologies[j]}</li>`;
  }

  for (let j = 0; j < obj.mobileTechnologies.length; j += 1) {
    mTech += `<li >${obj.mobileTechnologies[j]}</li>`;
  }
  document.querySelector('#popup-section').innerHTML += `<div class="popup-container">
    <div class="popup"> 
        <div id="desktop-popup" class="">
            <div class="info-header popup-header">
                <h4 class="tonic">${obj.name}
                </h4>
                <img src="./images/popup=x-Icon.png" alt="popup-x icon" class="popup-header-image" onclick="closePopup()">
            </div>
            <div class="info-icons">
                <h4 class="info-icons-p1">${obj.pointersTitle}</h4>
                <img src="./images/Counter.png" alt="dot">
                <h4 class="info-icons-p2">${obj.pointersLevel}</h4>
                <img src="./images/Counter.png" alt="dot">
                <h4 class="info-icons-p2">${obj.pointersYear}</h4>
            </div>
            <div id="desktop-popup" class="popup-img1">
                <img src="${obj.featuredImage}" alt="popup image 1">
            </div>
            <div id="mobile-popup" class="popup-img2">
                <img src="${obj.mobileFeaturedImage}" alt="popup image 1">
            </div>
            <div class="popup-text">
                <div class="popup-body">
                    <p class="desk-hidden">
                    ${obj.description}
                    </p>
                    <p class="mobile-hidden">
                    ${obj.description}
                    </p>
                </div>
                <div id ="mobile-popup-langs" class="popup-lang">
                    <div id="lang">
                        <ul class="langs">
                            ${tech}
                        </ul>
                    </div>
                    <div class="pop-button-div">
                        <a href="${obj.linkToLiveVersion}" target="_blank">
                            <button type="submit" class="see-project pop-button">
                            See Live
                            <img src="./images/button Icon.png" alt="">
                            </button>
                        </a>
                        <a href="${obj.linkToSource}" target="_blank">
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
                         ${mTech}
                        </ul>
                    </div>
                    <div class="pop-button-div">
                        <a href="${obj.linkToLiveVersion}" target="_blank">
                            <button type="submit" class="see-project pop-button">
                            See Live
                            <img src="./images/button Icon.png" alt="">
                            </button>
                        </a>
                        <a href="${obj.linkToSource}" target="_blank">
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
  targetBlank()
}
openPopup();

function closePopup() {
  document.getElementById('popup-section').style.display = 'none';
  document.getElementById('container').style.filter = 'blur(0px)';
}
closePopup();

// form validation

const form = document.getElementById('contact');
const email = document.getElementById('email');
const errormsg = document.getElementById('error');

form.addEventListener('submit', (e) => {
  if (email.value.toLowerCase() !== email.value) {
    errormsg.style.display = 'block';
    e.preventDefault();
  }
});