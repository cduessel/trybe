import React, { Component } from 'react';


const content = [
    {id: 1, item: 'a'},
    {id: 2, item: 'b'},
    {id: 3, item: 'c'},
    {id: 4, item: 'd'},
];

const tab = () => {
    return(
        content.map((objs) => <li>{objs.item}</li>)
    )
}

class Modal extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        showModal: false,
        isDisableButton: false,
      }
    }

//const insideBox = (props) => {}

    render(){
        return(
          
//    <div>
//      <h1>{insideBox}</h1>
//    </div>
      <ol>
        {tab}
      </ol>
        )
    }
}

export default Modal;
