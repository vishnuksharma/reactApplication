import React, {Component, Fragment} from 'react';

export default class CTA extends Component{
  
  href(){
    if (this.props.data.link){
      return this.props.data.link;
    } else {
      return '';
    }
  }

  target(){
    if (this.props.data.target === 'self'){
      return '_self';
    } else {
      return '_blank';
    }
  }

  text(){
    if (this.props.data.label){
      return this.props.data.label;
    } else {
      return '';
    }
  }

  classnames(){
    if (this.props.data.style === 'primary'){
      return 'btn '+this.props.data.style;
    } else {
      return 'btn primary';
    }
  }


  render(){
    
    if (!this.props.data){
      return '';
    }
    
    return (<a href={this.href()} target={this.target()} className={this.classnames()} > {this.text()} </a>);
  }
}