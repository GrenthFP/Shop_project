import React from "react";
import cls from "classnames";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import pic from "./assets/placeholder.png";
import products from "./products";
import "./custom.css";
import logo from "./assets/logo.png";
import axios from "axios";
import SibersPage from "./pages/ShibersPage";
import Footer from "./assets/Footer";
import text from "./assets/text";
import Login from "./pages/Login";
import Head from "./assets/head";

function App() {
  const [picture1, set_picture] = React.useState({});
  const [produts_state, set_products_state] = React.useState(products);
  const [new_name, set_new_name] = React.useState("");
  const [new_gender, set_new_gender] = React.useState("");
  const [new_price, set_new_price] = React.useState();
  const [new_description, set_new_description] = React.useState("");

  const Submit = async () => {
    let response = await axios.post("http://localhost:5000/addShibe", {
      name: new_name,
      price: new_price,
      description: new_description,
      gender: new_gender,
      picture: picture1.file,
      key: produts_state.length,
    });

    if (response.data.error) {
      console.log("fail");
    } else {
      console.log("ok");
    }
    // console.log(picture1);
    // set_products_state([...produts_state, new_doge]);
  };

  const loadPicture = (element) => {
    let file = element.target.files[0];
    set_picture({ file: URL.createObjectURL(file) });
  };

  // ___Alternative way to for this function____
  // const loadPicture = (element) => {
  //   let file = element.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () =>
  //     set_picture({ file: file, imagepreview: reader.result });
  //   reader.readAsDataURL(file);
  // };

  return (
    <div className="w-screen">
      <Router>
        <header className="color mb-2 w-full ">
          {/* <div className=" h-15 sm:h-1  inline-flex w-full 	flex-row">
            <img src={logo} className="h-16  ml-4 my-2"></img>
            <div className="h-12 w-px bg-gray-500 mt-4 ml-auto mx-2"></div>
            <Link className="  mt-2  text-4xl " to="/">
              Shop
            </Link>
            <div className="h-12 w-px bg-gray-500 mt-4  mx-2"></div>
            <Link className=" mt-2 text-4xl  mr-2" to="/products">
              Products
            </Link>

            <div className="h-12 w-px bg-gray-500 mt-4  mr-2"></div>
            <Link
              className=" mt-2 mr-4  	text-4xl  lg:font-size-32 "
              to="/contacts"
            >
              Account
            </Link>
          </div> */}
          <Head />
        </header>
        <body className="inline-flex 	flex-row back bg_image  w-full h-screen">
          <Switch>
            <Route exact path="/">
              <div className="	w-1/2  minus-header block ">
                <h1 className="p-4 block">{text.text1}</h1>
              </div>
              <div className=" border-solid	w-1/2  minus-header inline-block p-4">
                <img src={pic}></img>
                <p>{text.text2}</p>
                <img src={pic}></img>
              </div>
            </Route>
            <Route exact path="/products">
              <SibersPage />
            </Route>
            <Route exact path="/contacts">
              <Login />
            </Route>
            <Route exact path="/products/add">
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
                  onChange={(element) =>
                    set_new_description(element.target.value)
                  }
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
            </Route>
          </Switch>
        </body>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
