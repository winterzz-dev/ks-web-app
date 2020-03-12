import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Users from "./UsersTable";
import Modal from "./Modal";
import { Row, Col } from "antd";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Modal />
        <Row>
          <Col span={12} offset={6}>
            <Users />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
