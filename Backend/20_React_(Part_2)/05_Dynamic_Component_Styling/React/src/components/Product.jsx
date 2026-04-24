import "./Product.css"; // we can also import .css files

function Product({ title, price }) {
  // // ------------------------ 1st Way: Dynamic Component Styling --------------------------------   
  // let styles = { backgroundColor: "blue"}
  // return (
  //   <div className="Product" style={styles}> {/* REMEMBER: this syntax of adding any styling variable to "style" attribute */}
  //     <h1>{title}</h1>
  //     <p>Price : {price}</p>
  //     {price > 30000 && <p>Discount of 5%</p>}
  //   </div>
  // );
  
  
  // ------------------------ 2nd Way: Dynamic Component Styling --------------------------------   
  let styles = {backgroundColor: price > 30000 ? "blue" : "yellow"} // make component bg blue who matches this condition, else will be yellow
  return (
    <div className="Product" style={styles}> 
      <h1>{title}</h1>
      <p>Price : {price}</p>
      {price > 30000 && <p>Discount of 5%</p>}
    </div>
  );


  // // ------------------------ Refactoring 2nd Way: Dynamic Component Styling --------------------------------   
  // let isDiscount = price > 30000;
  // let styles = {backgroundColor: isDiscount ? "blue" : "yellow"} // make component bg blue who matches this condition, else will be yellow
  // return (
  //   <div className="Product" style={styles}> 
  //     <h1>{title}</h1>
  //     <p>Price : {price}</p>
  //     {isDiscount && <p>Discount of 5%</p>}
  //   </div>
  // );
}

export default Product;
