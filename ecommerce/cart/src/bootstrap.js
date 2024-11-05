import faker from 'faker';

const mount = (el) => {
	const cart = `<div>you have a ${faker.random.number()}</div>`;

	el.innerHTML = cart;
};

if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#dev-cart');

	if (el) {
		mount(el);
	}
}

export { mount };
