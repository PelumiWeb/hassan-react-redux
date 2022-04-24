import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Details from "./screens/Details";
import Homepage from "./screens/Homepage"

export default function App() {
  return (
    <Router>
      <Routes> 
          <Route path="/"  element={<Homepage />} />
          <Route path="/:id"  element={<Details />} />
      </Routes>
    </Router>
  );
}
