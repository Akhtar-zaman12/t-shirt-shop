import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import colors from "../../theme/colors";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import image from '../../asstes/images/yellowshirt.jpg'

export default class Cart extends Component {

    _renderItem(){
        return(
            <Row style={{ marginLeft: 40, marginTop:10}}>
            <Col className="col-sm-7">
              <Row>
                  <Col >
                      <img src={image} style={{height:80, width:80, border:'solid', borderColor:colors.LIGHTGRAY, borderWidth:1}}/>
                  </Col>
                  <Col style={{marginLeft:20}}>
                      <p style={{fontSize:15, fontWeight:'bold'}}>Yellow shirt </p>
                      <p style={{color:colors.LIGHTGRAY}}>Mens T-shirt</p>
                  </Col>
              </Row>
            </Col>
            <Col className="col-sm-1" style={{marginTop:20}}>
              <a>XXL</a>
            </Col>
            <Col className="col-sm-2" style={{marginTop:20}}>
              <Row>
                <button
                  style={{
                    borderRadius: 30,
                    height: 30,
                    width: 30,
                    color: colors.PINK
                  }}
                  // onClick={() => {
                  //   this.setState({ quantity: this.state.quantity + 1 });
                  // }}
                >
                  -
                </button>
                <p
                  style={{
                    fontSize: 18,
                    color: colors.LIGHTGRAY,
                    marginLeft: 20,
                    marginRight: 20
                  }}
                >
                  {6}
                </p>
                <button
                  style={{ borderRadius: 30, height: 30, width: 30, color:colors.PINK }}
                  // onClick={() => {
                  //   this.setState({ quantity: this.state.quantity + 1 });
                  // }}
                >
                  +
                </button>
              </Row>
            </Col>
            <Col className="col-sm-2" style={{marginTop:20}}>
              <a style={{ fontWeight: "bold" }}> $767</a>
            </Col>
          </Row>
        );
    }

  render() {
    let data = [
      { title: "Green T-shirt 2016 men BK3567", quantity: 7, price: 450 },
      { title: "Yellow pants kids WN8749", quantity: 8, price: 24 },
      { title: "Top shoes winter black WN9065", quantity: 7, price: 67 },
      { title: "Brown jacket women RT67564", quantity: 3, price: 87 }
    ];
    return (
      <div>
        <h4 style={{ marginLeft: 40 }}>4 items in your cart</h4>
        <Row style={{ marginLeft: 40, marginTop: 40 }}>
          <Col className="col-sm-7">
            <a style={{ color: colors.LIGHTGRAY, fontWeight: "bold" }}>Item</a>
          </Col>
          <Col className="col-sm-1">
            <a style={{ color: colors.LIGHTGRAY, fontWeight: "bold" }}>Size</a>
          </Col>
          <Col className="col-sm-2">
            <a style={{ color: colors.LIGHTGRAY, fontWeight: "bold" }}>
              Quantity
            </a>
          </Col>
          <Col className="col-sm-2">
            <a style={{ color: colors.LIGHTGRAY, fontWeight: "bold" }}>Price</a>
          </Col>
        </Row>
        <hr />
       {this._renderItem()}
       {this._renderItem()}
       {this._renderItem()}
       {this._renderItem()}
      </div>
    );
  }
}
