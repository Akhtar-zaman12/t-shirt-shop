import React from "react";
import { Modal, Button, Input, Radio, Checkbox, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Password from "antd/lib/input/Password";
import colors from "../../theme/colors";
import SignUp from "../signUp/signUp";

const { confirm } = Modal;

export default function SignIn() {
  confirm({
    title: <p>sign In</p>,
    content: (
      <div>
        <Input
          size="large"
          placeholder="Email"
          type="email"
          prefix={<UserOutlined />}
          style={{ margin: 10 }}
        />
        <Password
          size="large"
          placeholder="password"
          style={{ margin: 10 }}
        ></Password>
        <Checkbox style={{ margin: 10 }}>Remember me</Checkbox>
        <Row>
          <div className="col-sm-4">
            <p style={{ fontSize: 10, color: colors.PINK }}>Forgot password</p>
          </div>
          <div className="col-sm-4"></div>

          <div className="col-sm-4">
            <p style={{ fontSize: 10, color: colors.PINK }} onClick={SignUp}>Have an account</p>
          </div>
        </Row>
      </div>
    ),
    okText: "SignIn",

    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        
      }).catch(() => console.log("Oops errors!"));
    },
    onCancel() {}
  });
}
