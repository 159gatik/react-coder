/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import './styles/App.css'
import ItemListContainer from './components/Containers/Card/ItemListContainer.jsx';

const App = () => {
    return (
        <>
            <Navbar />
            <ItemListContainer />
        </>
    );
}

export default App;
