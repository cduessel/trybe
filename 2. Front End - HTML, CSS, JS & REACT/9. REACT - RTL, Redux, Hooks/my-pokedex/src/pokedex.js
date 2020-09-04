import React from 'react'
import Pokemon from './pokemon'
import pokelist from './data'

//class NextBtn extends React.Component {
  
  //render(){
     //return <button 
      //onClick={ this.HandleClick={nextContador} }
    //  >NEXT</button>
  //}
//}

class Pokedex extends React.Component{
  constructor(props){
    super(props);
    this.state = {index:0}
 };

  render () {
    const nextContador = (state)=> {this.setState({index:state+1})};
    this.props = pokelist[this.state.index];
    return(
      <div>
        <Pokemon name={this.props.name} type={this.props.type} averageWeight={this.props.averageWeight} image={this.props.image}/>
        <button onClick={ this.HandleClick= nextContador }>NEXT</button>
      </div>
      )  
  }
}

export default Pokedex
