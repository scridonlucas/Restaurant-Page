function createHome() {
  const content = document.querySelector('#content');
  const home = document.createElement('div');
  const main = document.createElement('div');
  main.classList.add('main');
  home.classList.add('box');
  const title = document.createElement('h2');
  title.textContent = 'Restaurant Page';
  const description = document.createElement('p');
  description.textContent =
    'Our restaurant is a welcoming and vibrant place' +
    ' where people can come to enjoy delicious food' +
    'and drinks in a comfortable and relaxing atmosphere.' +
    ' We are proud to offer a diverse menu that includes' +
    'something for everyone, whether you are in the mood' +
    'for a hearty meal or a light snack. Our team of talented ' +
    'chefs use only the freshest ingredients to create dishes' +
    'that are sure to satisfy even the most discerning palates.' +
    'In addition to our regular menu, we also offer daily specials' +
    'and a selection of mouth-watering desserts to complete your' +
    'dining experience. Whether you are joining us for a quick lunch' +
    'or a leisurely dinner, we look forward to serving you and' +
    'helping to make your visit to our restaurant a memorable one.';
  home.appendChild(title);
  home.appendChild(description);
  main.appendChild(home);
  return main;
}
export default createHome;
