import React from "react";
import Nav from './components/Nav';
import Main from "./components/Main";
import './styles/App.css';


function App(props) {

    return (
        <div className="App">
            <Nav />
            <Main state={props.state} addProduct={props.addProduct} />
        </div>
    );


}

export default App;

