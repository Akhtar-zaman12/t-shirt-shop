import React, { Component } from 'react'
import colors from '../../theme/colors'
import { Input, Row, Col, Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { StarFilled, StarOutlined} from '@ant-design/icons';

export default class AddProductReview extends Component {
    render() {
        return (
            <div>
                <p style={{color:colors.BLACK}}>Add Product Review</p>
                <Row>
                    <Col className='col-sm-3'>
                        Choose a nick name
                    </Col>
                    <Col className='col-sm-3'>
                        <Input type='text'></Input>
                    </Col>
                    <Col className='col-sm-6'/>
                </Row>
                <Row style={{marginTop:10}}>
                    <Col className='col-sm-3'>
                        Your Review
                    </Col>
                    <Col className='col-sm-3'>
                        <TextArea></TextArea>
                        <p style={{color:colors.LIGHTGRAY, fontSize:10}}>Your review must be atleast 50 characters</p>
                    </Col>
                    <Col className='col-sm-6'/>
                </Row>

                <Row style={{marginTop:10}}>
                    <Col className='col-sm-3'>
                        Overall rating
                    </Col>
                    <Col className='col-sm-3'>
                       <Row>
                            <StarFilled style={{color:colors.PINK}}/>
                            <StarFilled style={{color:colors.PINK}}/>
                            <StarFilled style={{color:colors.PINK}}/>
                            <StarFilled style={{color:colors.PINK}}/>
                            <StarOutlined/>
                        </Row>
                        <Button style={{backgroundColor:colors.PINK, color:colors.WHITE,marginTop:20, borderRadius:20}}>Submit</Button>
                    </Col>
                    <Col className='col-sm-6'/>
                </Row>
            </div>
        )
    }
}
