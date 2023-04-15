import React, { Component } from 'react'

class FirstClassComp extends Component {
  constructor(){
    super();
    this.state={
      count:0
    }
  }

  componentDidMount(){
    console.log('componentDidMount:when component render first time');
  }
  componentDidUpdate(){
    console.log("component updated");
  }
  componentWillUnmount(){
    console.log("component removed");
  }

  Increment(){
    this.setState({count:this.state.count+1})
  }


  render() {
    return (
      <div>Hello I'm from Class Components.
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.Increment()}}>ClickMe!</button>
        {this.props.data}
      </div>
    )
  }
}

export default FirstClassComp