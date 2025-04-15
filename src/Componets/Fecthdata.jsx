import React from "react";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

const url = "https://dummyjson.com/products";

const FetchData = () => {
  const [products, setProducts] = useState([]);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.products);
      setisloading(false);
      setProducts(data.products);
    };
    getProducts();
  }, []);

  if (isloading) {
    return(<div className="flex items-center justify-center h-60">
      <BounceLoader className="#ff0000" /><br />
      <p>laoding....</p>
    </div>)
  }
  return (
    <div>
      <h1>List of Products</h1>
      <section className="flex items-center gap-2.5 flex-wrap ">
        {products.map((product) => {
          const {
            images,
            title,
            price,
            id,
            stock,
            rating,
            warrantyInformation,
          } = product;
          return (
            <div key={id} className="w-full max-w-[320px] h-[370px] shadow-md ">
              <img
                src={images[0]}
                alt={title}
                className="w-full object-cover h-[60%] "
              />
              <div className="flex gap-2.5 items-center">
                <p className="text-2xl font-bold">${price}</p>
                <p className={stock >= 30 ? "text green-400" : "text-red-400"}>
                  {" "}
                  Total stock left {stock}
                </p>
              </div>
              <p className="text-xl font-semibold">{title}</p>

              <p>{warrantyInformation}</p>

              <p className={rating > 3.5 ? "text-green-400" : "text-red-400"}>
                {rating}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FetchData;
