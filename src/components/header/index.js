import React, {Component} from 'react';
import Contentfull from '../../globals/js/contentful';

import './css/index.scss';

export default class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    const headerData = new Contentfull();
    let MenuItems = headerData.getdata('header');
    
    MenuItems.then((entries) =>{
      this.setState({
        data: entries.items[0].fields.header
      });
    });
   
  }

  subnav(items){
    console.log(items);

    if (items){
      let HTML  = items.map((item, i) => {
        return <li key={i}>
          <a href={item.link} title={item.title}>{item.label}</a>
        </li>;
      });
  
      return HTML;
    }

    return '';
    
  }

  ischevron(items){
    
    if (items){
      return <i className="glyphicon chevron"></i>;
    }

    return '';
  }

  renderMenu(){
    let HTML  = this.state.data.map((item, i) => {
      return <li key={i}>
        <a href={item.link} title={item.title}>{item.label}</a>
        {this.ischevron(item.subnav)}
        <ul className="subnav">
          {this.subnav(item.subnav)}
        </ul>
      </li>;
    });

    return HTML;
  }

  render(){
    return (
      <header className="header">
        <div className="container">
          <div className="center logo">
            <h2>Mekeup & Beauty</h2>
            <p className="legal">I am what i make up</p>
          </div>
          <ul className="container navigation">
            {this.renderMenu()}
          </ul>
        </div>
      </header>
    );
  }
}

{

}
