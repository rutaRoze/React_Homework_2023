import DiscountBadge from "./DiscountBadge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import ProductModal from "./ProductModal";
//import ProductToast from "./ProductToast";

function Product({
  image,
  title,
  description,
  price,
  quantity,
  category,  
  discount,
  
}) {
  const [showModal, setShowModal] = useState(false);

const openModalUponBay = () => {
  setShowModal(true);
}

const closeModal = () => {
  setShowModal(false);
}
  
  return (
    <>
      <div className="col p-3 ">
        <Card style={{ width: "18rem" }}>
          <div className="position-relative">
            <Card.Img variant="top" src={image} />
            <DiscountBadge discount={discount} />
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text> {price} Eur</Card.Text>
            <Card.Text> {quantity} qty</Card.Text>
            <Card.Text> {description}</Card.Text>
            <Card.Text> {category} </Card.Text>
            <Card.Text> {discount} </Card.Text>
            <Button variant="primary" onClick={openModalUponBay}>
              Buy
            </Button>
          </Card.Body>
        </Card>

        <ProductModal 
        showModal={showModal}
        closeModal={closeModal}
        openModalUponBay={openModalUponBay}
        title={title} description={description} quantity={quantity}/>

      </div>
    </>
  );
}

export default Product;
