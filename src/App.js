import React from "react";
import cls from "classnames";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import pic from "./assets/placeholder.png";
import products from "./products";
import "./custom.css";
import logo from "./assets/logo.png";

function App() {
  const [picture1, set_picture] = React.useState({});
  const [produts_state, set_products_state] = React.useState(products);
  const [new_name, set_new_name] = React.useState("");
  const [new_gender, set_new_gender] = React.useState("");
  const [new_price, set_new_price] = React.useState();
  const [new_description, set_new_description] = React.useState("");

  const Submit = () => {
    let new_doge = {
      name: new_name,
      price: new_price,
      description: new_description,
      gender: new_gender,
      picture: picture1.file,
      key: produts_state.length,
    };
    console.log(picture1);
    set_products_state([...produts_state, new_doge]);
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
    <div>
      <Router>
        <header className="color mb-2 ">
          <div className=" font-size-32 h-16 inline-flex w-full 	flex-row">
            <img src={logo} className="h-16 ml-4 my-2"></img>
            <div className="h-12 w-px bg-gray-500 mt-4 ml-auto mx-2"></div>
            <Link className="  mt-2  font-size-32 " to="/">
              Shop
            </Link>
            <div className="h-12 w-px bg-gray-500 mt-4  mx-2"></div>
            <Link className=" mt-2 font-size-32 mr-2" to="/products">
              Products
            </Link>

            <div className="h-12 w-px bg-gray-500 mt-4  mr-2"></div>
            <Link className=" mt-2 mr-4  	font-size-32  " to="/contacts">
              Contacts
            </Link>
          </div>
        </header>
        <body className="inline-flex 	flex-row back bg_image  w-full h-screen">
          <Switch>
            <Route exact path="/">
              <div className="	w-1/2  minus-header ">
                <h1 className="p-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Amet commodo nulla facilisi nullam vehicula ipsum a. Eu
                  volutpat odio facilisis mauris sit amet. Adipiscing elit ut
                  aliquam purus sit. Lacus viverra vitae congue eu consequat ac.
                  Eu mi bibendum neque egestas congue. Erat velit scelerisque in
                  dictum non. Varius vel pharetra vel turpis nunc. Dui nunc
                  mattis enim ut tellus elementum sagittis. Nisl purus in mollis
                  nunc sed id semper risus. Sed augue lacus viverra vitae.
                  Senectus et netus et malesuada fames ac. Elementum integer
                  enim neque volutpat ac. Tortor id aliquet lectus proin nibh
                  nisl condimentum id venenatis. Scelerisque varius morbi enim
                  nunc faucibus a pellentesque. Dui id ornare arcu odio ut. At
                  elementum eu facilisis sed odio morbi quis. Integer feugiat
                  scelerisque varius morbi enim nunc faucibus a. Neque gravida
                  in fermentum et sollicitudin ac. Et malesuada fames ac turpis.
                  Neque gravida in fermentum et sollicitudin ac orci phasellus.
                  Lectus sit amet est placerat in. Arcu non odio euismod
                  lacinia. Non arcu risus quis varius quam quisque id diam.
                  Ultricies mi eget mauris pharetra. Non diam phasellus
                  vestibulum lorem sed risus ultricies tristique nulla. Turpis
                  egestas sed tempus urna et. Etiam sit amet nisl purus. Enim
                  nunc faucibus a pellentesque. In metus vulputate eu
                  scelerisque felis imperdiet. Massa id neque aliquam vestibulum
                  morbi blandit cursus risus. Vitae elementum curabitur vitae
                  nunc. Erat velit scelerisque in dictum non consectetur. Elit
                  duis tristique sollicitudin nibh. Semper auctor neque vitae
                  tempus quam pellentesque. Amet venenatis urna cursus eget nunc
                  scelerisque viverra mauris in. Dui id ornare arcu odio ut.
                  Enim nec dui nunc mattis enim ut. Consectetur lorem donec
                  massa sapien faucibus. Ultrices gravida dictum fusce ut
                  placerat orci nulla. At varius vel pharetra vel turpis nunc
                  eget lorem dolor. Aliquam nulla facilisi cras fermentum. In
                  fermentum posuere urna nec tincidunt praesent semper feugiat
                  nibh. Feugiat nibh sed pulvinar proin. Elit ut aliquam purus
                  sit amet luctus venenatis. Et egestas quis ipsum suspendisse
                  ultrices gravida dictum fusce ut. Malesuada nunc vel risus
                  commodo viverra maecenas accumsan lacus. Quam lacus
                  suspendisse faucibus interdum posuere lorem ipsum. Sed lectus
                  vestibulum mattis ullamcorper velit sed ullamcorper morbi
                  tincidunt. Nulla pharetra diam sit amet nisl.
                </h1>
              </div>
              <div className=" border-solid	w-1/2  minus-header inline-block p-4">
                <img src={pic}></img>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Amet commodo nulla facilisi nullam vehicula ipsum a.
                </p>
                <img src={pic}></img>
              </div>
            </Route>
            <Route exact path="/products">
              <div className="flex flex-row">
                {produts_state.map((product) => (
                  <div
                    className="border-gray-600 border-solid border-2 w-48 p-4 m-2 height"
                    // style={{ height: "400px" }}
                  >
                    <img
                      className="w-40 h-40"
                      key={product.key}
                      src={product.picture}
                    ></img>
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
            </Route>
            <Route exact path="/contacts">
              <div></div>
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
        <footer class="footer bg-white relative pt-1 border-b-2 border-blue-700 bg-gray-300">
          <div class="container mx-auto px-6">
            <div class="sm:flex sm:mt-8">
              <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div class="flex flex-col">
                  <span class="font-bold text-gray-700 uppercase mb-2">
                    Footer header 1
                  </span>
                  <span class="my-2">
                    <a
                      href="#"
                      class="text-blue-700  text-md hover:text-blue-500"
                    >
                      link 1
                    </a>
                  </span>
                  <span class="my-2">
                    <a
                      href="#"
                      class="text-blue-700  text-md hover:text-blue-500"
                    >
                      link 1
                    </a>
                  </span>
                  <span class="my-2">
                    <a
                      href="#"
                      class="text-blue-700  text-md hover:text-blue-500"
                    >
                      link 1
                    </a>
                  </span>
                </div>
                <div class="flex flex-col">
                  <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                    Footer header 2
                  </span>
                  <span class="my-2">
                    <a
                      href="#"
                      class="text-blue-700 text-md hover:text-blue-500"
                    >
                      link 1
                    </a>
                  </span>
                  <span class="my-2">
                    <a
                      href="#"
                      class="text-blue-700  text-md hover:text-blue-500"
                    >
                      link 1
                    </a>
                  </span>
                  <span class="my-2">
                    <a
                      href="#"
                      class="text-blue-700 text-md hover:text-blue-500"
                    >
                      link 1
                    </a>
                  </span>
                </div>
                <div class="flex flex-col">
                  <span class="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                    Footer header 3
                  </span>
                  <span class="my-2">
                    <a
                      href="#"
                      class="text-blue-700  text-md hover:text-blue-500"
                    >
                      link 1
                    </a>
                  </span>
                  <span class="my-2">
                    <a
                      href="#"
                      class="text-blue-700  text-md hover:text-blue-500"
                    >
                      link 1
                    </a>
                  </span>
                  <span class="my-2">
                    <a
                      href="#"
                      class="text-blue-700  text-md hover:text-blue-500"
                    >
                      link 1
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="container mx-auto px-6">
            <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
              <div class="sm:w-2/3 text-center py-6">
                <p class="text-sm text-blue-700 font-bold mb-2">
                  © 2020 Shop Project
                </p>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
