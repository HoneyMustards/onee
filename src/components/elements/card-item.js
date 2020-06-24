import React from 'react';
import Card from 'react-bootstrap/Card';
import Swiper from 'react-id-swiper';
import Rating from '../../components/elements/rating';
import Favourite from '../../components/elements/favourite';
import Link from 'next/link';

const CardItem = (props) => {

    const { title, priceInfo, photos } = props;

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
        }
    };

    let allImages = null;
    if (photos){
        allImages = photos.items.slice(0, 5).map((item,i) => {
            return <div key={i}><img className="slider-image" src={item.url} /></div>
        });
    }

    return (
        <Card className={"card-item " + props.variant}>
            <Card.Header>
                <Link href={`/detail?id=${props.id}`}>
                    <a>
                        <Swiper {...params}>
                            {allImages}
                        </Swiper>
                    </a>
                </Link>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-5 p-0">
                            <Card.Subtitle className="mb-2 text-muted">New York</Card.Subtitle>
                            <Rating point={3.5} />
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
                <div className="badge-radius badge-radius-price d-none">
                    <span className="badge-radius-campaign">$3900</span>
                    <span className="badge-radius-summary"><strong>$3400</strong> total</span>
                </div>
            </Card.Body>
        </Card>
    )
};

export default CardItem;
