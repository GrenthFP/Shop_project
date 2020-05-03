import React from "react";
import axios from "axios";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";

export default function AddSibersPage() {
  const [picture1, set_picture] = React.useState({});
  const [produts_state, set_products_state] = React.useState(0);
  const [new_name, set_new_name] = React.useState("");
  const [new_gender, set_new_gender] = React.useState("");
  const [new_price, set_new_price] = React.useState();
  const [new_description, set_new_description] = React.useState("");

  const Submit = async () => {
    let response = await axios.post(
      "https://fifa-bois-backend.herokuapp.com/addShibe",
      {
        name: new_name,
        price: new_price,
        description: new_description,
        gender: new_gender,
        picture: picture1.file,
        key: produts_state.length,
      }
    );

    if (response.data.error) {
      console.log("fail");
    } else {
      console.log("ok");
    }
    set_products_state(set_products_state + 1);
  };

  const loadPicture = (element) => {
    let file = element.target.files[0];
    set_picture({ file: URL.createObjectURL(file) });
  };
  return (
    <div className="flex flex-col m-4">
      <input
        className="rounded-r px-4 py-2 w-full border-black border-solid my-2 bg-gray-200 ml-2"
        placeholder="Write Name here..."
        type="text"
        onChange={(element) => set_new_name(element.target.value)}
      />
      <input
        className="border border-2 rounded-r px-4 py-2 w-full bg-gray-200 my-2 ml-2"
        placeholder="Write Gender here..."
        type="text"
        onChange={(element) => set_new_gender(element.target.value)}
      />
      <input
        className="border border-2 rounded-r px-4 py-2 w-full bg-gray-200 my-2 ml-2"
        placeholder="Write Description here..."
        type="text"
        onChange={(element) => set_new_description(element.target.value)}
      />
      <input
        className="border border-2 rounded-r px-4 py-2 w-full bg-gray-200 my-2 ml-2"
        placeholder="Write price here..."
        type="number"
        onChange={(element) => set_new_price(element.target.value)}
      />
      <input
        onChange={(element) => loadPicture(element)}
        className="m-2"
        type="file"
        accept="image/x-png,image/gif,image/jpeg"
      />
      <div>
        <button
          onClick={Submit}
          className="tracking-wider text-white bg-orange-500  text-sm rounded leading-loose mx-2 font-semibold m-2 "
        >
          <Link className="px-4 py-1" to="/products">
            Submit
          </Link>
        </button>
      </div>
    </div>
  );
}
