import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DiscountBadge from "./DiscountBadge";
import { useNavigate } from "react-router-dom";
import "./Product.css"

function Product({ product, showModal }) {
  const {
    images,
    title,
    //description,
    price,
    //category,
    discountPercentage,
    id,
  } = product;

  const navigate = useNavigate();

  return (
    <div className="col p-4 background-c ">
      <a role="button" onClick={() => navigate(`/productlist/${id}`)}>
        <Card className="w-100 h-100" style={{ width: "18rem" }}>
          <div className="position-relative ">
            <Card.Img className="imageSize" variant="top" src={images[0]} />
            <DiscountBadge discount={discountPercentage} />
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text> {price} Eur</Card.Text>
            {/* <Card.Text> {description}</Card.Text> */}
            {/* <Card.Text className="p-3"> {category} </Card.Text> */}
            <Button
              className=""
              variant="primary"
              onClick={(event) => {
                event.stopPropagation();
                showModal(product);
              }}
            >
              Buy
            </Button>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

export default Product;
