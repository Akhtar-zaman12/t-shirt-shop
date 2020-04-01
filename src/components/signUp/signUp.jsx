import React from "react";
import { Modal, Button, Input, Radio, Checkbox, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Password from "antd/lib/input/Password";
import colors from "../../theme/colors";

const { confirm } = Modal;

export default function SignUp() {
  confirm({
    title: <p>Sign Up</p>,
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
        <Password
          size="large"
          placeholder="Retype password"
          style={{ margin: 10 }}
        ></Password>

        <Checkbox style={{ margin: 10 }}>Remember me</Checkbox>
        <Row>
          <div className="col-sm-8">
            <p style={{ fontSize: 10 }}>
              Already have an account{" "}
              <a style={{ color: colors.PINK }} onClick={SignUp}>Sign In</a>
            </p>
          </div>
        </Row>
      </div>
    ),
    okText: "SignUp",

    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log("Oops errors!"));
    },
    onCancel() {}
  });
}
