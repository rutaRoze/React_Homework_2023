import { Button, Card } from "react-bootstrap";

function Product({ product, clickBuy }) {
  const { name, price, image } = product;

  return (
    <>
      <div className="col-auto p-2 ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name} </Card.Title>
            <Card.Text>{price} Eur</Card.Text>
            <Button onClick={() => clickBuy(product)} variant="primary">
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Product;
