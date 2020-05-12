import React from 'react';
import Card from 'react-bootstrap/Card';
import Swiper from 'react-id-swiper';

const CardItem = (props) => {

    const params = {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },
    }    
    return (
        <Card className="card-item">
            <Card.Header>
                <Swiper {...params}>
                    <div><img src="http://lorempixel.com/400/200/nature/1/"/></div>
                    <div><img src="http://lorempixel.com/400/200/nature/2/"/></div>
                    <div><img src="http://lorempixel.com/400/200/nature/3/"/></div>                
                </Swiper>
                {/* <div className="swiper-button-next">Next</div>
                <div className="swiper-button-prev">Prev</div> */}
                <div className="badge-radius">
                    <span className="badge-radius-summary-campaign mr-3">$7.900</span>
                    <strong className="badge-radius-summary">$6.900 total</strong>
                    <span className="badge-radius-summary"></span>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Flo Rida, USA</Card.Subtitle>
            </Card.Body>
        </Card>      
    )
}

export default CardItem;