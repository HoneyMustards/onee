import React from 'react';
import Card from 'react-bootstrap/Card';
import Swiper from 'react-id-swiper';
import Rating from '../../components/elements/rating';
import Favourite from '../../components/elements/favourite';

const CardItem = (props) => {

    const { name, location, oldPrice, price, images } = props;

    const rnd = Math.random();

    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        lazy: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    }

    let allImages = null;
    if (images){
        allImages = images.map((item,i) => 
            <div key={i}><img className="slider-image" src={item.url} /></div>
        );
    }

    return (
        <Card className={"card-item " + props.variant}>
            <Card.Header>
                <Swiper {...params}>
                    {allImages}
                </Swiper>
            </Card.Header>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-5 p-0">
                            <Card.Subtitle className="mb-2 text-muted">{location}</Card.Subtitle>
                            <Rating point={3.5} count={124} />
                        </div>
                        <div className="col-7 p-0 text-right">
                            <Card.Subtitle className="mb-2 text-info"><span>%8</span> reseller margin</Card.Subtitle>
                            <div className="d-flex align-items-center justify-content-end">
                                <div className="badge-radius badge-radius--promotion mr-2">
                                    PROMOTION PROPERTY
                                </div>
                                <div className="card-item-favourite">
                                    <Favourite />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="badge-radius badge-radius-price">
                    {oldPrice && <span className="badge-radius-campaign">${oldPrice}</span>}
                    <span className="badge-radius-summary"><strong>${price}</strong> total</span>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardItem;