import axios from "axios";
import Product from "./Product";
import ProductModal from "./ProductModal";
import ProductToast from "./ProductToast";
import { useState, useEffect } from "react";
import "./ProductList.css";

function ProductList() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showProduct, setShowProduct] = useState();
  const [productsArray, setProductsArray] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProductsArray(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Data is loading...</div>;
  }

  const clickShowModal = (product) => {
    setShowModal(true);
    setShowProduct(product);
  };

  const clickHideModal = () => {
    setShowModal(false);
  };

  const clickShowToast = (product) => {
    setShowToast(true);
    setShowProduct(product);
  };

  const clickHideToast = () => {
    setShowToast(false);
  };

  // console.log(showProduct)

  const mappedProducts = productsArray.map((product) => {
    return (
      <Product
        showModal={clickShowModal}
        key={product.id}
        product={product}
        id={product.id}
      />
    );
  });

  return (
    <>
      <div className="container-fluid text-center align-content-center  position-relative background-color-product-list px-5">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 background-color-product-list">
          {mappedProducts}
        </div>
      </div>

      {showModal && (
        <ProductModal
          hideModal={clickHideModal}
          showToast={clickShowToast}
          product={showProduct}
        />
      )}

      {showToast && (
        <ProductToast hideToast={clickHideToast} product={showProduct} />
      )}
    </>
  );
}

export default ProductList;
