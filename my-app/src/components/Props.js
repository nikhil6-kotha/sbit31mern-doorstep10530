import React, { Component } from 'react'

class Props extends Component {
  render() {
    return (
      <div>
    <h1>hi iam {this.props.name} from {this.props.place} welocome to sbit</h1> 
     <p>{this.props.children}</p>
      </div>
    )

  }
}

export default Props
