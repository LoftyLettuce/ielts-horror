import "./styles.css"
import { page1 } from "./page1";
import { page2 } from "./page2";
import { page3 } from "./page3";
import { page4 } from "./page4";
import { page5 } from "./page5";
import { page6 } from "./page6";
export const homePage = function(){
  function display(){
    const pages = [page1, page2, page3, page4, page5, page6];
    let root = document.querySelector('body');
    if (document.querySelector('body>div'))
    {
      root.removeChild(document.querySelector('body>div'));
    }
    let home = document.createElement('div');
    home.classList.add('home');
    for (let i = 0; i < 6; i++)
    {
      let story = document.createElement('div');
      const title = document.createElement('h1');
      story.appendChild(title);
      home.appendChild(story);
    }
    let stories = home.querySelectorAll('div>h1');
    stories[0].textContent = 'HARD WORD 2';
    stories[1].textContent = 'HARD WORD 3';
    stories[2].textContent = 'HARD WORD 4';
    stories[3].textContent = 'VERY HARD WORD';
    stories[4].textContent = 'VERY HARD WORD 2';
    stories[5].textContent = 'VERY HARD WORD 3';
    stories = home.querySelectorAll('div');
    for (let i = 0; i < 6; i++)
    {
      stories[i].addEventListener('click', ()=>{
        pages[i].display();
      })
    }
    root.appendChild(home);
  }
  return {display}
}();
homePage.display();
export function createPage(title, paragraphs){
  const root = document.querySelector('body'); 
  root.removeChild(document.querySelector('body>div'));
  const page = document.createElement('div');
  page.classList.add('content');
  const backButton = document.createElement('button');
  backButton.textContent = 'Home';
  backButton.addEventListener('click', ()=>{
    homePage.display();
  })
  page.appendChild(backButton);
  const h1 = document.createElement('h1');
  h1.textContent = title;
  page.appendChild(h1);
  for (let i = 0; i < paragraphs.length; i++){
    const para = document.createElement('p');
    para.textContent = paragraphs[i];
    page.appendChild(para);
  }
  root.appendChild(page);
}