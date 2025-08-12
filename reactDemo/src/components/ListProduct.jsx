import React from "react";

function ListProduct({ title, url, price }) {
  console.log(title, url, price);
  
  return <div style={{width: "300px"}}>
    <img src={url} style={{width: "100%", height: "auto"}}></img>
    <div>{title}</div>
    <div>Từ {price}</div>
  </div>;
}

export default ListProduct;
