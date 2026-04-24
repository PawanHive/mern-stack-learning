import Product from "./Product"

function ProductTab() {
  return (
    <>
    <Product title="Phone" price={30000}/> {/* to pass no. as value: must written under {} braces */}
    <Product title="laptop" price="40,000"/> {/* 'title' and 'price' are known as "props" being passed to the product component */}
    <Product title="pen"price="10"/> {/* we can say we are calling product function or component */}
    </>
  )
}

export default ProductTab;