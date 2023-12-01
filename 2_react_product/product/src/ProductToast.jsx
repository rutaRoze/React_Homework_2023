import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import Button from "react-bootstrap/Button";

function ProductToast({ title }) {
  const [closedToast, setOpenToast] = useState(true);

  const changeOpenToastValue = () => {
    if (closedToast) {
      setOpenToast(false);
    } else {
      setOpenToast(true);
    }
  };
  return (
    <>
      <Button variant="primary" onClick={changeOpenToastValue}>
        Add to Cart
      </Button>
      {!closedToast && (
        <Toast>
          <Toast.Header onClick={changeOpenToastValue}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{title}</strong>
          </Toast.Header>
          <Toast.Body>Product added to cart successfully</Toast.Body>
        </Toast>
      )}
    </>
  );
}

export default ProductToast;
