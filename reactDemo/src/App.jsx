import React from "react";
import ListProduct from "./components/ListProduct";

function App() {
  const lstProducs = [
    {
      url: "https://down-vn.img.susercontent.com/file/3854ad0615cfa2d15eb06a446816465d",
      title: "FREESHIP HOÀN XU EXTRA",
      price: 1000,
    },
    {
      url: "https://down-vn.img.susercontent.com/file/f05c3231cb59b6d0c233db3ea7a30b8f",
      title: "SHOP XU HƯỚNG",
      price: 1100,
    },
    {
      url: "https://down-vn.img.susercontent.com/file/40ccf6a1162d77a99cd703885034d631",
      title: "HÀNG QUỐC TẾ",
      price: 1200,
    },
    {
      url: "https://down-vn.img.susercontent.com/file/19b560edefa4b6869c0eac2f979c9f64",
      title: "SHOPEE MALL",
      price: 1300,
    },
    {
      url: "https://down-vn.img.susercontent.com/file/f4499fa8d8fec743f8d8b2e63a973e79",
      title: "SHOP HÀNG XƯỞNG",
      price: 1400,
    },
  ];

  return (
    <>
      {lstProducs.map((product, index) => {
        return (
          <ListProduct
            title={product.title}
            url={product.url}
            price={product.price}
            key={index}
          />
        );
      })}
    </>
  );
}

export default App;
