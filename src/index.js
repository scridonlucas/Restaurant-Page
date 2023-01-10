import createHome from './home';
import createPage from './initPage';
import createMenu from './menu';
import createContact from './contact';

createPage(createHome());

const buttons = document.querySelectorAll('button');
const content = document.querySelector('#content');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.textContent === 'Home') {
      content.removeChild(content.lastChild);
      content.appendChild(createHome());
    } else if (e.target.textContent === 'Menu') {
      content.removeChild(content.lastChild);
      content.appendChild(createMenu());
    } else if (e.target.textContent === 'About') {
      content.removeChild(content.lastChild);
      content.appendChild(createContact());
    }
  });
});
