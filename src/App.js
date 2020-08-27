import React from "react";
import "./App.css";
import Issues from "./components/Issues";
import { Breadcrumb } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="w-75 mx-auto">
        <Breadcrumb>
          <Breadcrumb.Item href="">NewtonSchool</Breadcrumb.Item>
          <Breadcrumb.Item href="">Hackathon</Breadcrumb.Item>
          <Breadcrumb.Item active>issues</Breadcrumb.Item>
        </Breadcrumb>
        <Issues />
      </div>
    </>
  );
}

export default App;
