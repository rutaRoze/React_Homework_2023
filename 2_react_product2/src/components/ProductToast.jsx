import Toast from "react-bootstrap/Toast";

function ProductToast({ hideToast, product }) {
  const { title } = product;

  return (
    <Toast autohide={true} onClose={hideToast} className="z-2 position-absolute top-0 end-0">
      <Toast.Header closeButton>
        <strong className="me-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body>Product added to cart successfully.</Toast.Body>
    </Toast>
  );
}

export default ProductToast;
