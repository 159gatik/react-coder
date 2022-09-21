/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Dropdown = ({ lista }) => {
    return (
        <>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">bicicletas</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">{lista[0]} </a>
                    <a class="dropdown-item" href="#">{lista[1]}</a>
                    <a class="dropdown-item" href="#">{lista[2]}</a>
                </div>
            </li>
        </>
    );
}

export default Dropdown;
