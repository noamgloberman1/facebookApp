import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from '../components/Google';


function Login() {
    const [response, setResponse] = useState("");

    const sendData = (username, password) => {
        axios.post('http://localhost:8080/login', {
            username: username,
            password: password
        }, 
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        })
            .then((response) => {
                if (response.data.status === "ok") {

                    console.log(response);
                    localStorage.setItem('sessionID', response.data.sessionID);
                    localStorage.setItem('username', username);

                    // redirect to the home page
                    window.location.replace("home")

        
                }
                else {
                    
                    console.log(response);
                    setResponse("Wrong credentials");
        
                }

            })
            .catch((err) => {
                // Error handling
                console.log(err);
                return null;
        });
    }
    const checkLogin = (event) => {

        event.preventDefault();
        
        const username = event.target.username.value;
        const password = event.target.password.value;

        sendData(username, password);


    }

    return (
        <div className="App">
            <div className="wrapper">
                <h1 id = "welcome">FaceBook</h1>
                <form onSubmit = {checkLogin} id = "loginForm">
                    <h3 id = "logintitle">Sign in to your account</h3>
                    <span className = "label">Username</span>
                    <input type = "text" name = "username" required />
                    <span className = "label">Password</span>
                    <a id = "forgot">Forgot your password?</a>
                    <input type = "password" name = "password" required />
                    <input type = "submit" value = "Login" />
                    <GoogleOAuthProvider clientId="645882683183-fquo5adudml51hg9b07qci09t24egmch.apps.googleusercontent.com">
                        <Google />
                    </GoogleOAuthProvider>
                    <span>{response}</span>
                </form>
            </div>
            <div id = "video-container"></div>
            <video autoPlay loop muted id = 'backgroundVideo'>

                <source src = "./background.mp4" type = 'video/mp4' />

            </video>
        </div>
    );
}

export default Login;
