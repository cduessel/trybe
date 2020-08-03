import React from 'react'
// import data from './data' 

class Pokemon extends React.Component{
  render(){
    const { name, type, averageWeight, image } = this.props;
    return(
      <section className='pokemons'>
         <div>
           <h2> { name } </h2>
           <p> Type:{ type } </p>
           <p> Weight: { averageWeight.value } { averageWeight.measurementUnit } </p>
         </div>
         <img src={image} alt={name}/>
      </section>
    )
  }
}

export default Pokemon
