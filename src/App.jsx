/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import './App.css'
import Cards from './components/Containers/Card/Cards.jsx';

const App = () => {
    return (
        <>
            <Navbar />
            <Cards />
        </>
    );
}

export default App;
