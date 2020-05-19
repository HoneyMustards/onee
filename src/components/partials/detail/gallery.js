import React, {useState, useEffect} from 'react';

import Input from '../../elements/form/input';

const Gallery = (props) => {

    useEffect(() => {
        console.log(props)
        if(props.show){
            setShow(props.show);
        }
    }, [props.show === true]);

    const [show, setShow] = useState(false);

    return(
        <React.Fragment>
            <div className={`gallery ${show ? 'show':''}`}>
                <div className="gallery-top">
                    <i className="icon icon-close" onClick={() => setShow(false)}></i>
                </div>
                <div className="gallery-bottom">

                </div>
            </div>
        </React.Fragment>
    )
};
  
export default Gallery;