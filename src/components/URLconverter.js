import React from 'react';
import '../styling/urlconverter.css'

function URLconverter(props) {
    let short_link = props.shortLink;

    short_link === "" ? short_link = "" : short_link = 'https://' + short_link 


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
                {props.error_message ? <h2>{props.error_message}</h2> :
                    <h2>The short Link is: <a href={short_link} target="_blank" rel="noopener noreferrer">{short_link}</a></h2>
                }
            </div>
        </div>
    )
}

export default URLconverter;