import React from 'react';

import image1 from '../images/zenith.jpg'

const ItemListContainer = () => {
    return (
        <>
            <div class="card">
                <div class="card-header">
                    <h4>Zenith</h4>
                </div>
                <div class="card-body">
                    <img src={image1} className='imagen' />
                    <h5 class="card-title">Zenith Riva 29 COMP</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}

export default ItemListContainer;
