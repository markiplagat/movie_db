import React from 'react';
import {GlobalStyles} from "./GlobalStyles";
import Header from './components/Header';
import Home from "./components/Home";

const App =() => {
    return (
        <div className="App">
            <Header />
            <Home />
            <GlobalStyles />
        </div>
    );
}

export default App;
