import React from "react";
import Layout from "./pages/Layout";
import Header from "./components/Header";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home/index";
import Services from "./pages/Services/index.js";
import Staffing from "./pages/Staffing/index.js";
import "./styles/bootstrap.scss";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route ,withRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        {/* Header Section */}
        <Header />

        {/* Layout Section */}
        <Layout>
          <Switch>
            <Route path="/about">About Us</Route>
            <Route path="/users">Usersdd</Route>
            <Route exact path="/" component={withRouter(Home)} />
            <Route exact path="/Staffing" component={withRouter(Staffing)} />
            <Route exact path={`${window.location.pathname}`} component={withRouter(Services)} />
            <Route path="*"><NotFound /></Route>
          </Switch>
        </Layout>

        {/* Footer Section - contains footer menu, get in touch button text block */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
