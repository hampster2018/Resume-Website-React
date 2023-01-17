import React, { useState } from "react";

import "./Contact.css"


export default function Contact () {

    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setLastName] = useState('Last Name');
    const [company, setCompany] = useState('Company');
    const [email, setEmail] = useState('email');
    const [number, setNumber] = useState('Number');
    const [outreachType, setOutreachType] = useState(0);

    return (
        <div id="contactPage">
            <form id="contactForm">
                Please input your information and I will get back to you as soon as possible!<br/>
                <input type="text" name={firstName}/><br/>
                <input type="text" name={lastName}/><br/>
                <input type="text" name={company}/><br/>
                <input type="text" name={email}/><br/>
                <input type="text" name={number}/><br/>
                <select>
                    <option value={1}>Job Recruitment</option>
                    <option value={2}>Project Interest</option>
                    <option value={3}>Networking</option>
                </select><br/>
            </form>
        </div>
    )

}