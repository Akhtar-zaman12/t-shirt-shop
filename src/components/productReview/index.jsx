import React, { Component } from 'react';
import colors from '../../theme/colors'
import { StarFilled, StarOutlined ,HeartOutlined, MessageOutlined} from '@ant-design/icons';
import { Col, Row } from 'antd';

export default class ProductReview extends Component {
  render() {
    return (
      <div> 
          <p  style={{fontSize:20, color:colors.BLACK}}>Product reviews</p>
          {[1,2].map((value,index)=>{
              return <Row>
                <div className='col-sm-3'>
                    <Row>
                        <StarFilled style={{color:colors.PINK}}/>
                        <StarFilled style={{color:colors.PINK}}/>
                        <StarFilled style={{color:colors.PINK}}/>
                        <StarFilled style={{color:colors.PINK}}/>
                        <StarOutlined/>
                    </Row>
                    <p style={{fontSize:15, color:colors.BLACK, marginTop:10}}>pablo permins</p>
                    <p style={{fontSize:10, color:colors.LIGHTGRAY, marginTop:-10}}>2 days ago</p>

                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-6">
                    <p style={{color:colors.LIGHTGRAY, fontSize:12}}>Get organic stars & Seller Ratings in Google & Bing to reduce spend on PPC adverts, improve click-through rates, boost conversion, and enhance your sales & customer trust.</p>
                    <Row>
                        <HeartOutlined style={{color:colors.PINK, margintop:5}}/>
                        <p style={{color:colors.LIGHTGRAY, fontSize:10}}> 116</p>

                        <MessageOutlined style={{color:colors.GRAY, margintop:5, marginLeft:20}}/>
                        <p style={{color:colors.LIGHTGRAY, fontSize:10}}> 6</p>
                    </Row>
                </div>

                
            </Row>
          })}
          <hr/>
    </div>
    );
  }
}
