import Navigo from "navigo";
import { home } from "./pages/home";
import { about } from "./pages/about";
import { products } from "./pages/products";
import { productDetail } from "./pages/products/detail";
import { notFound } from "./pages/not-found";
import { contact } from "./pages/contact";
import { login } from "./pages/auth/login";
import { render } from "./utils/utils";
import { beforeHook } from "./hooks/before-hook";
import { account } from "./pages/account";

export const router = new Navigo('/');

router.hooks({
    before: beforeHook,
});

router.on('/', home);

router.on('/about', about);

router.on('/products', products);

router.on('/products/:productId', productDetail);

router.on('/contact', contact);

router.on('/auth/login', login);

router.on('/account', account);

router.on('*', notFound);