import React, { Component } from 'react'
import { Card, Radio, Slider} from 'antd';
import colors from '../../theme/colors'
import { Row, Button, Col } from 'react-bootstrap';
import { CirclePicker } from 'react-color';
import { MdClose } from "react-icons/md";


export default class HomeSidebarFilter extends Component {
   

    render() {
        const  marks = {
            0: '£ 0',
            26: '£ 26',
            47: '£ 47',
            100: {
              style: {
                color: colors.PINK,
              },
              label: <strong> £100</strong>,
            },
          };
        return (
            <div style={{marginLeft:30}}>
                <Card
                    hoverable
                    style={{ height:720, marginTop:20, marginLeft:5, marginRight:5}}
                    >
                    <div>
                        <p style={{color:colors.BLACK, fontSize:20}}>Filter 486 items</p>
                        <p style={{color:colors.LIGHTGRAY, fontSize:15}}><MdClose size={15}/> Gender: <a style={{color:colors.BLACK}}>female</a></p>
                        <p style={{color:colors.LIGHTGRAY, fontSize:15}}><MdClose size={15}/> Catagory: <a style={{color:colors.BLACK}}>Dresses</a></p>
                    </div>
                    <hr/>

                    <div>
                    <p style={{color:colors.LIGHTGRAY, fontSize:20}}>Color</p>
                    <Row style={{marginLeft:5}}>
                        <CirclePicker colors={colors} circleSize={20} 
                            onChangeComplete={color=>{console.log(color)}}
                        ></CirclePicker>
                    </Row>
                    <p style={{color:colors.LIGHTGRAY, fontSize:20, marginTop:10}}>Size</p>
                        <Row style={{marginTop:10}}>
                            {['XS','S','M','L','XL'].map((item, index)=>{
                                if(index==1) return <Button type='primary' style={{background:colors.PINK,marginLeft:5, borderColor:colors.PINK}}>{item}</Button>
                                else return <Button style={{background:colors.LIGHTGRAY,marginLeft:5, borderColor:colors.LIGHTGRAY}}>{item}</Button>
                            })}
                        </Row>

                    <p style={{color:colors.LIGHTGRAY, fontSize:20, marginTop:10}}>Price Range</p>
                        
                           <Slider range marks={marks} defaultValue={[26, 47]} />
                        
                        
                    <p style={{color:colors.LIGHTGRAY, fontSize:20, marginTop:60}}>Barnds</p>
                        <Row style={{marginTop:10}}>
                             {['Abercrombie','Fitch','Adidas Orignal','ASOS','Cheap Monday'].map((value, index)=>{
                                 return <div class="col">
                                            <div class="form-check" style={{width:'100%'}}>
                                                <input class="form-check-input" type="checkbox" id="gridCheck" style={{height:20, width:20}} />
                                                <label class="form-check-label" for="gridCheck" style={{fontSize:20}}>
                                                    {value}
                                                </label>
                                            </div>
                                        </div>
                                        
                                                          
                             })}
                        </Row>
                        
                    </div>
                    

            </Card>
                
            </div>
        )
    }
}
