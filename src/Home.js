import React, { Component } from 'react';

class Home extends Component {
    render() {

    const {text} = this.props

      return (
        <section class="hero is-medium is-dark">
            <div class="hero-body">
            <div class="container">
            <h1 class="title">
            This is hero
            </h1>
            <h2 class="subtitle">
            {text}
            </h2>
            </div>
        </div>
    </section>
    )
  }
}

export default Home;
