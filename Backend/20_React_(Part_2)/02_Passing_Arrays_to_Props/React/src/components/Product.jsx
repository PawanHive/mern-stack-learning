import "./Product.css"; // we can also import .css files

function Product({ title, price, features, features2 }) {
  const list = features.map((feature) => <li>{feature}</li>)

  return (
    <div className="Product">
      <h1>{title}</h1>
      <p>Price : {price}</p>
      {/* <p>{list}</p> */}
      <p>{features.map((feature) => <li>{feature}</li>)}</p> {/* here we directly written the logic  */}
    </div>
  );
}

export default Product;
