import React from "react";

import { Card, Button } from "antd";
import image from '../../asstes/images/yellowshirt.jpg'
import { Link } from "react-router-dom";


const { Meta } = Card;
export default function ProductItem(props) {
  console.log(props)
  return (
    <Link to="ProductDetail">
    <Card
      hoverable
      style={{
        width: 250,
        height: 350,
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5
      }}
      cover={<img alt="example" src={props.item?props.item.image:image} style={{ height: 250 }} />}
    >
      <Meta title={props.item?props.item.title:'none'} />
      <Button
        type="primary"
        shape="round"
        size={"large"}
        style={{ marginTop: 10, marginLeft: 50 }}
      >
        Buy Now
      </Button>
    </Card>
    </Link>
  );
}
