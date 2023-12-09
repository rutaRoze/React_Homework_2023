import { Button, Card } from "react-bootstrap";

function RoboCard({ robo, clickToReserve }) {
  const { name, email, avatar } = robo;

  return (
    <>
      <div className=" col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2 py-3 mx-5 ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={avatar} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{email}</Card.Text>
            <Button onClick={() => clickToReserve(robo)} variant="primary">
              Reserve
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default RoboCard;
