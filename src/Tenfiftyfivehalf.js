import React from 'react';
import CarouselTwo from "./CarouselTwo";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

export const Tenfiftyfivehalf = () => (



    <div>


        <div className='carousel'>
            <CarouselTwo />
        </div>
        <div className="buttonDiv">
            <p>
            Fill out the form by clicking on the "Application" button. Be aware the California rental application form allows landlords
                to obtain background information about prospective tenants. A charge of $40 fee for the application will include
                criminal, credit, or rental history. Payment for the application will be made when you receive a link from the property manager.
        
            </p>
            <a className="myButton" href="https://forms.gle/EV9LD5XLicG9HDXw5">Application</a>
        </div>
        <div>
            <form typeof="button"></form>
        </div>
        <div className="container">
            <div>
                <h1>1055 1/2 Dundas Street</h1>
                <h2>2 bedroom 1 bath for $1,550</h2>
                <p>New Construction</p>
                <p>Hardwood Floors</p>
                <p>Walk-in Closet</p>
                <p>Washer and Dryer attachements</p>
                <p>Pet Friendly</p>
            </div>
            <div>
                <h1>Property Details</h1>
                <p>Attached ADU to Single-family Residence</p>
                <p>Built 2021</p>
                <p>Wood Roof Structure with Shingles</p>
                <p>Stucco Exterior</p>
                <p>Near Downtown L.A. and USC Medical Center</p>
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

