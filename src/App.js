import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import SibersPage from "./pages/ShibersPage";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Head from "./components/Head";
import ShiberAddPage from "./pages/AddShiber";
import MainPage from "./pages/MainPage";
import bg from "./assets/images/bg.jpg";

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
          <Route exact path="/" component={MainPage} />

          <Route exact path="/products" component={SibersPage} />

          <Route exact path="/contacts" component={Login} />

          <Route exact path="/products/add" component={ShiberAddPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
