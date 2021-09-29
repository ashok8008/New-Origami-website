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
            <Route exact path="/Staffing" component={withRouter(Staffing)} />
            <Route path="/"><Home /></Route>
            <Route exact path="/" component={withRouter(Home)} />
            <Route exact path={`${window.location.pathname}`} component={withRouter(Services)} />
            {/* <Route exact path="/Services/ecommerce-Website-Services" component={withRouter(Services)} />
            <Route exact path="/Services/corporate-Website-Services" component={withRouter(Services)} />
            <Route exact path="/Services/B2B-Website-Design" component={withRouter(Services)} />
            <Route exact path="/Services/Website-Maintenance" component={withRouter(Services)} />
            <Route exact path="/Services/Website-Consulting" component={withRouter(Services)} />
            <Route exact path="/Services/Hybrid-App-Development" component={withRouter(Services)} />
            <Route exact path="/Services/Wearable-App-Development" component={withRouter(Services)} />
            <Route exact path="/Services/Backend-Development" component={withRouter(Services)} />
            <Route exact path="/Services/Mobile-Application-Testing" component={withRouter(Services)} />
            <Route exact path="/Services/Discovery&Design" component={withRouter(Services)} />
            <Route exact path="/Services/Research&Planning" component={withRouter(Services)} />
            <Route exact path="/Services/UI-Design" component={withRouter(Services)} />
            <Route exact path="/Services/UX-Design" component={withRouter(Services)} />
            <Route exact path="/Services/Prototype-Development" component={withRouter(Services)} />
            <Route exact path="/Services/MVP-Development" component={withRouter(Services)} /> */}
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
