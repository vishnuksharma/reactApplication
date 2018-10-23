import React, { Component, Fragment } from 'react';
import ImageCarousel from '../imagecarousel/index';

import './css/index.scss';

export default class TrendingNow extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (  
      <section className="trending-now-container">
        <h1 className="trending-now-header">Trending now #covergirlmade</h1>
        <article className="carousel-container">
          <ImageCarousel />
        </article>
        <article className="trending-now-footer"></article>
      </section>
    );
  }
}
