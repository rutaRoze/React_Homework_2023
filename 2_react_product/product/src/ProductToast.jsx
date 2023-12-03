import Toast from "react-bootstrap/Toast";
import "./ProductToast.css";

function ProductToast({ showToast, closeToast, title }) {
  return (
    <>
      <Toast
        showToast={showToast}
        closeToast={closeToast}
        className="z-2 position-absolute top-0 end-0"
      >
        <Toast.Header closeButton={true}>
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body>Product added to cart successfully</Toast.Body>
      </Toast>
    </>
  );
}

export default ProductToast;
