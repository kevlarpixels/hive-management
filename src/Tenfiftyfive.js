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
                Fill out the form by clicking on the "Application" button. Be aware the California rental application form allows landlords
                to obtain background information about prospective tenants. A charge of $40 fee for the application will include
                criminal, credit, or rental history. Payment for the application will be made when you receive a link from the property manager.
                Once you fill out the initial application, the property manager will contact you for any questions you may have. 
        
            </p>
            
            <p>
            Complete el formulario haciendo clic en el botón "Application". Tenga en cuenta que el formulario de solicitud de alquiler de California permite
             a los propietarios obtener información de antecedentes sobre posibles inquilinos. Un cargo de $ 40 por la solicitud incluirá antecedentes penales, 
             crediticios o de alquiler. El pago de la solicitud se realizará cuando reciba un enlace del administrador de la propiedad.
                Una vez que complete la solicitud inicial, el administrador de la propiedad se comunicará con usted para cualquier pregunta 
                que pueda tener.
            </p>
            <a className="myButton" href="https://forms.gle/EV9LD5XLicG9HDXw5">Application</a>
        </div>
        <div>
            <form typeof="button"></form>
        </div>
        <div className="container">
            <div>
                <h1>1055 Dundas Street</h1>
                <h2>3 bedroom 2 1/2 bath for $2,750</h2>
                <p>Recently remodeled</p>
                <p>Hardwood Floor</p>
                <p>New Kitchen Canites</p>
                <p>Washer and Dryer attachments</p>
                <p>Master Bedroom</p>
                <p>Porch</p>
                <p>Chimney</p>
            </div>
            <div>
                <h1>Property Details</h1>
                <p>Single-Family Residence with attached ADU</p>
                <p>Built 1922</p>
                <p>Remodel 2021</p>
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

