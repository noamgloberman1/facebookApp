import ReactDOM from 'react-dom/client';
import '../App.css';
import { useState, useEffect } from 'react';
import {Link, animateScroll as scroll} from 'react-scroll'


function Navbar (props){
    
    var username = localStorage.getItem('username');
    const [showSearch, setSearch] = useState(false);
    var result = props.result;
    console.log(props);
    const setResult = props.setResult;

    function showSearchF() {

        setSearch(true, () => {

            console.log(showSearch);

        })

    }


    function hideSearchF() {

        setSearch(false, () => {

            console.log(showSearch);

        })

    }
    

    const search = (event) => {
        if (event.key === 'Enter') {

            setResult(event.target.value);

        }
      }


    return (
        <div className = "navbar" onMouseLeave={hideSearchF}>
            <a id = "welcome" id = "logo" href = "home">FaceBook</a>
            <a id = "name">hello, <a href = "/profile" id = "username">{username}</a></a>
            <a className = "navitem" id = "navitem" href = "home">Home</a>
            {!showSearch && <a id = "navitem" className = "searchLink" onMouseEnter={showSearchF}>Search</a>}
            {showSearch && <input type = "text" name = "search" placeholder = "search" id = "searchBar" onKeyDown={search}/>}
            <a id = "navitem" href = "logout">Logout</a>
            <br />
        </div>
    );
}
export default Navbar;