import React from 'react';
import {GlobalStyles} from "./GlobalStyles";
import Header from './components/header';

const App =() => {
    return (
        <div className="App">
            <Header />
            <GlobalStyles />
            Start here.
        </div>
    );
}

export default App;
