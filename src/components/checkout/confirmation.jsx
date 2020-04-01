import React, { Component } from 'react'
import { Row } from 'antd';
import colors from '../../theme/colors'

export default class Confirmation extends Component {
    render() {
        let data=[ {title:'Green T-shirt 2016 men BK3567', quantity:7,price:450},
                    {title:'Yellow pants kids WN8749', quantity:8,price:24},
                    {title:'Top shoes winter black WN9065', quantity:7,price:67},
                    {title:'Brown jacket women RT67564', quantity:3,price:87}, ]
        return (
            
            <Row style={{marginLeft:40, marginTop:40}}>
                <div className="col-sm-6">
                <p style={{color:colors.BLACK, fontWeight:'bold'}}>Order summary</p>
                <table class="table table-striped">
                    <tbody style={{color:colors.GRAY}}>
                        <tr>
                        <td>Item</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        </tr>
                        {data.map((item,index)=>{
                            return <tr style={{fontSize:12}}>
                                        <td>{item.title}</td>
                                        <td>{item.quantity}</td>
                                        <td style={{color:colors.PINK}}>{'£'+item.price}</td>
                                    </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-4">
                <p style={{color:colors.BLACK, fontWeight:'bold'}}>Delivery</p>
                <p style={{color:colors.LIGHTGRAY}}>Address</p>
                <p style={{color:colors.LIGHTGRAY, fontSize:12}}>Office 64, 8 column row, Brimingham, England, 64000</p>
                <p style={{color:colors.LIGHTGRAY}}>Delivery Option</p>
                <p style={{color:colors.LIGHTGRAY , fontSize:12}}>Standard Delivery (free 2-3 business days)</p>
            </div>
            </Row>
        );
    }
}
