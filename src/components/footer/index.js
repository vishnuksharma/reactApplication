import React, {Component, Fragment} from 'react';
import './css/index.scss';

export default class Header extends Component{
  constructor(props){
    super(props);
    this.state ={
      data: []
    };
  }
  
  componentDidMount(){
    let headerData = new Promise((resolve, reject) => {
      fetch('/public/json/footer.json').then((data) => {
        return data.json();
      }).then((data) =>{
        resolve(data);
      });
    });

    headerData.then((data) => {
      this.setState({
        data: data
      });
    });
  }

  renderMenu(){
    let HTML  = this.state.data.map((item, i) => {
      
      return <li key={i}>
        <a href={item.link} title={item.title}>{item.label}</a>
      </li>;

    });

    return HTML;
  }

  render(){
    return (
      <Fragment>
        <footer className="footer">
          <div className="container">
            <ul className="container">
              {this.renderMenu()}
            </ul>
          </div>
        </footer>
      </Fragment>
    );
  }
}

{

}
