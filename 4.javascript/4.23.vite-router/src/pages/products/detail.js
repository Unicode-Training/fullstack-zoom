import { render } from "../../utils/utils";

export const productDetail = ({ data }) => {
    const { productId } = data;
    render(`<h1>Product detail: ${productId}</h1>`);
}