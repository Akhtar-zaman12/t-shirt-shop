import React, { Component } from 'react'
import TopBar from '../../components/topBar'
import TopNavBar from '../../components/topNavBar/TopNavBar'
import { Card, Col, Row, Button } from 'antd'
import colors from '../../theme/colors'
import image from '../../asstes/images/yellowshirt.jpg'
import imageblack from '../../asstes/images/blackshirt.png'
import imageshirt from '../../asstes/images/shirt.jpg'
import men_bg from '../../asstes/images/men_bg.jpeg'
import { StarFilled, StarOutlined, PlusOutlined,MinusOutlined ,HeartOutlined, HeartFilled} from '@ant-design/icons';
import { CirclePicker } from 'react-color'
import ProductReview from '../../components/productReview'
import AddProductReview from '../../components/addProductReview'
import ProductItem from '../../components/productItem/index'


export default class productDetail extends Component {
    
        state={
            selectedImage:image,
            image1:image,
            image2:imageblack,
            image3:imageshirt,
            image4:men_bg,
            quantity:1,
            selectedsize:'S',
            heart:HeartOutlined, 
            isAdded:false
        }
    

    render() {
        let selectedStyle={height:90, width:90, margin:5 ,border:'solid', borderWidth:1, borderColor:colors.PINK}
        let selectedSize={background:colors.PINK,marginLeft:5, borderColor:colors.PINK,height:30, width:60}
        return (

            <div>
                <TopBar></TopBar>
                <TopNavBar></TopNavBar>
                <div>
                <Card
                    hoverable
                    style={{margin:20}}>
                    
                    <Row>
                    <Col className='col-sm-6'>
                            <img src={this.state.selectedImage} style={{height:400, width:400, }}></img>
                        <Row>
                            <img src={this.state.image1} 
                            style={this.state.selectedImage==this.state.image1?selectedStyle:{height:90, width:90, margin:5 }} 
                            onClick={()=>{this.setState({selectedImage:this.state.image1})}}></img>

                            <img src={this.state.image2} 
                            style={this.state.selectedImage==this.state.image2?selectedStyle:{height:90, width:90, margin:5}} 
                            onClick={()=>{this.setState({selectedImage:this.state.image2})}}></img>

                            <img src={this.state.image3} 
                            style={this.state.selectedImage==this.state.image3?selectedStyle:{height:90, width:90, margin:5}} 
                            onClick={()=>{this.setState({selectedImage:this.state.image3})}}></img>

                            <img src={this.state.image4} 
                            style={this.state.selectedImage==this.state.image4?selectedStyle:{height:90, width:90, margin:5}} 
                            onClick={()=>{this.setState({selectedImage:this.state.image4})}}></img>
                        </Row>
                    </Col >
                    <Col className='col-sm-6' style={{borderColor:colors.PINK}}>
                        <p style={{fontSize:20, color:colors.LIGHTGRAY}}>Home . Catagories . Mens Clothing and accessories</p>
                        <Row>
                            <StarFilled style={{color:colors.PINK}}/>
                            <StarFilled style={{color:colors.PINK}}/>
                            <StarFilled style={{color:colors.PINK}}/>
                            <StarFilled style={{color:colors.PINK}}/>
                            <StarOutlined/>
                        </Row>
                        <p style={{fontSize:20, color:colors.BLACK}}>Super Over Sized T-shirt With raw sleeves in design</p>
                        <p style={{fontSize:20, color:colors.PINK}}>£ 13.99</p>

                        <p style={{fontSize:20, color:colors.LIGHTGRAY, marginTop:20}}>Color</p>
                        <CirclePicker colors={colors} circleSize={14}/>
                        <Row style={{width:'100%'}}>
                            <Col className='col-sm-8'>
                                <p style={{fontSize:20, color:colors.LIGHTGRAY}}>sizes</p>
                            </Col>
                            <Col className='col-sm-4'>
                                <p style={{fontSize:15, color:colors.PINK , float:'right'}}>size guide</p>
                               
                            </Col>
                            {['XS','S','M','L','XL'].map((item, index)=>{
                                //if(index==1) return <Button  style={{background:colors.PINK,marginLeft:5, borderColor:colors.PINK,height:30, width:60}}>{item}</Button>
                                return <Button style={this.state.selectedsize==item?selectedSize:
                                                    {background:colors.LIGHTGRAY,
                                                        marginLeft:5,
                                                        borderColor:colors.LIGHTGRAY,
                                                        color:colors.WHITE,
                                                        height:30, 
                                                        width:60}}
                                                        onClick={()=>{this.setState({selectedsize:item})}}
                                                        >{item}</Button>
                            })}
                        </Row>

                        <p style={{fontSize:20, color:colors.LIGHTGRAY, marginTop:20}}>Quantity</p>
                        
                        <Row>
                            <Button style={{borderRadius:30}}
                                    onClick={()=>{
                                        if(this.state.quantity>0) {
                                            this.setState({quantity:this.state.quantity-1})
                                        }
                                    }}
                                 ><MinusOutlined style={{fontSize:20}} />
                            </Button>
                               <p style={{fontSize:20, color:colors.LIGHTGRAY, marginLeft:20, marginRight:20}}>{this.state.quantity}</p>
                            <Button style={{borderRadius:30}}
                                onClick={()=>{
                                    this.setState({quantity:this.state.quantity+1})
                                }}
                                  ><PlusOutlined style={{fontSize:20}}/>
                            </Button>
                        </Row>

                        <Row>
                            <Col className='col-sm-8'>
                                <Button  style={{Width:100, borderRadius:20, backgroundColor:colors.PINK, color:colors.WHITE}}>
                                    Add To Cart
                                </Button>
                            </Col>
                            <Col className='col-sm-4'>
                                <Row onClick={()=>{
                                    this.state.heart==HeartOutlined
                                    ?this.setState({heart:HeartFilled, isAdded:true})
                                    :this.setState({heart:HeartOutlined, isAdded:false})
                                    
                                }}>
                                     {!this.state.isAdded && <HeartOutlined style={{color:colors.PINK, marginTop:3, marginRight:5}}/>}
                                     {this.state.isAdded && <HeartFilled style={{color:colors.PINK, marginTop:3, marginRight:5}}/>}
                                     <p style={{ color:colors.LIGHTGRAY}}>Add to wish list</p>

                                </Row>
                            </Col>
                        </Row>


                    </Col >
                    </Row>
                    
                </Card>
                <Card style={{margin:20,marginTop:-40, backgroundColor:colors.OFFWIITE }} hoverable>

                    <ProductReview></ProductReview>
                    <AddProductReview/>
                </Card>
                <p  style={{color:colors.BLACK, fontSize:20, marginLeft:20}}>You may also like</p>
                <Row style={{margin:20}}>
                    {[1,2,3,4,5].map((value,index)=>{
                        return <ProductItem></ProductItem>
                    })}
                </Row>
                </div>
            </div>
        )
    }
}
