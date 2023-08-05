import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileHeader from '../components/ProfileHeader';
import ProfileMenu from '../components/ProfileMenu';
import EditProfile from '../components/EditProfile';


export default function Profile() {

    const [edit, setEdit] = useState(false);

    return (
        <div id = "profile">
            <section>
                <ProfileHeader edit = {edit} setEdit = {setEdit} />
            </section>
            <section>
                <ProfileMenu />
            </section>
            {edit && <EditProfile edit = {edit} setEdit = {setEdit} />}
        </div>
    );

}