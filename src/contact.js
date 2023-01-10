function createContact() {
  const contact = document.createElement('div');
  const title = document.createElement('h2');
  const main = document.createElement('div');
  main.classList.add('main');
  title.textContent = 'Contact';
  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '0712345678';
  const address = document.createElement('p');
  address.textContent = 'str. Templului, nr. 27, Cluj-Napoca, Cluj, Romania';
  contact.appendChild(title);
  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  main.appendChild(contact);
  return main;
}

export default createContact;
