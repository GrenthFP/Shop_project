import React from "react";
import axios from "axios";

export default function Login() {
  const [usernameState, setUsernameState] = React.useState("");
  const [passwordState, setPasswordState] = React.useState("");
  const [answere, setAnswer] = React.useState("");
  //function that sends the login attempt data to the backend and displays an answer
  const Login_func = async () => {
    let response = await axios.post(
      "https://fifa-bois-backend.herokuapp.com/Login_check",
      {
        username: usernameState,
        password: passwordState,
      }
    );
    console.log(response.data.answer);
    setAnswer(response.data.answer);
  };
  //function that sends the registration attempt data to the backend and displays an answer
  const Register_func = async () => {
    try {
      let response = await axios.post(
        "https://fifa-bois-backend.herokuapp.com/register",
        {
          username: usernameState,
          password: passwordState,
        }
      );

      if (response.data.error) {
        console.log("fail");
        setAnswer("Failed");
      } else {
        console.log("ok");
        setAnswer("Registered");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Log in:</h2>
      <input
        className="border border-2 rounded-r px-4 py-2 w-full bg-gray-200 my-2 ml-2"
        placeholder="Write Username here..."
        type="text"
        onChange={(element) => setUsernameState(element.target.value)}
      />
      <input
        className="border border-2 rounded-r px-4 py-2 w-full bg-gray-200 my-2 ml-2"
        placeholder="Write Password here..."
        type="text"
        onChange={(element) => setPasswordState(element.target.value)}
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
