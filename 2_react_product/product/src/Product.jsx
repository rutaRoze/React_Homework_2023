import DiscountBadge from "./DiscountBadge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Product({
  image,
  title,
  description,
  price,
  quantity,
  category,
  discount,
}) {
  return (
    <>
      <div className="container m-3 ">
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
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Product;
