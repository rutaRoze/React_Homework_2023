import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DiscountBadge from "./DiscountBadge";

function Product({
  image,
  title,
  description,
  price,
  quantity,
  category,
  discount,
  showModal,
}) {
  return (
    <div className="col">
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
          <Card.Text>Some quick example text.</Card.Text>
          <Button variant="primary" onClick={() => showModal(title, description, quantity)}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
