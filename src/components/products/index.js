import React, {Component, Fragment} from 'react';
import picturefill from '../../globals/js/picturefill';

import './css/index.scss';

class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }

  renderProducts (){
    if (this.state.products && this.state.products.products){
      console.log(this.state.products.products);
      return (  
        this.state.products.products.map(product => {
          return (
            <div key={product.id} className="col-sm-4 col-xs-12">
              <article className="product-list">
                <a href={product.productUrl}>
                  <div className="image-wrapper">
                    <div className="activeimage">
                      <picture>
                        <source src={product.desktopActive} media="(min-width: 768px)"></source>
                        <img src={product.mobileActive}></img>
                      </picture>
                    </div>
                    <div className="hoverimage">
                      <picture>
                        <source src={product.desktopHover} media="(min-width: 768px)"></source>
                        <img src={product.mobileHover}></img>
                      </picture>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="content-box">
                      <h2>{product.cardContent}</h2>
                    </div>
                  </div>
                </a>
              </article>
            </div>
          )
        })
      )
    } else {
      return "";
    }
    
  }

  componentDidMount(){
    const productList = new Promise( (resolve, reject) => {
      fetch('/public/json/products.json')
      .then(data => data.json())
      .then(data => resolve(data))
      .catch(e => {
        reject(e);
      })
    });
    productList.then(products => {
      this.setState({products: products})
    })
  }

  render(){
    return(
       <section className="products-component container">
          <div className="product-wrapper">
            <div className="list__header col-xs-12">
              <h2>{this.state.products.title}</h2>
              <a href={this.state.products.seeAllHref} className="prod-link">{this.state.products.seeAllLabel}</a>
            </div>
            <div className="prodict-list">
              {this.renderProducts()}
            </div>
          </div>
       </section>
    )
  }
}

export default Products;