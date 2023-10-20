import React from 'react';
import { Icon } from 'semantic-ui-react';


const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-part'>
                <h3>Explore</h3>
                <ul>
                    <li>Home</li>
                    <li>Questions</li>
                    <li>Articles</li>
                    <li>Tutorials</li>
                </ul>
            </div>
            <div className='footer-part'>
                <h3>Support</h3>
                <ul>
                    <li>FAQs</li>
                    <li>Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='footer-part'>
                <h3>Stay Connected</h3>
                <div className='social-icons'>
                    <Icon name='facebook' />
                    <Icon name='twitter' />
                    <Icon name='instagram' />
                </div>
            </div>
            <div className='footer-part'>
                <p>DEV@Deakin 2022</p>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms</li>
                    <li>Code of Conduct</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;


