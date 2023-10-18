import React from 'react';
import { Button } from 'semantic-ui-react';
import { UseUserAuth } from './context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

export const WPage = () => {
    const { LogOut } = UseUserAuth();
    const nav = useNavigate();
    const HandleLogOut = async () => {
        try {
            await LogOut();
            nav("/");
        } catch (e) {
            console.log(e.message);
        }
    }
    return (
        <>
            <div className="welcome-page">
                <h1>Welcome to DEV@Deakin</h1>
                <p>
                    Thank you for signing up or logging in. You are now part of our community
                    of developers!
                </p>
                <div className="cta-buttons">
                    <Button primary>My Profile</Button>

                    <Button primary>View Posts</Button>
                </div>
            </div>
            <br />
            <div className='logout'>
                <Button secondary onClick={HandleLogOut}>Log Out</Button>
            </div>
        </>
    );
};
