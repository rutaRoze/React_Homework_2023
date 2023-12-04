import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DiscountBadge from "./DiscountBadge";

function Product({ product, showModal }) {
  const { images, title, description, price, category, discountPercentage } = product;

  return (
    <div className="col p-2">
      <Card style={{ width: "18rem" }}>
        <div className="position-relative">
          <Card.Img variant="top" src={images[0]} />
          <DiscountBadge discount={discountPercentage} />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text> {price} Eur</Card.Text>
          <Card.Text> {description}</Card.Text>
          <Card.Text> {category} </Card.Text>
          <Button
            variant="primary"
            onClick={() => showModal(product)}
          >
            Buy
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
