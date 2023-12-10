function IceCreamTotalPrice({ totalPrice, discount }) {
  return (
    <div>
      <p>Discount: {discount} %</p>
      <p>Subtotal: {totalPrice.priceBeforeDiscount}</p>
      <p>Total: {totalPrice.priceAfterDiscount}</p>
    </div>
  );
}

export default IceCreamTotalPrice;
