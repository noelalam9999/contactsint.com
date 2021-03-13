import React from "react";

import "./cards.scss";
// window.React = React
class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = {
      backgroundImage: "url(" + image + ")",
    };
    return (
      <header style={style} id={image} className="card-header">
        <h4 className="card-header--title"></h4>
      </header>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    );
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="date"></p>

        <h4 className="uni-title">{this.props.title}</h4>

        <div className="cost-li">
<ul className="list" >
        <li>UG Fee : {this.props.ugFee}</li>
        <li>PG Fee : {this.props.pgFee}</li>
        <li>diploma Fee : {this.props.diplomaFee}</li>
</ul>
                </div>
   <div className="instabox-foot">     
       <ul className="list sems">
       <li>Semester Start :{this.props.semesterStart1}</li>
        <li>Semester Start :{this.props.semesterStart2}</li>
         </ul>
        
        <p>Accomodation cost : {this.props.AcommodationCost}</p>
        <p>Ranking : {this.props.ranking}</p>
        <p>{this.props.text}</p>
    </div>
        <Button />
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader image={this.props.image} />
        <CardBody
          title={this.props.title}
          ugFee={this.props.ugFee}
          pgFee={this.props.pgFee}
          diplomaFee={this.props.diplomaFee}
          semesterStart1={this.props.semesterStart1}
          semesterStart2={this.props.semesterStart2}
          AcommodationCost={this.props.AcommodationCost}
          ranking={this.props.ranking}
        />

        {/* <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'}/>
        <CardBody title={'What happened in Thialand?'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/> */}
      </article>
    );
  }
}

// ReactDOM.render(
//   <Card />,
//   document.getElementById('app')
// );

export default Card;
