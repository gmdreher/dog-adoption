import React from 'react';
import {connect} from 'react-redux'
import {getDogs} from '../Actions/index'

class SearchBar extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        breed: ''
      }
  }
  handleOnchange(e){
    return this.setState({breed: e.target.value});
  }
  handleSubmit = (e) => {
      e.preventDefault();
      getDogs(this.state.breed)
  }
  render(){
    return(
        <div className='p-4'>
          <form>
            <input value={this.state.breed} onChange={(e)=> this.handleOnchange(e)} type="text" placeholder="Que raza deseas?" />
            <button onSubmit={(e) => this.handleSubmit(e) }>Buscar</button>
          </form>
        </div>
      ) 
  }
};
function mapDispatchToProps(dispatch){
  return{
    getDogs: breed => dispatch(getDogs(breed))
  }
}

export default connect(mapDispatchToProps, null)(SearchBar)