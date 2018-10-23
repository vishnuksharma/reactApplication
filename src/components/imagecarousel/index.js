import React, { Component } from 'react';
import Picturefill  from '../../globals/js/picturefill';
import Slider from 'react-slick';

import './css/index.scss';

export default class ImageCarousel extends Component {
  constructor(props, context) {
    super(props, context);

    this.clickHandler = this.clickHandler.bind(this);

    this.state = {
      data: {
        slides: []
      }
    };
  }

  componentDidMount() {
    const carouselData = new Promise((resolve, reject) => {
      fetch('/public/json/imageCarousel.json').then((data) => {
        return data.json();
      }).then((data) => {
        resolve(data);
      });
    });
    
    carouselData.then((data) => {
      this.setState({
        data: data
      });
    });
  }

  clickHandler(e) {
    console.log(`clicked slide - ${e.target}`);
  }

  render() {
    const settings = {
      autoplay: this.state.data.autoplay,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    };

    return (
      this.state.data.slides.length ? 
        <section className="image-carousel-wrapper">
          <Slider {...settings}>
            {
              this.state.data.slides.map(item => {
                const imgStyle = {
                  backgroundImage: 'url(' + item.image + ')'
                };

                return <div className="slide" key={ item.id } data-image={item.image}>
                  <div className="slide-image" style={imgStyle}></div>
                  <div className="slide-content">
                    <span className={item.type}>
                      <i></i>
                    </span>
                    <span className="username">{item.username}</span>
                  </div>
                </div>;
              }
              )
            }
          </Slider>
        </section>
        : ''
    );
  }
}