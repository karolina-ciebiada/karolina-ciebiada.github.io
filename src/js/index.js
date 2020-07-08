import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

fetch('https://api.github.com/users/karolina-ciebiada/repos?sort=created')
.then (resp => resp.json())
.then(resp => {
    const container = document.querySelector('.projects-grid--js');
    for (let repo of resp) {
        const {description, homepage, html_url, name} = repo;
        const myTemplate = `<article class="project">
        <div class="project__window">
          <span class="project__circle"></span>
          <span class="project__circle"></span>
          <span class="project__circle"></span>
        </div>
        
        <div class="project__content">
        <img src="img/github.svg" class="" width="21" height="21"/>
       
   <h3 class="project-grid project-title">
     <span class="project__grey">project:</span> <span>${name}</span>
   </h3>
   <p class="project-grid project-grid--description">
     <span class="project__grey">description:</span>
     <span class="project__light">${description}</span>
   </p>
   <p class="project-grid project-grid--description">
     <span class="project__grey">demo:</span> <a class="project__links" href="${homepage}" target="_blank" rel="noopener noreferrer">see here</a>
   </p>
   <p class="project-grid project-grid--description">
     <span class="project__grey">github:</span> <a class="project__links"  href="${html_url}" target="_blank" rel="noopener noreferrer">source code</a>
   </p>
   </div>
   </article>`
   if(description){
   container.innerHTML += myTemplate;
   }
    }
})
.catch(error=>{
    console.log(error);
})