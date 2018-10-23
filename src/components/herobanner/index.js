import React, {Component} from 'react';
import Picturefill  from '../../globals/js/picturefill';
import CTA from '../../globals/js/cta';

import './css/index.scss';

export default class Herobanner extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }
  
  componentDidMount(){

    let HeroBanerData = new Promise((resolve, reject) => {
      fetch('/public/json/heroBanner.json').then((data) => {
        return data.json();
      }).then((data) =>{
        resolve(data);
      });
    });
    
    HeroBanerData.then((data) => {
      this.setState({
        data: data
      });
    });

  }

  pictureFill(){
    if (this.state.data){
      return <Picturefill data={this.state.data.picturefill} />;
    } else {
      return '';
    }
  }

  render(){

    return (
      <section className="container herobanner">
        <div className="row">
          <div className="col-xs-12">
            {this.pictureFill()}
            <div className="content col-xs-6">
              <h1 className="large">{this.state.data.title}</h1>
              <p className="descroption">{this.state.data.description}</p>
              <CTA data={this.state.data.cta} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}


