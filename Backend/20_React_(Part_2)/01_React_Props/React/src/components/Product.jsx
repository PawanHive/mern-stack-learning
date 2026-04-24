import "./Product.css"; // we can also import .css files 

function Product({title, price = 1}) { // price = 1 is default value (work only if no value passed from component props) // 'props' is an object in which different different key:value pair stored. so we can access them directly by descructuring, and this key:value comes from where component render it-self
  return (
    <div className="Product">
      <h1>{title}</h1>
      <p>Price : {price}</p>
    </div>
  );
}

export default Product;
