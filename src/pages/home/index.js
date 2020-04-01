import React, { Component } from "react";
import Background from "../../asstes/images/men_bg.jpeg";
import { Jumbotron, Row } from "react-bootstrap";
import "./styles.css";
import ProductItem from "../../components/productItem";
import TopBar from "../../components/topBar";
import TopNavBar from "../../components/topNavBar/TopNavBar";
import { Col } from "react-bootstrap";
import HomeSidebarFilter from "../../components/homefilter";
import HomeBrand from "../../components/homeBrand/homeBrand";
import colors from "../../theme/colors";
import image from '../../asstes/images/yellowshirt.jpg'



export default class Home extends Component {
  render() {
    const catagories = [
      "Accessories",
      "basics Top",
      "Bags",
      "Caps & Hats",
      "Gifts",
      "Grooming",
      "Hoodies & Sweat shirts",
      "Jackets & Coats",
      "Jeans ",
      "Jewellary",
      "joggers",
      "Jumper and Cordigans",
      "Leather Jackets",
      "Long sleeves & T-shirts",
      "Loungewear",
      "Oversized & Longline",
      "polo Shirts & shirts"
    ];
    const products = [
      {
        id: 1,
        title: "women T Shirt",
        description: "yellow shirt",
        catagory: "women",
        subCatagory: "Accessories",
        image:image,
        price: 100,
        color: colors,
        sizes: ["xs", "s", "m", "l", "xl"]
      },
      {
        id: 2,
        title: "men T Shirt",
        description: "yellow shirt",
        catagory: "men",
        subCatagory: "basics Top",
        image:
          image,
        price: 100,
        color: colors,
        sizes: ["xs", "s", "m", "l", "xl"]
      },
      {
        id: 3,
        title: "ADidas",
        description: "yellow shirt",
        catagory: "shoes",
        subCatagory: "Bags",
        image:
          image,
        price: 100,
        color: colors,
        sizes: ["xs", "s", "m", "l", "xl"]
      },
      {
        id: 4,
        title: "women T Shirt",
        description: "yellow shirt",
        catagory: "women",
        subCatagory: "Caps & Hats",
        image:
          image,
        price: 100,
        color: colors,
        sizes: ["xs", "s", "m", "l", "xl"]
      }
    ];
    return (
      <div>
        <TopBar />
        <TopNavBar></TopNavBar>
        <Jumbotron className="bg_image">
          <h1>Mens wear</h1>
          <table className="table table-borderless">
            <tbody>
              {catagories.map((value, index) => {
                if (index % 3 == 0 && index > 1) {
                  return (
                    <tr>
                      <td style={{ color: "white", fontSize: 20, width: 250 }}>
                        {catagories[index - 2]}
                      </td>
                      <td style={{ color: "white", fontSize: 20, width: 250 }}>
                        {catagories[index - 1]}
                      </td>
                      <td style={{ color: "white", fontSize: 20, width: 250 }}>
                        {catagories[index]}
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </Jumbotron>
        <Row>
          <Col className="col-sm-3">
            <HomeSidebarFilter />
          </Col>
          <Col>
            <div className="container">
              <Row>
                {products.map((value, index) => {
                  if (index < 12)
                    return (
                      
                        <ProductItem item={value}></ProductItem>
                      
                    );
                })}
              </Row>
            </div>
          </Col>
        </Row>
        <HomeBrand></HomeBrand>
      </div>
    );
  }
}
