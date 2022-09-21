import React from 'react';
import ItemListContainer from './ItemListContainer';

const Cards = () => {

    return (
        <div className='container d-flex mt-5'>
            <div className='row'>
                <div className='col'>
                    <ItemListContainer></ItemListContainer>
                </div>
                <div className='col'>
                    <ItemListContainer></ItemListContainer>
                </div>
                <div className='col'>
                    <ItemListContainer></ItemListContainer>
                </div>
            </div>
        </div>

    );
}

export default Cards;
