import React, { Component } from 'react';

class Card extends Component {


  //               "CHID":"1",
  //              "name":"Pornstar・AV女優",
  //               "slug":"pornstar",
  //               "total_videos":350,
  //               "category_url":"https://avgle.com/videos/pornstar",
  //               "cover_url":"https://static.avgle.com/media/categories/video/1.jpg"

  

  render() {
    const { name }      = this.props
    const { cover_img } = this.props
    const { keyword }   = this.props
    const { hd }        = this.props
    const { fps }        = this.props
    const { like }        = this.props
    const { sub_name }  = this.props
    const { ext_link }  = this.props
    return (
        <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={cover_img} alt="Placeholder image"/>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            {/* <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
              </figure>
            </div> */}
            <div class="media-content">
              <p class="title is-4">{name}</p>
              <p class="subtitle is-6">{sub_name} views</p>
            </div>
          </div>
      
          <div class="content">                      
            fps: {fps} <t/>
            like: {like}
            {/* <a href="#">#css</a> <a href="#">#responsive</a> */}
            <br/>
            <a href={ext_link} >กดเบาๆ</a>
            {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
