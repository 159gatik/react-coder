import React from 'react';
import "../../../styles/cards.css";

const Cards = ({ imageSource, name, text, url }) => {
    return (
        <div className="card text-center bg-primary ">
            <div className="overflow">
                <img src={imageSource} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{name}</h4>
                <p className="card-text text-secondary">
                    {text ? text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
                </p>
                <a
                    href={url ? url : "#!"}
                    target="_blank"
                    className="btn btn-outline-black "
                    rel="noreferrer"
                >
                    Go to {name}
                </a>
            </div>
        </div>
    );
}
export default Cards;
