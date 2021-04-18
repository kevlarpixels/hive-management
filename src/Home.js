import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Home = () => (



    <div className="center">
        <div className="buttonDiv">
            <p>

            </p>

        </div>
        <div className="container">
            <div>
                <h1>1055 Dundas Street</h1>
                <h2>3 bedrooms 2 1/2 baths</h2>
                <h2>$2,500</h2>
            </div>
            <div>
                <Link to="/hive-management/1055dundas"
                    className="myButton">Details
                </Link>
            </div>
            <div className="container">
                <div>
                    <h1>1055 1/2 Dundas Street</h1>
                    <h2>1 bedrooms 1 bath</h2>
                    <h2>$1,500</h2>
                </div>
                <div>
                    <Link to="/hive-management/1055dundasandhalf"
                        className="myButton">Details
                </Link>
                </div>
            </div>
        </div>
    </div>
);

