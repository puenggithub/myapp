

import React, { Component } from 'react'
import bg11Image from './assets/img/bg/background_1920-11.jpg';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardImgOverlay,
    CardLink,
    CardText,
    CardTitle,
    Col,
    ListGroup,
    ListGroupItem,
    Row,
  } from 'reactstrap';

export default class Movieitem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {id, title, overview, poster_src, poster_path} = this.props.movie
        let first,last, path;
        first = poster_path.indexOf("/")
        last = poster_path.indexOf(".jpg")
        path = poster_path.substring(first+1,last)

        return (
           
            
            <Row>
                <Col md={6} sm={6} xs={12} className="mb-3"></Col>
                    
                        <Card>
                         <CardImg top src={poster_src} />
                             <CardBody>
                                <CardTitle><strong>{title}</strong></CardTitle>
                             <CardText>
                                    <p>{overview}</p>
                             </CardText>
                            </CardBody>
                        </Card>
                   
                        
           
         </Row>
        )
    }
}
