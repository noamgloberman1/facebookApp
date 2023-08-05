import '../App.css';
import { useState } from 'react';


function Logout() {

    localStorage.clear();
    window.location.replace('/');

    return (
        <div className="App">
            
        </div>
    );
}

export default Logout;
