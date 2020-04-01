import React, { Component } from "react";
import { Steps, Divider, Card, Row, Button, Col } from "antd";
import colors from "../../theme/colors";
import Delivery from "../../components/checkout/delivery";
import Confirmation from "../../components/checkout/confirmation";
import PaymentComponent from "../../components/checkout/payment";
import FinishComponent from "../../components/checkout/finish";
import Cart from "../../components/checkout/cart";
import TopNavBar from "../../components/topNavBar/TopNavBar";

const { Step } = Steps;

export default class Checkout extends Component {
  state = {
    step: 0,
    isCart: true
  };

  render() {
    return (
      <div>
        <TopNavBar></TopNavBar>
        <Card
          style={{ marginTop: 30, width: "70%", marginLeft: "15%" }}
          hoverable
        >
          {!this.state.isCart && (
            <Steps progressDot current={this.state.step}>
              <Step title="Delivery" />
              <Step title="Confirmation" />
              <Step title="Payment" />
              <Step title="Finish" />
            </Steps>
          )}
          {this.state.isCart && (
            <Card>
              <Cart></Cart>
            </Card>
          )}
          {this.state.step == 0 && !this.state.isCart && (
            <Card>
              <Delivery />
            </Card>
          )}
          {this.state.step === 1 && !this.state.isCart && (
            <Card>
              <Confirmation />
            </Card>
          )}
          {this.state.step === 2 && !this.state.isCart && (
            <Card>
              <PaymentComponent />
            </Card>
          )}
          {this.state.step === 3 && !this.state.isCart && (
            <Card>
              <FinishComponent />
            </Card>
          )}

          {this.state.step < 3 && !this.state.isCart && (
            <Row style={{ backgroundColor: colors.OFFWIITE, height: 60 }}>
              <Col className="col-sm-3">
                <Button
                  style={{
                    width: 120,
                    backgroundColor: colors.WHITE,
                    color: colors.PINK,
                    borderRadius: 20,
                    marginTop: 10
                  }}
                  onClick={() => {
                    if (this.state.step > 0) {
                      this.setState({ step: this.state.step - 1 });
                    }
                  }}
                >
                  {" "}
                  Back
                </Button>
              </Col>
              <Col className="col-sm-6" />
              <Col className="col-sm-3">
                <Button
                  style={{
                    width: 120,
                    backgroundColor: colors.PINK,
                    color: colors.WHITE,
                    borderRadius: 20,
                    marginTop: 10
                  }}
                  onClick={() => {
                    this.setState({ step: this.state.step + 1 });
                  }}
                >
                  {" "}
                  Next step
                </Button>
              </Col>
            </Row>
          )}

          {this.state.isCart && (
            <Row>
              <Col className="col-sm-3">
                <Button
                  style={{
                    width: 120,
                    backgroundColor: colors.WHITE,
                    color: colors.PINK,
                    borderRadius: 20,
                    marginTop: 10
                  }}
                  onClick={() => {
                    if (this.state.step > 0) {
                      this.setState({ step: this.state.step - 1 });
                    }
                  }}
                >
                  {" "}
                  Back
                </Button>
              </Col>
              <Col className="col-sm-6" />
              <Col className="col-sm-3">
                <Button
                  style={{
                    width: 120,
                    backgroundColor: colors.PINK,
                    color: colors.WHITE,
                    borderRadius: 20,
                    marginTop: 10
                  }}
                  onClick={() => {
                    this.setState({ isCart: false });
                  }}
                >
                  {" "}
                  Checkout
                </Button>
              </Col>
            </Row>
          )}
        </Card>
      </div>
    );
  }
}
