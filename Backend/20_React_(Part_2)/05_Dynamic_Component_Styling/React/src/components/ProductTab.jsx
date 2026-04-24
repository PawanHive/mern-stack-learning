import Product from "./Product"

function ProductTab() {
  let options = ["hi-tech", "durable", "fast"]; // array
  return (
    <>
    <Product title="Phone" price={30000}/> 
    <Product title="Laptop" price={40000}/> 
    <Product title="Watch" price={2000}/> 
    </>
  )
}

export default ProductTab;