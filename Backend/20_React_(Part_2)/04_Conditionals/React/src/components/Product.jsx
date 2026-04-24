import "./Product.css"; // we can also import .css files

function Product({ title, price }) {
  // -----------------------     FIRST WAY: CONDITIONALS ---------------------------------
  // if (price > 30000) {

  //   return (
  //     <div className="Product">
  //       <h1>{title}</h1>
  //       <p>Price : {price}</p>
  //       <p>Discount of 5%</p>
  //     </div>
  //   );
  // }
  // else {

  //   return (
  //     <div className="Product">
  //       <h1>{title}</h1>
  //       <p>Price : {price}</p>
  //     </div>
  //   );
  // }

  // // -----------------------    2nd Way: CONDITIONALS -----------------------    
  // return (
  //   <div className="Product">
  //     <h1>{title}</h1>
  //     <p>Price : {price}</p>
  //     {price > 30000 ? <p>Discount of 5%</p>: <a href="/">Get Discount</a>}
  //   </div>
  // );

  //-----------------------     3RD Way: CONDITIONALS -----------------------    
  return (
    <div className="Product">
      <h1>{title}</h1>
      <p>Price : {price}</p>
      {price > 30000 && <p>Discount of 5%</p>}
    </div>
  );
}

export default Product;
