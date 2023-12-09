import { Card } from "react-bootstrap";
import "./ReservedRoboCard.css";

function ReservedRoboCard({ robo }) {
  const { name, email, avatar } = robo;
  return (
    <>
      <div className=" col-8 col-sm-6 col-md-4 col-lg-3 col-xl-2 py-3 mx-5 ">
        <Card style={{ width: "18rem" }}>
          <Card.Img className="reserved-robo" variant="top" src={avatar} />
          <Card.Body>
            <Card.Title className="reserved-robo">{name}</Card.Title>
            <Card.Text className="reserved-robo">{email}</Card.Text>
            <Card.Text className="reserved-text">Reserved</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default ReservedRoboCard;
