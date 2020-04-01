import React, { Component } from 'react'
import { Row, Radio, Card, Input, DatePicker } from 'antd'
import paypal from '../../asstes/images/paypal.png'
import visa from '../../asstes/images/visa.jpg'
import { Image } from 'react-bootstrap'
import colors from '../../theme/colors'
import { UserOutlined, LockOutlined, CreditCardOutlined} from '@ant-design/icons';


export default class PaymentComponent extends Component {
    render() {
        return (
            <Row style={{margin:40}}>
                <div className="col-sm-5">
                    <Card hoverable style={{margin:10, width:'100%'}}>
                        <div style={{height:150, width:'100%', }}>
                            <Image src={visa} style={{height:90, width:250, marginLeft:10}}></Image>
                            <Row style={{margin:20, marginLeft:10}}> 
                                <Radio></Radio>
                                <p style={{color:colors.BLACK}}>Pay £340 with credit card</p>
                            </Row>

                        </div>
                    </Card>
                    <div style={{marginLeft:10}} >
                        <p style={{color:colors.LIGHTGRAY, fontWeight:'bold'}}>Cardholder's Name</p>
                        <Input placeholder="Name" addonAfter={<UserOutlined />} />
                        <Row style={{marginTop:20}}>
                            <div >
                                <p style={{color:colors.LIGHTGRAY, fontWeight:'bold'}}>Valid thru</p>
                                <DatePicker  picker="month" placeholder='YYYY-MM' />
                            </div>
                            <div style={{marginLeft:20}}>
                                <p style={{color:colors.LIGHTGRAY, fontWeight:'bold'}}>CVC</p>
                                <Input style={{width:150}} addonAfter={<LockOutlined />} />
                            </div>
                        </Row>
                    </div>
                    

                </div>

                
                <div className="col-sm-1"></div>
                <div className="col-sm-5">
                    <Card hoverable style={{margin:10, width:'100%'}}>
                        <div style={{height:150, width:'100%', }}>
                            <Image src={paypal} style={{height:90, width:250, marginLeft:10}}></Image>
                            <Row style={{margin:20, marginLeft:10}}> 
                                <Radio></Radio>
                                <p style={{color:colors.BLACK}}>Pay £340 with PayPal</p>
                            </Row>

                        </div>
                    </Card>
                    <div style={{marginLeft:10}} >
                        <p style={{color:colors.LIGHTGRAY, fontWeight:'bold'}}>Card number</p>
                        <Input placeholder="**** **** **** ****"  addonAfter={<CreditCardOutlined />} />
                        <Row style={{marginTop:20}}>
                            
                            <div style={{marginTop:40}}>
                            <p style={{color:colors.LIGHTGRAY, fontSize:12}}>*CVV or CVC is the card security code, unique three digits number on the back of the card separate from its number</p>

                            </div>
                        </Row>
                    </div>
                </div>
            </Row>
        )
    }
}
