import axios from "axios";
import Product from "./Product";
import ProductModal from "./ProductModal";
import ProductToast from "./ProductToast";
import { useState, useEffect } from "react";

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

  console.log(showProduct)

  const mappedProducts = productsArray.map((product) => {
    return (
      <Product
      showModal={clickShowModal}
      key={product.id}
      product={product}
      />
    );
  });

  return (
    <>
      <div className="container text-center position-relative">
        <div className="row row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
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
