import Product from "./Product"

function ProductTab() {
  let options = ["hi-tech", "durable", "fast"]; // array
  return (
    <>
    <Product title="Phone" price={30000} features={options}/> {/* passing arrays as props */}
    </>
  )
}

export default ProductTab;