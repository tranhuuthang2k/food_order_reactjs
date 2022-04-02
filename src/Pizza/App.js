import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem/ProductItem";
import Order from "./ListOrder/Order";
function App() {
  const ListPizza = [
    {
      id: 0,
      name: "Pizza nam",
      price: 200,
      quantity: 0,
      image:
        "https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg",
    },
    {
      id: 1,
      name: "Pizza ot chuong",
      price: 450,
      quantity: 0,
      image:
        "https://image.shutterstock.com/image-vector/img-file-document-icon-260nw-1356823577.jpg",
    },
    {
      id: 3,
      name: "Pizza nam",
      price: 850,
      quantity: 0,
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
  ];
  const [listPizzaitem, setlistPizza] = useState({
    listPizza: [],
  });
  useEffect(() => {
    setlistPizza({
      listPizza: ListPizza,
    });
  }, []);

  const [listOrder, setListOrder] = useState([]);

  return (
    <div className="wrapper">
      <Order listOrder={listOrder} />
      <ProductItem
        ListPizza={listPizzaitem}
        setListOrder={setListOrder}
        listOrder={listOrder}
        setlistPizza={setlistPizza}
      />
    </div>
  );
}

export default App;
