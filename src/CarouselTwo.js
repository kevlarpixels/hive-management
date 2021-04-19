import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => (
    <Carousel autoPlay>
         <div>
            <img alt="img" src={require('./photos/1055/Dundas1.jpg')} />
            <p>Legend 1</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055/Dundas2.jpg')} />
            <p>Legend 1</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055/Dundas3.jpg')} />
            <p>Legend 1</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055/Dundas4.jpg')} />
            <p>Legend 1</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055/Dundas5.jpg')} />
            <p>Legend 1</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055/Dundas6.jpg')} />
            <p>Legend 1</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055/Dundas7.jpg')} />
            <p>Legend 1</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055/Dundas8.jpg')} />
            <p>Legend 1</p>
        </div>

        <div>
            <img alt="img" src={require('./photos/1055/Dundas9.jpg')} />
            <p>Legend 1</p>
        </div>
    </Carousel>
);


// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/