import React, {Component, Fragment} from 'react';
import Picturefill  from '../../globals/js/picturefill';
import Slider from 'react-slick';

import './css/index.scss';

export default class ProductCarousel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: {
        productDetails: []
      }
    };

    this.settings = {
      dots: true,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
    };

    this.mobileSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
  }

  componentDidMount () {

    let ProductCarouselData = new Promise((resolve, reject) => {
      fetch('/public/json/productCarousel.json').then((data) => {
        return data.json();
      }).then((data) =>{
        resolve(data);
      });
    });
    
    ProductCarouselData.then((data) => {
      this.setState({
        data: data
      });
    });

  }

  renderGalleryItems () {
    console.log('array', this.state.data.productDetails);
    // console.log('items', this.state.productDetails.productDetails);
    if (this.state.data.productDetails) {
      console.log(window.innerWidth );
      if (window.innerWidth < 768) {
        return(
          <div className="gallery-item-container c-xs-12">
            <Slider {...this.mobileSettings}>
              {
                this.state.data.productDetails.map(item => {
  
                  return <div className="card-wrapper" key={item.id}>
                  <div className="active-img">
                    <picture>
                      <source src={item.image} media="(min-width: 768px)"></source>
                      <img src={item.mobileImage} alt={item.altImage}></img>
                    </picture>
                  </div>
                  <div className="hover-img hide">
                    <picture>
                      <source src={item.altImage} media="(min-width: 768px)"></source>
                      <img src={item.altMobileImage} alt={item.altImage}></img>
                    </picture>
                  </div>
                  <div className="image-desc">
                    <h2 className="image-title">{item.description}</h2>
                  </div>
                </div>;
                })
              }
            </Slider>
          </div>
        )
      } else {
        return(
          <div className="gallery-item-container c-xs-12">
            <Slider {...this.settings}>
              {
                this.state.data.productDetails.map(item => {
  
                  return <div className="card-wrapper" key={item.id}>
                  <div className="active-img">
                    <picture>
                      <source src={item.image} media="(min-width: 768px)"></source>
                      <img src={item.mobileImage} alt={item.altImage}></img>
                    </picture>
                  </div>
                  <div className="hover-img hide">
                    <picture>
                      <source src={item.altImage} media="(min-width: 768px)"></source>
                      <img src={item.altMobileImage} alt={item.altImage}></img>
                    </picture>
                  </div>
                  <div className="image-desc">
                    <h2 className="image-title">{item.description}</h2>
                  </div>
                </div>;
                })
              }
            </Slider>
          </div>
        )
      }
    }
  }

  pictureFill (i) {
    if (this.state.data) {
      return <Picturefill data={this.state.data.productDetails} />;
    } else {
      return '';
    }
  }

  render () {
    return (
      <section className="product-container grid-container">
        <div className="grid-row">
          <div className="product-carousel-header c-xs-12">
            <h2>{this.state.data.title}</h2>
            <a>{this.state.data.heading}</a>
          </div>
          {this.renderGalleryItems()}
        </div>
    </section>
    )
  }
}