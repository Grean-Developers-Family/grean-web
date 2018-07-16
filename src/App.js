import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Home from './Home'
import { Route, Link } from 'react-router-dom'
import Product from './Product'

class App extends Component {
  constructor(props){
      super(props)
      
      this.state = {
        name: ''
      }

  }

  changeName = e => {
    console.log(e.target.value)
    this.setState({ name: e.target.value })

  }

  render() {
    const {name} = this.state

    return (
      <div> 
          <Nav />
          <div className="container">
          <Link class="button is-primary" to="/">Btn1</Link>
          <Link class="button is-warning" to="/product">Btn2</Link>
          </div>                            
          {/* <input class="input" type="text" placeholder="Text input" value={name} onChange = {e => this.changeName(e)} />         */}

          <Route exact={true} path="/" render={() => <Home text={name} />} />
          <Route exact={true} path="/product" render={() => <Product />} />
      </div>
    )
  }
}

export default App;
