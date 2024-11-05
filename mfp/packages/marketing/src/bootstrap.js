import React from 'react';
import ReactDom from 'react-dom';

const mount = (el) => {
	ReactDom.render(<h1>Hi there...!</h1>, el);
};

if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#_marketing-dev-root');
	if (el) {
		mount(el);
	}
}

export { mount };
