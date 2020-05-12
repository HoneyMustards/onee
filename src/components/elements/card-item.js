import React from 'react';
import Card from 'react-bootstrap/Card';
import Swiper from 'react-id-swiper';
import Rating from '../../components/elements/rating';
import Favourite from '../../components/elements/favourite';

const CardItem = (props) => {

    const rnd = Math.random();

    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
    }
    return (
        <Card className="card-item">
            <Card.Header>
                <Swiper {...params}>
                    <div><img src="http://lorempixel.com/800/200/nature/1/" /></div>
                    <div><img src="http://lorempixel.com/800/200/nature/2/" /></div>
                    <div><img src="http://lorempixel.com/800/200/nature/3/" /></div>
                </Swiper>
                <div className="badge-radius">
                    <span className="badge-radius-summary-campaign mr-3">$7.900</span>
                    <strong className="badge-radius-summary">$6.900 total</strong>
                    <span className="badge-radius-summary"></span>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-6 p-0">
                            <Card.Subtitle className="mb-2 text-muted">Flo Rida, USA</Card.Subtitle>
                            <Rating point={3.5} count="124" />
                        </div>
                        <div className="col-6 p-0 text-right">
                            <Card.Subtitle className="mb-2 text-info">%8 reseller margin</Card.Subtitle> 
                            <div className="d-flex align-items-center">
                                <div className="badge-radius badge-radius--promotion mr-2">
                                    PROMOTION PROPERTY
                                </div>
                                <Favourite />    
                            </div>                       
                        </div>                        
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardItem;