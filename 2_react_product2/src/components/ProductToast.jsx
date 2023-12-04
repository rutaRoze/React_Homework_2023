import Toast from "react-bootstrap/Toast";

function ProductToast({ hideToast, product }) {
const {title} = product;

  return (
    <Toast onClose={hideToast} className="z-2 position-absolute top-0 end-0">
      <Toast.Header closeButton>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body>Product added to cart successfully.</Toast.Body>
    </Toast>
  );
}

export default ProductToast;
