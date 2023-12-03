import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//import { useState } from "react";
//import ProductToast from "./ProductToast";
import "./ProductModal.css";
//mport ProductToast from "./ProductToast";

function ProductModal({ title, description, quantity, showModal,closeModal, openModalUponBay}) {
  
  //const [closedToast, setOpenToast] = useState(true);

  return (
    <>
      <div className="position-absolute top-0 start-0 modalBackground">
        <div className="modalContainer">
          <div
            className="modal show"
            style={{ display: "block", position: "initial" }}
          >
            <Modal.Dialog show={showModal} hide={closeModal} >
              <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>{description}</p>
                <p>{quantity} qty</p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => {openModalUponBay(title, description, quantity); closeModal()}} >
                  Add to Cart
                </Button>
                {/* {!closedToast && <ProductToast title={title} />} */}
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
