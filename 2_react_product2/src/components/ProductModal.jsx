import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProductModal({ hideModal, showToast, product }) {

const {title, description} = product;

  return (
    <div
      className="modal show position-absolute top-50 start-0"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onHide={hideModal}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              showToast(product);
              hideModal();
            }}
          >
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ProductModal;
