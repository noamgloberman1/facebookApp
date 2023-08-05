import '../App.css';
import { useState } from 'react';


export default function ProfileHeader (props){
    const username = localStorage.getItem('username');
    const edit = props.edit;
    const setEdit = props.setEdit;
    
    const showEditProfile = (event) => {

        event.preventDefault();
        
        setEdit(!edit);

    }

    return (
        <div className = "profileHeader" id="profilPic">
            <div id="profilePic"></div>
            <span id = "profileUsername">{username}</span>
            <button id = "editProfile" onClick={showEditProfile}>Edit profile</button>
            <div id="followInfo">
                <span id = "attribute">0 Posts</span>
                <span id = "attribute">0 Followers</span>
                <span id = "attribute">0 Following</span>
            </div>
        </div>
    );
}