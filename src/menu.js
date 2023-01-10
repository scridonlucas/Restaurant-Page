function createMenu() {
  const menu = document.createElement('div');
  const title = document.createElement('h2');
  const main = document.createElement('div');
  main.classList.add('main');
  title.textContent = 'Menu';
  menu.appendChild(title);
  menu.appendChild(
    createProduct(
      'Pizza',
      'Our pizzas are made with the freshest ingredients and baked to perfection in a wood-fired oven.' +
        'We offer a variety of classic and specialty pizzas, including margherita, pepperoni, and veggie'
    )
  );
  menu.appendChild(
    createProduct(
      'Crispy Menu',
      'Our menu features a variety of crispy dishes that are sure to satisfy. From crispy fried chicken' +
        "and onion rings to crunchy salads and refreshing slaws, we've got something for everyone."
    )
  );
  menu.appendChild(
    createProduct(
      'Drinks',
      'Our drink menu features a wide selection of refreshing beverages to quench your thirst. We offer a' +
        'variety of classic and specialty cocktails, including margaritas, mojitos, and martinis, as well as' +
        'a selection of wines by the glass and bottle'
    )
  );
  main.appendChild(menu);
  return main;
}

function createProduct(nameContent, descriptionContent) {
  const menuItem = document.createElement('div');
  const name = document.createElement('h3');
  const description = document.createElement('p');
  name.textContent = nameContent;
  description.textContent = descriptionContent;
  menuItem.appendChild(name);
  menuItem.appendChild(description);
  return menuItem;
}

export default createMenu;
