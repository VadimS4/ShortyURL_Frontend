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
      current_short_link: '',
      error_message: ''
    }
    this.fetchLinks = this.fetchLinks.bind(this)
  }

  componentDidMount = () => {
    this.fetchLinks()
  }

  fetchLinks = () => {
    fetch("https://shorty--url.herokuapp.com/")
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

    fetch('https://shorty--url.herokuapp.com/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ original_url : input_url})
    })
    .then(resp => resp.json())
    .then(json =>{
      json.message ? this.setState({
        error_message: json.message
      }) :
      this.setState ({
        current_short_link: json.shorten,
        links: json.all
      })
    })
    .catch(error => console.log(error))
  }

  onDeleteButtonClick = (link) => {
    console.log(link.short_url)

    fetch('https://shorty--url.herokuapp.com/delete/' + link.short_url, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(json => this.setState({
      links: json.all
    }))
    .catch(error => console.log(error))
  }


  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <URLconverter onFormSubmit={this.onFormSubmit} error_message={this.state.error_message} shortLink={this.state.current_short_link}/>
        <Links links={this.state.links} onDeleteButtonClick={this.onDeleteButtonClick}/>
      </div>
    );
  }
}

export default App;
