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
  pressBuyToShowModal
}) {
  const [showModal, setShowModal] = useState(false);

  // const changeShowModalValue = () => {
  //   if (showModal) {
  //     setShowModal(true);
  //   } else {
  //     setShowModal(false);
  //   }
  // };
  const buyButtonClickForShowingModal = () => {
    pressBuyToShowModal(title, description, quantity);
    setShowModal(true);
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
            <Button variant="primary" onClick={buyButtonClickForShowingModal}>
              Buy
            </Button>
            {showModal && <ProductModal title={title} description={description} quantity={quantity}/>}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Product;
