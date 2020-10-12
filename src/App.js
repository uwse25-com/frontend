import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
import EventRequest from "./pages/EventRequest";
import MainCalendar from "./pages/MainCalendar";
import AuthLayout from "./layout/AuthLayout";

function App() {
  return (
    <Auth0Provider
      domain="uwse25.us.auth0.com"
      clientId="eB0Nteo76k6JmKoVwPeuVXoXlKTGrVaB"
      redirectUri={window.location.origin}
      scope=""
      audience="https://www.uwse25.com"
    >
      <AuthLayout>
        <Router>
          <Switch>
            <DashboardLayout>
              <Route exact path="/event/create" component={EventRequest} />
              <Route exact path="/" component={MainCalendar} />
            </DashboardLayout>
          </Switch>
        </Router>
      </AuthLayout>
    </Auth0Provider>
  );
}

export default App;
