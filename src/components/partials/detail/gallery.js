import React, {useState, useEffect} from 'react';
import Swiper from 'react-id-swiper';

import GalleryAll from '../../../../data/gallery.json';

const Gallery = (props) => {

    useEffect(() => {
        console.log(props)
        if(props.show){
            setShow(props.show);
        }
    });

    const [show, setShow] = useState(false);

    const params = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        runCallbacksOnInit: true,
        rebuildOnUpdate: true,
        onInit: (swiper) => {
            console.log('asdasd');
            this.swiper = swiper
        },
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
    }

    const commentAll = GalleryAll.map((item,i) =>  
        <div className="swiper-slide" key={i}>
            <img src={item.image} alt={item.title}/>
            <div className="gallery-bottom">
                {item.title}
                <span className="gallery-page-number">{i+1}/{GalleryAll.length}</span>
            </div>
        </div>
    );

    return(
        <React.Fragment>
            <div className={`gallery ${show ? 'show':''}`}>
                <div className="gallery-top">
                    <i className="icon icon-close" onClick={() => setShow(false)}></i>
                </div>
                <Swiper {...params}>
                    {commentAll}
                </Swiper>
            </div>
        </React.Fragment>
    )
};
  
export default Gallery;