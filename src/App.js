import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./layout/DashboardLayout";
import EventRequest from "./pages/EventRequest";
import MainCalendar from "./pages/MainCalendar";

function App() {
  return (
    <Router>
      <Switch>
        <DashboardLayout>
          <Route exact path="/event/create" component={EventRequest} />
          <Route exact path="/" component={MainCalendar} />
        </DashboardLayout>
      </Switch>
    </Router>
  );
}

export default App;
