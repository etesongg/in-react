import React, { Component } from 'react'

export default class BoxClass extends Component {
    constructor(props){
        super(props);
        this.result ="";
    }
    getResult = () => {
        if(this.props.title === "Computer" && this.props.result !== "Tie" && this.props.result !== ""){
            this.result = this.props.result === "Win"? "Lose": "Win";
        }else{
            this.result = this.props.result;
        }
    }
  render() {
    this.getResult();
    return (
      <div className={`box ${this.result}`}>
        <p>{this.props.title}</p>
        <img className='item-img' src={this.props.item && this.props.item.img}></img>
        <p>{this.result}</p>
      </div>
    )
  }
}
