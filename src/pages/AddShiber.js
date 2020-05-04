import React, { useState } from "react";
import axios from "axios";
import { config } from "../utilities/ServerConstants";
import { useHistory } from "react-router-dom";

export default function AddSibersPage() {
  let history = useHistory();

  //object to be sent to the backend
  const [requestObject, setRequestObject] = useState({
    name: "",
    gender: "",
    price: 0,
    description: "",
  });
  //function for submitting the object
  const submit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(config.url.API_URL_addShibe, {
        name: requestObject.name,
        price: requestObject.price,
        description: requestObject.description,
        gender: requestObject.gender,
        key: { number: Math.random() * 99999 },
      });

      if (response.data.error) {
        console.log("fail");
      } else {
        console.log("ok");
      }
    } catch (errorReqest) {
      console.log(errorReqest);
    }
    history.push("/products");
  };
  return (
    <div className="flex flex-col m-4">
      <form onSubmit={submit}>
        <input
          className="rounded-r px-4 py-2 w-full border-black border-solid my-2 bg-gray-200 ml-2"
          placeholder="Write Name here..."
          type="text"
          onChange={(element) =>
            setRequestObject({ ...requestObject, name: element.target.value })
          }
          required
        />
        <input
          className="border border-2 rounded-r px-4 py-2 w-full bg-gray-200 my-2 ml-2"
          placeholder="Write Gender here..."
          type="text"
          onChange={(element) =>
            setRequestObject({ ...requestObject, gender: element.target.value })
          }
          required
        />
        <input
          className="border border-2 rounded-r px-4 py-2 w-full bg-gray-200 my-2 ml-2"
          placeholder="Write Description here..."
          type="text"
          onChange={(element) =>
            setRequestObject({
              ...requestObject,
              description: element.target.value,
            })
          }
          required
        />
        <input
          className="border border-2 rounded-r px-4 py-2 w-full bg-gray-200 my-2 ml-2"
          placeholder="Write price here..."
          type="number"
          onChange={(element) =>
            setRequestObject({ ...requestObject, price: element.target.value })
          }
          required
        />

        <input
          type="submit"
          value="submit"
          className="tracking-wider text-white bg-orange-500  text-sm rounded leading-loose mx-2 font-semibold m-2 px-4 py-1"
        />
      </form>
    </div>
  );
}
