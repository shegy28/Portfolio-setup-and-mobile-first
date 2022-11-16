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

function openPopup() {
  document.getElementById('popup-section').style.display = 'block';
  document.getElementById('container').style.filter = 'blur(7px)';

}

function closePopup() {
  document.getElementById('popup-section').style.display = 'none';
  document.getElementById('container').style.filter = 'blur(0px)';
}

const projectDetails = [
    {
        name:'Tonic',
        pointersTitle: 'CANOPY',
        pointersLevel: 'Back End Dev',
        pointersYear: '2015',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        featuredImage: './images/Snapshoot Portfolio.png',
        technologies:['html','css','javascript'],
        linkToLiveVersion:'#!',
        linkToSource: '#!',
    },

    {
        name: 'Multi-Post Stories' ,
        pointersTitle: 'FACEBOOK',
        pointersLevel: 'Full Stack Dev',
        pointersYear: '2015',
        description:'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        featuredImage:'./images/second desktop.png' ,
        technologies:['html', 'css','Ruby on rails','javascript'],
        linkToLiveVersion:'#!',
        linkToSource:'#!',
    },

    {
        name:'Facebook 360',
        pointersTitle: 'FACEBOOK',
        pointersLevel: 'Full Stack Dev',
        pointersYear: '2015',
        description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
        featuredImage: './images/third desktop card.png',
        technologies:['html', 'css','Ruby on rails','javascript'],
        linkToLiveVersion:'#!',
        linkToSource:'#!',
    },

    {
        name:'Uber Navigation' ,
        pointersTitle: 'Uber',
        pointersLevel: 'Lead Developer',
        pointersYear: '2018',
        description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
        featuredImage:'./images/fourth desktop.png' ,
        technologies:['html', 'css','Ruby on rails','javascript'],
        linkToLiveVersion:'#!',
        linkToSource:'#!',
    }
];

const projectDetailsMobile = [
    {
        name:'Tonic',
        pointersTitle: 'CANOPY',
        pointersLevel: 'Back End Dev',
        pointersYear: '2015',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        featuredImage: './images/Snapshoot Portfolio.png',
        technologies:['html','css','javascript'],
        linkToLiveVersion:'#!',
        linkToSource: '#!',
    },

    {
        name:'Tonic',
        pointersTitle: 'CANOPY',
        pointersLevel: 'Back End Dev',
        pointersYear: '2015',
        description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        featuredImage:'./images/Snapshoot Portfolio (1).png' ,
        technologies:['html','css','javascript'],
        linkToLiveVersion:'#!',
        linkToSource:'#!',
    },

    {
        name:'Tonic',
        pointersTitle: 'CANOPY',
        pointersLevel: 'Back End Dev',
        pointersYear: '2015',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        featuredImage: './images/Snapshoot Portfolio (2).png',
        technologies:['html','css','javascript'],
        linkToLiveVersion:'#!',
        linkToSource:'#!',
    },

    {
        name:'Tonic',
        pointersTitle: 'CANOPY',
        pointersLevel: 'Back End Dev',
        pointersYear: '2015',
        description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        featuredImage:'./images/Snapshoot Portfolio (3).png' ,
        technologies:['html','css','javascript'],
        linkToLiveVersion:'#!',
        linkToSource:'#!',
    }
];

// Desktop version
const desktopPopUp = document.getElementById('desktop-popup');
function closeDesktopPopUp() {
  desktopPopUp.classList.add('hide-desktop-popup');
}

const desktopProjectData = [
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/tonic-desktop.png',
    pointersTitle: 'CANOPY',
    pointersLevel: 'Back End Dev',
    pointersYear: '2015',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featuredImage: './images/multi-post-stories-desktop.png',
    pointersTitle: 'FACEBOOK',
    pointersLevel: 'Full Stack Dev',
    pointersYear: '2015',
    technologies: ['html', 'css', 'javascript', 'Ruby on rails'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
  },
  {
    name: 'Facebook 360',
    description:
      'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    featuredImage: './images/facebook.png',
    pointersTitle: 'FACEBOOK',
    pointersLevel: 'Full Stack Dev',
    pointersYear: '2015',
    technologies: ['html', 'css', 'javascript', 'Ruby on rails'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
  },
  {
    name: 'Uber Navigation',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featuredImage: './images/uber-navigation.png',
    pointersTitle: 'Uber',
    pointersLevel: 'Lead Developer',
    pointersYear: '2018',
    technologies: ['html', 'css', 'javascript', 'Ruby on rails'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
  },
];

function generateDesktopProjectData(projectList) {
  let data = '';
  for (let i = 0; i < projectList.length; i += 1) {
    const currentProject = desktopProjectData[i];
    let workReverse = '';
    if (i % 2 !== 0) {
      workReverse = 'work-reverse';
    }
    data += `
            <div class='work ${workReverse}'>
                <img src='${currentProject.featuredImage}' class='work-image' alt='image of a website hero-section'>
                <div class='work-description-section'>
                    <h2 class='work-title'>${currentProject.name}</h2>
                    <div class='work-pointers'>
                        <p class='work-pointers-title'>${currentProject.pointersTitle}</p>
                        <ul class='work-pointers-bullets'>
                            <li>${currentProject.pointersLevel}</li>
                            <li>${currentProject.pointersYear}</li>
                        </ul>
                    </div>
                    <p class='work-description'>${currentProject.description}</p>
                    <ul class='tags'>
                        <li class='tag'>html</li>
                        <li class='tag'>css</li>
                        <li class='tag'>javaScript</li>
                    </ul>
                    <a href='#!' class='project-link' onclick='openDesktopPopUp(${i})' >
                     See Project
                    </a>
                </div>  
            </div>
        `;
  }
  return data;
}

document.getElementById('desktop-works').innerHTML = generateDesktopProjectData(projectData);

function openDesktopPopUp(counter) {
  const currentProjectData = desktopProjectData[counter];
  const desktopTechnologies = getTechnologies(
    desktopProjectData[counter].technologies,
  );
  const data = `
    <div class='desktop-popup' >
        <div class='desktop-popup-title'>
            <h2 class='work-title'>${currentProjectData.name}</h2>
        <i class='fa-regular fa-x desktop-dropdown-x-icon' onclick='closeDesktopPopUp()'></i>
        </div>
        <div class='work-pointers'>
            <p class='work-pointers-title'>${currentProjectData.pointersTitle}</p>
            <ul class='work-pointers-bullets-popup'>
                <li>${currentProjectData.pointersLevel}</li>
                <li>${currentProjectData.pointersYear}</li>
            </ul>
        </div>
        <img src='${currentProjectData.featuredImage}' class='desktop-popup-work-image' alt='image of a website hero-section'>
        <div class='desktop-popup-description'>
            <div class='desktop-popup-work-description'>
                <p>${currentProjectData.description}</p>
            </div>
            <div class='desktop-popup-items'>
                <ul class=' desktop-popup-tags'>
                ${desktopTechnologies}
                </ul>
                <a href='${currentProjectData.linkToLiveVersion}' class=' desktop-popup-project-link'>
                See live
                    <img src='/images/Popup-icon.png' alt='image of a small icon' class='popup-icon'>
                </a>
                <a href='${currentProjectData.linkToSource}' class=' desktop-popup-project-link'>
                See Source
                    <img src='/images/github-vector.png' alt='github icon' class='popup-icon'>
                </a>
            </div>  
        </div>  
    </div>
    `;
  desktopPopUp.innerHTML = data;
  desktopPopUp.classList.remove('hide-desktop-popup');
}
