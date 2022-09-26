/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import image1 from '../images/zenith.jpg'
import image2 from '../images/vairo.jpg'
import image3 from '../images/venzoprimal.jpg'
import Cards from './Cards';

const cards = [
    {
        id: 1,
        name: "Zenith Riva",
        image: image1,
        url: "https://zenithbicycles.com/bicicletas/off-road/riva/riva-29-elite",
    },
    {
        id: 2,
        name: "Vairo XR 3.5",
        image: image2,
        url: "https://www.vairo.com/bikes/xr35",
    },
    {
        id: 3,
        name: "Venzo Primal",
        image: image3,
        url: "https://venzoargentina.com.ar/bicicleta/venzo-primal-ex-rodado-29",
    },
]
const ItemListContainer = () => {
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    {cards.map(({ name, image, url, id }) => (
                        <div className="col-md-4" key={id}>
                            <Cards imageSource={image} name={name} url={url} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ItemListContainer;
