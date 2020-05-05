import React from 'react';
import '../styling/links.css';

function Links(props) {

    return (
        <div className="links">
            <hr></hr>
            <h1 className="Links">Here's A List Of Recent Shortened URL's</h1>
            <div className="links_ul">
                {!props.links ? null :
                    props.links.reverse().map((link, i) => (
                        <div className="url" key={i}>
                            <ul className="link_ul">
                                <li className="link_li">
                                    <div className="urls">
                                        <div className="original_url">
                                            Original Url : <a href={`${link.original_url}`} target="_blank" rel="noopener noreferrer">{link.original_url}</a>
                                        </div>
                                        <div className="result_url">
                                            Short URL : <a href={`https://shorty--url.herokuapp.com/${link.short_url}`} target="_blank" rel="noopener noreferrer">https://shorty--url.herokuapp.com/{link.short_url}</a>
                                        </div>
                                    </div>
                                    <button className="delete" onClick={() => props.onDeleteButtonClick(link)}>Delete This URL</button>
                                </li>
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Links;