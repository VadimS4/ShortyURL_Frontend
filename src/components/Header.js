import React from 'react';
import '../styling/header.css'

function Header() {
    return (
        <div className="header">
            <h1 className="title">ShortyURL</h1>
            <h3 className="description">Turn your extremely long link into a short shareable link!</h3>
        </div>
    )
}

export default Header;