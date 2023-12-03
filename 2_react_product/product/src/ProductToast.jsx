import Toast from "react-bootstrap/Toast";
import "./ProductToast.css";
//import Button from "react-bootstrap/Button";

function ProductToast({ title}) {

  return (
    <>
        <Toast>
          <Toast.Header closeButton={false}>
            <strong className="me-auto">{title}</strong>
          </Toast.Header>
          <Toast.Body>Product added to cart successfully</Toast.Body>
        </Toast>
    </>
  );
}

export default ProductToast;
