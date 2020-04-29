import React from 'react';
import './styling/App.css';

import Header from './components/Header';
import URLconverter from './components/URLconverter';
import Links from './components/Links'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      links: [],
      current_short_link: ''
    }
  }

  componentDidMount = () => {
    this.fetchLinks()
  }

  fetchLinks = () => {
    fetch("http://localhost:3000/")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          links: json
        })
      })
      .catch(err => console.log(err))
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    // console.log(event.target[0].value)

    let input_url = event.target[0].value

    fetch('http://localhost:3000/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ original_url : input_url})
    })
    .then(resp => resp.text())
    .then(json => {
      this.setState ({
        current_short_link: json
      })
    })
    .then(this.fetchLinks())
    .catch(error => console.log(error))
  }

  onDeleteButtonClick = (link) => {
    console.log(link.short_url)

    fetch('http://localhost:3000/delete/' + link.short_url, {
      method: 'DELETE'
    })
    .then(resp => resp.text())
    .then(json => console.log(json))
    .then(this.fetchLinks())
    .catch(error => console.log(error))
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <URLconverter onFormSubmit={this.onFormSubmit} shortLink={this.state.current_short_link}/>
        <Links links={this.state.links} onDeleteButtonClick={this.onDeleteButtonClick}/>
      </div>
    );
  }
}

export default App;
