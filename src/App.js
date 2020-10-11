import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CreateEvent from "./components/Calendar/CreateEvent";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <Router>
      <Switch>
        <DashboardLayout>
          <Route component={CreateEvent} />
        </DashboardLayout>
      </Switch>
    </Router>
  );
}

export default App;
