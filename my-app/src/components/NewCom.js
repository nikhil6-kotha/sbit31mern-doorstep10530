import React, { Component } from 'react'
import BellA from './BellA.jpg';
import BellB from './BellB.jpg';
 class NewCom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message : "Please subscribe to my channel",
       sub : "subscribe"
    }
  }
  styles = {
    fontStyle : "italic",
    color : "purple"
  };  

  ButtonChange =()=>{
    this.setState({message : "please click on the bell icon for more Updates",
                  sub : "Subscribed",
                  imageUrl : BellA
                     
    });
  }
  ImageChange=()=>{
    this.setState({
      
       message : "Thankyou",
        imageUrl : BellB,


    });
  }
  
  render() {
    return (
      <div> 
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
        <p/>
        <img
        style={{width : "60px", height : "60px"}} 
        src={this.state.imageUrl}
        onClick={this.ImageChange}
         alt=''/>
      </div>
    )
  }
}

export default NewCom
