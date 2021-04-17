import React from 'react';
import Carousel from "./Carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

export const Tenfiftyfive = () => (



    <div>


        <div className='carousel'>
            <Carousel />
        </div>
        <div className="buttonDiv">
            <p>
                Fill out form by clicking on the "Application" button. Be aware the California rental application form allows landlords
                to obtain background information about prospective tenants. A charge of $38 fee for the application will include
                criminal, credit, or rental history. Payment for the application can be made via Venmo: www.venmo.com/Kevin_Aguilar
                .
            </p>
            <a className="myButton" href="https://forms.gle/EV9LD5XLicG9HDXw5">Application</a>
        </div>
        <div>
            <form typeof="button"></form>
        </div>
        <div className="container">
            <div>
                <h1>1055 Dundas Street</h1>
                <h2>3 bedroom 2 bath for $2,750</h2>
                <p>Detached 2 Car Garage</p>
                <p>Backyard with porch</p>
                <p>Central Air and Heat</p>
                <p>Washer and Dryer</p>
                <p>Pet Friendly</p>
            </div>
            <div>
                <h1>Property Details</h1>
                <p>Single-Family Residence with attached ADU</p>
                <p>Built 1922</p>
                <p>Remodel 2021</p>
                <p>Wood Roof Structure with Shingles</p>
                <p>Stucco Exterior</p>
            </div>
            <div className="environment">
                <div className="schools">
                    <h1>Nearby Schools</h1>
                    <table>
                        <tr>
                            <th>School</th>
                            <th>Grades</th>
                            <th>Distance</th>
                        </tr>
                        <tr>
                            <td>Evergreen Avenue Elementary School</td>
                            <td>K-6</td>
                            <td>0.1 mi</td>
                        </tr>
                        <tr>
                            <td>Belvedere Middle School</td>
                            <td>6-8</td>
                            <td>1.1 mi</td>
                        </tr>
                        <tr>
                            <td>Hilda L. Solis Learning Academy School Of Technology, Business And Education</td>
                            <td>9-12</td>
                            <td>1.6 mi</td>
                        </tr>  
                    </table>
                </div>
                <div className="neighborhood">
                    <h1>Neighborhood</h1>
                    <p>Boyle Heights</p>
                </div>
            </div>
        </div>
    </div>
);

