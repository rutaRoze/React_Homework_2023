import Product from "./Product";

function ProductList() {
  const product = {
    image: "img",
    title: "t-shirt",
    description: "white and nice",
    price: 12,
    quantity: 10,
  };

  return (
    <>
      <Product
        productInfo={product}
        image="img"
        title="t-shirt1"
        description="white and nice"
        price={12}
        quantity={10}
      />

      <Product
        productInfo={product}
        image="img"
        title="t-shirt2"
        description="white and nice"
        price={12}
        quantity={10}
      />

      <Product
        productInfo={product}
        image="img"
        title="t-shirt3"
        description="white and nice"
        price={12}
        quantity={10}
      />

      <Product
        productInfo={product}
        image="img"
        title="t-shirt4"
        description="white and nice"
        price={12}
        quantity={10}
      />

      <Product
        productInfo={product}
        image="img"
        title="t-shirt5"
        description="white and nice"
        price={12}
        quantity={10}
      />

      <Product
        productInfo={product}
        image="img"
        title="t-shirt6"
        description="white and nice"
        price={12}
        quantity={10}
      />
    </>
  );
}

export default ProductList;
