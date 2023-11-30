import Badge from "react-bootstrap/Badge";

const DiscountBadge = ({ discount }) => {
  return (
    <>
      {discount && (
        <Badge
          pill
          bg="warning"
          text="dark"
          className="position-absolute top-0 end-0 mt-2 me-2"
        >
          On Sale!
        </Badge>
      )}
    </>
  );
};

export default DiscountBadge;
