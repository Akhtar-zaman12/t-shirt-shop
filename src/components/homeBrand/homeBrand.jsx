import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import {Button } from 'antd'
import colors from '../../theme/colors'
import './styles.css'

export default class HomeBrand extends Component {
    render() {
        return (
            <div>
                <Jumbotron className='bg_image'>
                    <div style={{marginTop:60, marginLeft:30}}>
                        <h1 style={{color:colors.WHITE}}>Converse</h1>
                        <p style={{fontSize:30, color:colors.WHITE}}>Explore Styles tough enough to hangle <br/>all you workout</p>
                    </div>
                    <Button style={{borderRadius:20, marginLeft:30,fontSize:20, height:40, width:150}}><a style={{color:colors.PINK}}> Shop Brand</a></Button>
                    
                </Jumbotron>
            </div>
        )
    }
}
