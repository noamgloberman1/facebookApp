import ReactDOM from 'react-dom/client';
import '../App.css';
import { useState, useEffect } from 'react';


function Feed (props){
    const result = props.result;
    console.log(result);

    return (
        <div id = "feed" className = "feed">
            <h1 id = "feedHeader">Feed</h1>
            <span>{result}</span>
        </div>
    );
}
export default Feed;