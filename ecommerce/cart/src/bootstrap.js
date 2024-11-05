import faker from 'faker';

const cart = `<div>you have a ${faker.random.number()}</div>`;

document.querySelector('#dev-cart').innerHTML = cart