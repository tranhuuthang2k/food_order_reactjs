import React, { useState } from "react";
import HeadTotal from "./HeadTotal";
import FooterTotal from "./FooterTotal";
import "../style.css";
function ProductItem({ ListPizza, setListOrder, listOrder, setlistPizza }) {
  const Total = () => {
    let result = ListPizza.listPizza.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    return result;
  };
  console.log(listOrder);
  return (
    <>
      <div className="container">
        <HeadTotal
          Total={Total}
          ListPizza={ListPizza}
          setlistPizza={setlistPizza}
          setListOrder={setListOrder}
        />
        {ListPizza.listPizza.map((index, item) => (
          <div className="container_productItem" key={item}>
            <div>
              <p>{index.name}</p>
              <p>{index.price}$</p>
            </div>
            <div className="quantity_product">
              <button
                className="button_minus"
                onClick={() => {
                  var found = ListPizza.listPizza.find(
                    (item) => item.id === index.id
                  );
                  if (found) {
                    if (found.quantity <= 0) {
                      found.quantity = 0;
                    } else {
                      found.quantity--;
                      setlistPizza({ ...ListPizza });
                    }
                    if (found.quantity === 0) {
                      setListOrder(
                        listOrder.filter((item, key) => item.id !== index.id)
                      );
                    }
                  }
                }}
              >
                -
              </button>
              <div className="quantity">
                <p>{index.quantity}</p>
              </div>
              <button
                className="button_incre"
                onClick={(e) => {
                  e.preventDefault();
                  var found = ListPizza.listPizza.find(
                    (item) => item.id === index.id
                  );
                  if (found) {
                    found.quantity++;
                    setlistPizza({ ...ListPizza });
                  }
                  if (found.quantity === 1) {
                    setListOrder([
                      ...listOrder,
                      { image: index.image, id: index.id },
                    ]);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <FooterTotal Total={Total} />
      </div>
    </>
  );
}

export default ProductItem;
