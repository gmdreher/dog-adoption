import React, { Component } from 'react'
// import  {connect}  from 'react-redux'

class Perro extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>
          {this.props.dogs.name}
        </h1>
        <p>
          {this.props.dogs.breed}
        </p>
      </div>
    )
  }
}
// function mapStateToProps(state){
//   return{
//     dogs: state.dogs
//   }
// }

export default Perro;