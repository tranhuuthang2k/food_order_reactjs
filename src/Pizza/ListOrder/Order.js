import React from "react";

function Order({ listOrder }) {
  return (
    <div>
      <div>
        <p>Your Pizza</p>
      </div>
      <div className="container_image_order">
        {listOrder.map((index, key) => (
          <div key={key}>
            <img src={index.image} alt="error" width={200} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
