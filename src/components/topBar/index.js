import React from "react";
import { Badge } from "antd";
import { Row, Col } from "react-bootstrap";
import { ShoppingTwoTone } from "@ant-design/icons";

import colors from "../../theme/colors";
import ukFlag from "../../asstes/images/uk_flag.png";
import { Modal, Button } from "antd";
import SignIn from "../signIn/signIn";
import SignUp from "../signUp/signUp";

const TopBar = () => {
  function countDown() {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: "This is a notification message",
      content: `This modal will be destroyed after ${secondsToGo} second.`
    });
  }
  const TopStytle = { color: colors.BLACK, fontWeight: "bold", fontSize: 15 };
  return (
    <div style={{ marginTop: 5 }}>
      <Row>
        <Col className="col-sm-3">
          Hi!{" "}
          <a style={{ color: colors.PINK, fontWeight: "bold", fontSize: 15 }} onClick={SignIn}>
            Sign in{" "}
          </a>{" "}
          or
          <a style={{ color: colors.PINK, fontWeight: "bold", fontSize: 15 }} onClick={SignUp}>
            {" "}
            Register
          </a>
        </Col>
        <Col className="col-sm-4">
          <a className="col-sm-1" style={TopStytle}>
            Daily deal
          </a>
          <a className="col-sm-1" style={TopStytle}>
            Sell
          </a>
          <a className="col-sm-2" style={TopStytle}>
            Help & Contact
          </a>
        </Col>
        <Col className="col-sm-2" />
        <Col Col className="col-sm-3">
          <img src={ukFlag} style={{ height: 15, width: 30 }}></img>
          <a style={TopStytle}> £ GBP</a>

          <Badge count={5}>
            <a href="#" className="head-example" />
            <ShoppingTwoTone
              style={{ marginLeft: 25, height: 25, width: 25 }}
              onClick={countDown}
            />
          </Badge>
          <a style={(TopStytle, { marginLeft: 25 })}>Your bag £ 3.99</a>
        </Col>
      </Row>
    </div>
  );
};

export default TopBar;
