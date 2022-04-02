import React from "react";
import "../style.css";
function HeadTotal({ Total, ListPizza, setlistPizza, setListOrder }) {
  return (
    <div className="container_head">
      <p className="title_pizza">Your Pizza</p>
      <p className="price">{Total()}$</p>
      <button
        className="reset_pizza"
        onClick={() => {
          ListPizza.listPizza.map((item, key) => {
            setlistPizza({
              ...ListPizza,
              quantity: (ListPizza.listPizza[key].quantity = 0),
            });
          });
          setListOrder([]);
        }}
      >
        Reset Pizza
      </button>
    </div>
  );
}

export default HeadTotal;
