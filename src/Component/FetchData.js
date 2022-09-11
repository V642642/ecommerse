import React from "react";

import Cart from "./Cart";
import { UsestateValue } from "./State";

const FetchData = ({ eco, filterData, search }) => {
    const [{ basket }, dispatch] = UsestateValue();
    console.log(basket, "basket");
  //   const add = () => {
  //     dispatch({
  //       type: "ADD",
  //       payload : {
  // image: "image"

  //       }
  //     });
  //   };

  // console.log(basket, "jy");
  return (
    <div>
      {eco
        ?.filter((data) => {
          if (search === "") {
            return data;
          } else if (data.title.toLowerCase().includes(search.toLowerCase())) {
            return data;
          }
        })
        ?.filter((data) => {
          if (filterData === "") {
            return data;
          } else {
            return data.category === filterData;
          }
        })
        ?.map((value, index) => {
          return (
            <Cart
              id={value.id}
              image={value.image}
              price={value.price}
              title={value.title}
              quantity={1}
            />
          );
        })}
    </div>
  );
};

export default FetchData;
