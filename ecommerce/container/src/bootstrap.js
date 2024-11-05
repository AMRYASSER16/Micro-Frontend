import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartIndex';

productsMount(document.querySelector('#dev-products'));
cartMount(document.querySelector('#dev-cart'));