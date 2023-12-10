import { Button } from "react-bootstrap";

function IceCreamFlavors({iceCream, buyIceCream}) {
  return (
    <>
      <div>
        <Button onClick={() => buyIceCream(iceCream)}>{iceCream.flavor}</Button>
      </div>
    </>
  );
}

export default IceCreamFlavors;
