/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Dropdown from './Dropdown.jsx';

const Secciones = () => {

    const ListCategory = ["bicicletas", "accesorios", "indumentaria"]
    return (
        <>
            <li className="nav-item">
                <a className="nav-link active" href="#">Inicio
                    <span className="visually-hidden">(current)</span>
                </a>
            </li>
            <Dropdown lista={ListCategory}></Dropdown>
            <li className="nav-item">
                <a className="nav-link" href="#">ofertas</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">nosotros</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">contacto</a>
            </li>
        </>
    );
}

export default Secciones;
