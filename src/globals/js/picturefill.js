import React, {Component, Fragment} from 'react';
import Picture from 'react-picture-component';

export default class Picturefill extends Component{
  images(){
    
    let paths = new Object();
    if (!this.props.data){
      return paths;
    }
    if (this.props.data.mobile){
      paths[768] = this.props.data.mobile;
    }

    if (this.props.data.table){
      paths[992] = this.props.data.tablet;
    }

    if (this.props.data.desktop){
      paths[1024] = this.props.data.desktop;
    }
    
    return paths;
  }

  render(){
    return (<Picture images={this.images()} />);
  }  
}