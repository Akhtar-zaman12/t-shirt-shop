import React from 'react'
import colors from '../../theme/colors'
import { ShoppingTwoTone} from '@ant-design/icons';
import { Badge } from 'antd';
import { Row } from 'react-bootstrap';
import { FaShoppingBag } from "react-icons/fa";
import {Link} from 'react-router-dom'



export default function TopNavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" href="#" style={{color:colors.PINK}} >T SHIRT SHOP</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" style={{color:'white'}} href="#">WOMEN <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{color:'white'}}  href="#">MEN</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{color:'white'}}  href="#">SHOES</a>
                    </li>
                </ul>
                <span className="navbar-text">
                    <Row>
                    <input type="search " placeholder="Search Anything" aria-label="Search" style={{borderRadius:20, height:35,width:200, borderColor:colors.PINK}}/>
                    <Badge count={5} style={{marginRight:20}}>
                        <a href="#" className="head-example" />
                        <Link to='checkout'>
                         <FaShoppingBag color={colors.WHITE} size={25}  style={{marginRight:30, marginTop:5, marginLeft:10}}></FaShoppingBag>

                        </Link>
                    </Badge>
                    </Row>
                 

                </span>
            </div>
            </nav>
        </div>
    )
}
