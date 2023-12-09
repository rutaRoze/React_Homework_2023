function ShopCart({ products, totalPrice }) {
  console.log({ products });

  const mappedProductsCart = products.map((product) => {
    return (
      <>
        <div className="col-4">
          <li className="list-group-item border border-0">
            {product.name}, quantity: {product.count} Kg
          </li>
        </div>
      </>
    );
  });

  console.log({ mappedProductsCart });

  return (
    <>
      <div className="d-flex justify-content-center pt-5">
        <div className="container text-start  ">
          <div className="row">
            <h3 className="ps-3">Shoping cart</h3>
            <ul className="list-group">{mappedProductsCart}</ul>
            <h5 className="ps-3 py-2">Total price: {totalPrice} eur</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopCart;
