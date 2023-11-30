import Product from "./Product";

function ProductList() {
  const products = [
    {
      id: 1,
      image:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1679331794-best-t-shirts-for-women-madewell-muscle-tee-641891bac026e.png?crop=0.928xw:0.748xh;0.0369xw,0.0840xh&resize=980:*",
      title: "T-shirt",
      description: "Black and light for everyday comfort",
      price: 9,
      quantity: 100,
      category: "Woman",
      discount: true,
    },
    {
      id: 2,
      image:
        "https://www.40colori.com/cdn/shop/products/P05-01-NS04018_2048x.jpg?v=1620733186",
      title: "Trousers",
      description: "Loose linen trousers",
      price: 89,
      quantity: 0,
      category: "Man",
    },
    {
      id: 3,
      image:
        "https://image-resizing.booztcdn.com/2nd-day/2da2231152206_cmeteoriteblack_v194008.webp?has_grey=1&has_webp=1&dpr=2.5&size=w400",
      title: "Skirt",
      description: "Black pencil skirt",
      price: 20,
      quantity: 10,
      category: "Woman",
      discount: true,
    },
    {
      id: 4,
      image:
        "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwae997f02/images/d_08/M9166_D_08X1.jpg?sw=406",
      title: "Shoes",
      description: "Conversese trainers for everyday adventures",
      price: 130,
      quantity: 30,
      category: "Man",
    },
    {
      id: 5,
      image:
        "https://www.mortels.com.au/cdn/shop/files/tan_521x457_crop_center.jpg?v=1687416040",
      title: "Gloves",
      description: "Leather brown with insulation",
      price: 25,
      quantity: 5,
      category: "Woman",
      discount: true,
    },
    {
      id: 6,
      image:
        "https://assets.manufactum.de/p/205/205259/205259_01.jpg/ladies-blouse-ruffles.jpg?profile=pdsmain_1000",
      title: "Blouse",
      description: "Elegant white blouse",
      price: 30,
      quantity: 0,
      category: "Woman",
      discount: true,
    },
  ];

  const mappedProducts = products.map((product) => {
    return (
      <Product
        key={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        quantity={product.quantity}
        category={product.category}
        discount={product.discount}
      />
    );
  });

  return (
    <>
      <div className="container text-center m-3">
        <div className="row row-cols-3 ">
          <div className="col">{mappedProducts}</div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
