import React, { useEffect } from "react";
import Axios from "axios";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";

export default function SibersPage() {
  const [Shuber, set_Shuber] = React.useState([]);
  useEffect(() => {
    const respose = async () => {
      let all_shibers = await Axios.get(
        "https://fifa-bois-backend.herokuapp.com/getShibers"
      );
      set_Shuber(all_shibers.data.shiber);
    };
    respose();
  }, [Shuber]);

  return (
    <div className="flex flex-row min-h-full">
      {Shuber.map((product) => (
        <div
          className="border-gray-600 border-solid border-2 w-48 p-4 m-2 height"
          style={{ height: "400px" }}
        >
          {/* <img
            className="w-40 h-40"
            key={product.key}
            src={product.picture}
          ></img> */}
          <p className="h-10">Name: {product.name}</p>
          <p className="h-10">Gender: {product.gender}</p>
          <p className="h-10">Price: {product.price}$ </p>
          <p className="h-32">Traits: {product.description} </p>
        </div>
      ))}
      <div>
        <button className="tracking-wider text-white bg-orange-500  text-sm rounded leading-loose mx-2 font-semibold m-2 ">
          <Link className="px-4 py-1" to="/products/add">
            Add Dogge
          </Link>
        </button>
      </div>
    </div>
  );
}
