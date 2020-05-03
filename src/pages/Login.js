import React from "react";
import axios from "axios";

export default function Login() {
  const [username_state, set_username_state] = React.useState("");
  const [password_state, set_password_state] = React.useState("");
  const [answere, setAnswer] = React.useState("");

  const Login_func = async () => {
    let response = await axios.post(
      "https://fifa-bois-backend.herokuapp.com/Login_check",
      {
        username: username_state,
        password: password_state,
      }
    );
    console.log(response.data.answer);
    setAnswer(response.data.answer);
  };

  const Register_func = async () => {
    let response = await axios.post(
      "https://fifa-bois-backend.herokuapp.com/register",
      {
        username: username_state,
        password: password_state,
      }
    );

    if (response.data.error) {
      console.log("fail");
      setAnswer("Failed");
    } else {
      console.log("ok");
      setAnswer("Registered");
    }
  };

  return (
    <div>
      <h2>Log in:</h2>
      <input
        className="border border-2 rounded-r px-4 py-2 w-full bg-gray-200 my-2 ml-2"
        placeholder="Write Username here..."
        type="text"
        onChange={(element) => set_username_state(element.target.value)}
      />
      <input
        className="border border-2 rounded-r px-4 py-2 w-full bg-gray-200 my-2 ml-2"
        placeholder="Write Password here..."
        type="text"
        onChange={(element) => set_password_state(element.target.value)}
      />
      <label>{answere}</label>
      <button
        onClick={Login_func}
        className="tracking-wider text-white bg-orange-500  text-sm rounded leading-loose mx-2 font-semibold m-2 p-1"
      >
        Sign in
      </button>
      <button
        onClick={Register_func}
        className="tracking-wider text-white bg-orange-500  text-sm rounded leading-loose mx-2 font-semibold m-2 p-1"
      >
        Register
      </button>
    </div>
  );
}
