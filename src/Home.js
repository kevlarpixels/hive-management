import React from 'react';
import './App.css';
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Home = () => (



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
                <h1>Unit B Details</h1>
                <h2>2 bedroom 1 bath for $1,100</h2>
                <p>Detached 2 Car Garage</p>
                <p>Backyard with porch</p>
                <p>Central Air and Heat</p>
                <p>Washer and Dryer</p>
                <p>Pet Friendly</p>
            </div>
            <div>
                <h1>Property Details</h1>
                <p>Duplex Property</p>
                <p>Built 1975</p>
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
                            <td>Charles H. Castle Elementary School</td>
                            <td>K-6</td>
                            <td>0.2 mi</td>
                        </tr>
                        <tr>
                            <td>O. J. Actis Junior High School</td>
                            <td>7-8</td>
                            <td>0.3 mi</td>
                        </tr>
                        <tr>
                            <td>West High School</td>
                            <td>9-12</td>
                            <td>1.0 mi</td>
                        </tr>
                        <tr>
                            <td>Stine Elementary School</td>
                            <td>K-6</td>
                            <td>0.8 mi</td>
                        </tr>
                        <tr>
                            <td>Fred L. Thompson Junior High School</td>
                            <td>7-8</td>
                            <td>0.8 mi</td>
                        </tr>
                        <tr>
                            <td>Kern Workforce 2000 Academy School</td>
                            <td>9-12</td>
                            <td>0.9 mi</td>
                        </tr>
                        <tr>
                            <td>New Life Christian Private School</td>
                            <td>K-8</td>
                            <td>1.0 mi</td>
                        </tr>
                        <tr>
                            <td>Turner Christian Academy Private School</td>
                            <td>K-12</td>
                            <td>1.1 mi</td>
                        </tr>
                    </table>
                </div>
                <div className="neighborhood">
                    <h1>Neighborhood</h1>
                    <p>5705 Wilson Rd is located in Spice neighborhood in the city of Bakersfield, CA.</p>
                </div>
            </div>
        </div>
    </div>
);

