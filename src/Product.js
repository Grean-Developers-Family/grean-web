import React, { Component } from 'react';
import Card from './Card'
import axios from 'axios'


const cards = []
const api_video_cat = 'https://api.avgle.com/v1/categories'
const api_video_tsubasa = 'https://api.avgle.com/v1/search/Tsubasa%20Amami/0'

class Product extends Component {

  constructor(props){
    super(props)
    this.state = {
      cards: cards
    }    
  }

  componentDidMount() {
    this.getVideoCat()
  }

  getVideoCat(){
    axios.get(api_video_tsubasa)
    // .then((res) => console.log(res.data))
    .then((res) => 
        res.data.response.videos.map(data => (        
          console.log(data),
          cards.push(data),
          this.setState({ card: data })
        )
      )
    )
  }


  addClicked = e => {
    console.log("Add was clicked !!")
    console.log(this.textInput.value)
    cards.push(this.textInput.value)
    this.setState({ card: cards})
  //     newArray.push("new value");   
  //     this.setState({arr:newArray})
  }


  render() {
    return (
        <div className="container" >
        <input class="input is" type="text" placeholder="Text input" ref={(input) => this.textInput = input}/>
        <a class="button is-primary" onClick={ e => this.addClicked(e)} >Add</a>
        <div class="columns" style={{ display: 'flex', flexFlow: 'row wrap' }} >        
            {cards.map(card => (
                <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd" >                
                <Card name={card.title}
                      cover_img={card.preview_url}
                      sub_name={card.viewnumber}
                      ext_link={card.embedded_url}                                          
                      fps = {card.framerate}
                      like  = {card.likes}
                />
                </div>
            ))}
            
        </div>
        </div>
    )
  }
}

export default Product;
