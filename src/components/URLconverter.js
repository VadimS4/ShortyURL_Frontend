import React from 'react';
import '../styling/urlconverter.css'

function URLconverter(props) {
    return(
        <div className="converter">
            <form className="form" onSubmit={event => props.onFormSubmit(event)}>
                <span className="formtext">Enter URL </span>
                <input
                    className="input"
                    type="text"
                    required
                />
                <button className="formButton">Shrink!</button>
            </form>
            <div className="result">
                <h2>The short Link is: <a href={props.shortLink} target="_blank" rel="noopener noreferrer">{props.shortLink}</a></h2>
            </div>
        </div>
    )
}

export default URLconverter;