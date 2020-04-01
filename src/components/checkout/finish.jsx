import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import rocket from '../../asstes/images/rocket.png'
import colors from '../../theme/colors'
import { Button } from 'antd'
import {Link} from 'react-router-dom'
export default class FinishComponent extends Component {
    render() {
        return (
            <div style={{ alignContent:'center', alignItems:'center', width:'100%'}}>
                <div style={{marginLeft:'35%', marginTop:'10%'}}>
                    <Image src={rocket} style={{height:200, width:200}}></Image> 
                    <p style={{fontSize:40, color:colors.BLACK,marginLeft:15}}>Success!</p>
                    <p style={{fontSize:12, color:colors.LIGHTGRAY, align:'center'}}>your items will be shipped shortly, you'll get an email with details</p>
                    <Link to='/'><Button style={{borderRadius:20, color:colors.WHITE, backgroundColor:colors.PINK}}> Back to shop</Button></Link>
                </div>
                

            </div>
        )
    }
}
