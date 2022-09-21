/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Buttom from './Buttom';
import Form from './Form';
import Secciones from './Secciones'
import Cartwidget from './Cartwidget.jsx';


const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                <div className="container">
                    <a className="navbar-brand" href="#">Pinto.Bike</a>
                    <Buttom />
                    <div className="collapse navbar-collapse " id="navbarColor01">
                        <ul className="navbar-nav me-auto ">
                            <Secciones />
                        </ul>
                        <Form busqueda="Ingrese producto" />
                    </div>
                    <Cartwidget></Cartwidget>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
