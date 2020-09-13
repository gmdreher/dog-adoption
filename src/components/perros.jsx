import React, { Component } from 'react'
import Perro from './perro'
import  {connect}  from 'react-redux'

class Perros extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props.dogs)
    return (
      <div>
        <h2>Perros en adopción:</h2>
        <ul>
          {this.props.dogs.map(dog => 
            <li>             
              <Perro />
              {/* <button onClick={() => this.props.removeMovieFavorite({title: movie.Title, id: movie.id})}>Adoptar</button> */}
            </li>
          )}
        </ul> 
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    dogs: state.dogs
  }
}

export default connect(mapStateToProps, null)(Perros)

