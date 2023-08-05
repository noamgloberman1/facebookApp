import '../App.css';
import { useState, useEffect, Children } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';


export default function Layout(props) {
    const [res, setRes] = useState("");
    const children = props.children;
    const result = props.result;
    const setResult = props.setResult;

    useEffect(() => {
    
        const fetchData = async () => {
            
            // get the sessionID from the local storage
            var sessionID = localStorage.getItem("sessionID");

            axios.post('http://localhost:8080/validateSession', {
                sessionID: sessionID,
            }, 
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then((response) => {

                var status = response.data.status;
                if (status === false) {

                    window.location.replace("/");

                }
            })
          };
        fetchData()
    }, []);



    useEffect(() => {

        if (res === false) {

            window.alert(res);
            window.location.replace("/");

        }
    
    });

    return (
        <div className = "layout">
            <section>
                {/* <Navbar result = {result} setResult = {setResult} /> */}
                <Navbar result = {result} setResult = {setResult} />
            </section>
            <main>{children}</main>
            <section id = "footer">
                <Footer />
            </section>
        </div>
    );

}