import createContact from './contact';
import createHome from './home';
import createMenu from './menu';
const content = document.querySelector('#content');

function navBar() {
  const navBar = document.createElement('div');
  navBar.classList.add('nav-bar');
  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';
  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';
  const aboutBtn = document.createElement('button');
  aboutBtn.textContent = 'About';
  navBar.appendChild(homeBtn);
  navBar.appendChild(menuBtn);
  navBar.appendChild(aboutBtn);
  return navBar;
}

function createPage() {
  content.appendChild(navBar());
  content.appendChild(createHome());
}

export default createPage;
