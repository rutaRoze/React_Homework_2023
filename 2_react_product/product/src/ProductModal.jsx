import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import ProductToast from "./ProductToast";

function ProductModal({ title, description, quantity }) {
  const [hidden, setHidden] = useState(true);

  const changeHiddenValue = () => {
    if (hidden) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={changeHiddenValue}>
        Buy
      </Button>
      {!hidden && (
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>{description}</p>
              <p>{quantity} qty</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={changeHiddenValue}>
                Close
              </Button>
              <ProductToast title={title} />
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
    </>
  );
}

export default ProductModal;
