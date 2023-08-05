import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';


export default function Home(props) {
    const [res, setRes] = useState("");
    const result = props.result;
    const setResult = props.setResult;
    
    return (
        <div id = "home">
            <section>
                <Feed result = {result} setResult = {setResult}/>
            </section>
        </div>
    );

}