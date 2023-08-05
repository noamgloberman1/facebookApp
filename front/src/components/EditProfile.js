import '../App.css';
import { useState, useEffect } from 'react';


export default function EditProfile (props){

    const [generic, setGeneric] = useState("block");
    const [bio, setBio] = useState("none");
    const [genericID, setGenericID] = useState("genericsectionactive");
    const [otherID, setOtherID] = useState("biosection");
    const [response, setResponse] = useState("");

    const pageAnimation = 300;

    const edit = props.edit;
    const setEdit = props.setEdit;

    const closeTab = () => {

        setTimeout(() => setEdit(false), 200);

    }

    const changeToGeneric = () => {

        setGeneric("block");
        setBio("none");

        setTimeout(() => setGenericID("genericsectionactive"), pageAnimation);
        setTimeout(() => setOtherID("biosection"), pageAnimation);

    }

    const changeFromGeneric = () => {

        setGeneric("none");
        setBio("block");
        
        setTimeout(() => setGenericID("genericsection"), pageAnimation);
        setTimeout(() => setOtherID("biosectionactive"), pageAnimation);

    }


    const validateInfo = (event) => {

        event.preventDefault();
        
        const username = event.target.username.value;
        const bio = event.target.bio.value;

        console.log(username, bio);
        setResponse("changes made successfully.");
        setTimeout(() => setEdit(false), 3000);

    }

    return (
        <div id = "editprofile">
            <button id = "x" onClick = {closeTab}>&#9932;</button>

            <div id = "editinner">

                <h1 id = "editprofileheader">Edit Profile</h1>

                <form id = "editForm" onSubmit = {validateInfo}>

                    <section id = "generalinformation" style = {{display: `${generic}`}}>

                        <span id = "sectionname">General Information</span>

                        <div id = "inputitem">
                            <span className = "label">Username</span>
                            <input type = "text" name = "username" defaultValue = "username" />
                        </div>

                        <div id = "inputitem">
                            <span className = "label">First Name</span>
                            <input type = "text" name = "firstname" defaultValue = "firstname" />
                        </div>

                        <div id = "inputitem">
                            <span className = "label">Last Name</span>
                            <input type = "text" name = "lastname" defaultValue = "lastname" />
                        </div>

                        <div id = "inputitem">
                            <span className = "label">Email</span>
                            <input type = "text" name = "email" defaultValue = "email@gmail.com" />
                        </div>

                        <div id = "inputitem">
                            <span className = "label">Cell</span>
                            <input type = "cell" pattern = "[0-9]{10}" name = "cell" defaultValue = "0503730945" />
                        </div>

                    </section>

                    <section id = "bioinformation" style = {{display: `${bio}`}}>

                        <span id = "sectionname">Other Information</span>

                        <div id = "inputitem">
                            <span className = "label">bio</span>
                            <input type = "text" name = "bio" defaultValue = "bio" />
                        </div>

                    </section>
                    
                    <input type = "submit" value = "Update" id = "editButton"/>

                </form>
                <button id = "editCancel" onClick = {closeTab}>Cancel</button>

                <button id = {genericID} className = "changers" onClick = {changeToGeneric}></button>
                <button id = {otherID} className = "changers" onClick = {changeFromGeneric}></button>

            </div>

            <span id = "response">{response}</span>

        </div>
    );
}