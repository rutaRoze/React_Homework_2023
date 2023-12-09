import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
import ShopCart from "./ShopCart";

function ProductList() {
  const [productArray, setProductArray] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [openShopCart, setOpenShopCart] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
      )
      .then((response) => {
        setProductArray(response.data);
        console.log("my", response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Data is loading...</div>;
  }

  const addToCart = (product) => {
    //update count if already exists
    const serchedProductInCart = productsInCart.find(
      (cartProduct) => cartProduct.name === product.name
    );

    if (serchedProductInCart) {
      serchedProductInCart.count = serchedProductInCart.count + 1;
      return;
    }

    //create new
    let productInCart = {
      name: product.name,
      count: 1,
    };

    setProductsInCart([...productsInCart, productInCart]);
  };

  const handleClickBuy = (product) => {
    setOpenShopCart(true);
    addToCart(product);
    setTotalPrice(totalPrice + product.price);
  };

  const mappedProducts = productArray.map((product) => {
    return (
      <Product key={product.id} product={product} clickBuy={handleClickBuy} />
    );
  });

  console.log({ mappedProducts });

  return (
    <>
      {openShopCart && (
        <ShopCart products={productsInCart} totalPrice={totalPrice} />
      )}
      <div className="container">
        <div className="row ">{mappedProducts}</div>
      </div>
    </>
  );
}

export default ProductList;
