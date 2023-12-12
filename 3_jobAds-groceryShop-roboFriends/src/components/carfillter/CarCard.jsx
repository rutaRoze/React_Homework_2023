import { Card } from "react-bootstrap";

function CarCard({ car }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
                <Card.Body>
          <Card.Text>
            {car.name}
          </Card.Text>
          <Card.Text>
            {car.release_year}
          </Card.Text>
          <Card.Text>
            {car.price}
          </Card.Text>
          <Card.Img variant="top" src={car.url} />
        </Card.Body>
      </Card>
    </>
  );
}

export default CarCard;
