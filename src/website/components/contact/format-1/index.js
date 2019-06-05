import React from 'react';
import './style.css';
import dataService from '../../../../providers/Data';

function Contact() {
    return (
        <div className="C1-container">
            {dataService.contacts.map((contact, index) => {
                return (
                    <div className="" key={index}>
                        <i className={contact.icon}></i>
                        <span>{contact.value}</span>
                    </div>
                );
            })}
        </div>
    );
}
export default Contact;
