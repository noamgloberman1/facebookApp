import '../App.css';
import { useState, useEffect } from 'react';


export default function EditProfile (props){

    const edit = props.edit;
    const setEdit = props.setEdit;
    const closeTab = () => {

        setTimeout(() => setEdit(false), 200);

    }

    return (
        <div id = "editprofile">
            <button id = "x" onClick = {closeTab}>x</button>
            <h1 id = "editprofileheader">Edit Profile</h1>

            <form id = "editForm">

                <span className = "label">Username: </span><input type = "text" name = "name" placeholder = "name..." />
                <span className = "label">First Name: </span><input type = "text" name = "firstname" placeholder = "first name..." />

            </form>

        </div>
    );
}