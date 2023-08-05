import ReactDOM from 'react-dom/client';
import '../App.css';


export default function ProfileMenu (){
    const username = localStorage.getItem('username');

    
    const showPosts = () => {

        alert("posts");

    }

    const showSaved = () => {

        alert("saved");

    }   

    return (
        <div className = "profileMenu">
            <button id = "menuButton" onClick = {showPosts}>Posts</button>
            <button id = "menuButton" onClick = {showSaved}>Saved</button>
        </div>
    );
}