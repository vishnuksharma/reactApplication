import React, {Component, Fragment} from 'react';
import Picturefill  from '../../globals/js/picturefill';

import './css/index.scss';

export default class Contenttile extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }
  
  componentDidMount(){

    let ContentTileData = new Promise((resolve, reject) => {
      fetch('/public/json/contentTile.json').then((data) => {
        return data.json();
      }).then((data) =>{
        resolve(data);
      });
    });
    
    ContentTileData.then((data) => {
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

  pictureFillMain(){
    if (this.state.data){
      return <Picturefill data={this.state.data.mainimage} />;
    } else {
      return '';
    }
  }
  render(){

    return (
      <section className="container contenttile spacer-top-bottom">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-12 col-md-offset-0 cardlayout">
          <div className="col-xs-12 col-md-7 content-left">
          {this.pictureFillMain()}
          </div>
          <div className="col-xs-12 col-md-6 col-md-pull-1">
            <div className="content-right col-xs-12">
              <div className="card-head">
              <span className="card-flag">{this.state.data.flagtitle}</span>
              <a className="card-title" href="#">
                <div className="card-content-box">
                  <h2 className="h1">{this.state.data.title}</h2>
                  <p className="card-description">{this.state.data.description}</p>
                </div>
              </a>
              </div>
            </div>
            <div className="col-md-offset-2 col-md-10 col-xs-12 hide-sm hide-xs">
              {this.pictureFill()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
