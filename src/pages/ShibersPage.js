import React, { useEffect } from "react";
import axios from "axios";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";
import { config } from "../utilities/ServerConstants";

export default function SibersPage() {
  //automated function to get objects data fromt he backend
  const [shuber, setshuber] = React.useState([]);
  useEffect(() => {
    const respose = async () => {
      try {
        let currentShiber = await axios.get(config.url.API_URL_getShibbers);
        setshuber(currentShiber.data.shiber);
      } catch (error) {
        console.log(error);
      }
    };
    respose();
  }, []);

  return (
    <div className="flex flex-row min-h-full">
      {shuber.map((product) => (
        <div
          className="border-gray-600 border-solid border-2 w-48 p-4 m-2 height"
          style={{ height: "400px" }}
        >
          <p className="h-10">Name: {product.name}</p>
          <p className="h-10">Gender: {product.gender}</p>
          <p className="h-10">Price: {product.price}$ </p>
          <p className="h-32">Description: {product.traits} </p>
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
