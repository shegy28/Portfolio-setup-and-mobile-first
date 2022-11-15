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
