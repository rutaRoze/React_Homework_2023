import { Button, Modal } from "react-bootstrap";

function NewProductConfirmation({ product, hideConfirmation }) {
  const { title, price, category } = product;

  //console.log("here", product);

  return (
    <>
      <div
        className="modal show position-absolute"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title> Item added to product list successfuly.</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Product: {title} </p>
            <p>Price: {price} Eur</p>
            <p>Category: {category}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={hideConfirmation}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
}

export default NewProductConfirmation;
