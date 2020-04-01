import React, { Component } from 'react'
import colors from '../../theme/colors'
import { Col, Row, Input, Checkbox, Radio } from 'antd'

export default class Delivery extends Component {
    

    constructor(props){
        super(props)
        this.state={
            FirstName:'',
            LastName:'',
            Address:'', 
            City:'', 
            state:'',
            ZipCode:''
          }
    }
    handlechange(e){
        if(e.target.name=='firstName')
            this.setState({FirstName:e.target.value})
        else if(e.target.name=='secondName')
            this.setState({LastName:e.target.value})
        else if(e.target.name=='state')
            this.setState({state:e.target.value})
        else if(e.target.name=='city')
            this.setState({City:e.target.value})
        else if(e.target.name=='zipCode')
            this.setState({ZipCode:e.target.value})
        else if(e.target.name=='address')
            this.setState({Address:e.target.value})
    }

    handleSubmit(){
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <Row style={{margin:30}}> 
                    <div className="col-sm-6">
                        <Col>
                            <p style={{color:colors.GRAY}}>Fist Name*</p>
                            <Input type='text' name='firstName' value={this.state.FirstName} onChange={(e)=>{this.handlechange(e)}} style={{width:250}}></Input>
                        </Col>
                    </div>
                    <div className="col-sm-6">
                    <Col>
                            <p style={{color:colors.GRAY}}>Last Name*</p>
                            <Input type='text' name='secondName' style={{width:250}}></Input>
                        </Col>
                    </div>
                </Row>
                <Row style={{margin:30}}> 
                    <div className="col-sm-6">
                        <Col>
                            <p style={{color:colors.GRAY}}>Address*</p>
                            <Input type='text' name='address' style={{width:250}}></Input>
                        </Col>
                    </div>
                    <div className="col-sm-6">
                    <Col>
                            <p style={{color:colors.GRAY}}>City*</p>
                            <Input type='text' name='city' style={{width:250}}></Input>
                        </Col>
                    </div>
                </Row>
                <Row style={{margin:30}}> 
                    <div className="col-sm-6">
                        <Col>
                            <p style={{color:colors.GRAY}}>State*</p>
                            <Input type='text' name='state' style={{width:250}}></Input>
                        </Col>
                    </div>
                    <div className="col-sm-6">
                    <Col>
                            <p style={{color:colors.GRAY}}>Zip code*</p>
                            <Input type='text' name='zipCode' style={{width:250}}></Input>
                        </Col>
                    </div>
                </Row>

                <div style={{marginLeft:40, marginTop:40}}>
                    <p style={{color:colors.LIGHTGRAY, fontSize:13}}>Country: <a style={{color:colors.BLACK}}>Great britain</a></p>
                    <Row>
                    <Checkbox/>
                    <p style={{marginLeft:10}}>My billing information is same as delivery information</p>
                    
                    </Row>
                    <hr/>
                </div>

                <div style={{marginLeft:40, marginTop:40}}>
                    <p style={{color:colors.LIGHTGRAY, fontSize:13}}>Country: <a style={{color:colors.BLACK}}>Great britain</a></p>
                    <Row>
                        <Col className='col-sm-4'>
                            <Radio></Radio>
                            <p style={{color:colors.BLACK, fontSize:15}}>Standard shipping<a style={{color:colors.LIGHTGRAY}}>(free: 2-3 business days)</a></p>
                        </Col>
                        <div className="col-sm-3"></div>
                        <Col className='col-sm-4'>
                            <Radio></Radio>
                            <p style={{color:colors.BLACK, fontSize:15}}>Express shipping<a style={{color:colors.LIGHTGRAY}}>(£28, 1-2 business days)</a></p>
                        </Col>
                      </Row>
                    <hr/>
                </div>
            </div>
        )
    }
}
