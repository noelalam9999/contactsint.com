import React from 'react';



import './cards.scss';
// window.React = React
class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title"></h4>
      </header>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="date"></p>
        
        <h4>{this.props.title}</h4>
        
        <p className="body-content">{this.props.text}</p>
        
        <Button />
      </div>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <article className="card">
       <CardHeader image={this.props.image}/>
        <CardBody title={this.props.title} text={this.props.text}/> 
     
        {/* <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
        <CardBody title={'What happened in Thialand?'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/> */}
      </article>
    )
  }
}

// ReactDOM.render(
//   <Card />,
//   document.getElementById('app')
// );

export default Card;