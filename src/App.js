import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import "./custom.css";
import SibersPage from "./pages/ShibersPage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Head from "./components/Head";
import ShiberAddPage from "./pages/AddShiberPage";
import MainPage from "./pages/MainPage";
import bg from "./assets/bg.jpg";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen flex flex-col"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Head />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/products">
            <SibersPage />
          </Route>
          <Route exact path="/contacts">
            <Login />
          </Route>
          <Route exact path="/products/add">
            <ShiberAddPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
