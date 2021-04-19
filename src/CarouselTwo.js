import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => (
    <Carousel autoPlay>
         <div>
            <img alt="img" src={require('./photos/1055half/Dundas1.jpg')} />
            <p>Front of ADU</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055half/Dundas2.jpg')} />
            <p>Living Room</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055half/Dundas3.jpg')} />
            <p>Bedroom towards Walk-in Closet</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055half/Dundas4.jpg')} />
            <p>Kitchen</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055half/Dundas5.jpg')} />
            <p>Kitchen Cabinets</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055half/Dundas6.jpg')} />
            <p>Bedroom</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055half/Dundas7.jpg')} />
            <p>Bathroom</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055half/Dundas8.jpg')} />
            <p>Rear of ADU</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055half/Dundas9.jpg')} />
            <p>Backyard</p>
        </div>
    </Carousel>
);


// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/