import React, {Component} from 'react';

class App extends Component{
  render(){
    // const greeting = "Hi! tom"
    // const dom = <h1 className= "foo">{greeting}</h1>;
    // return dom;

    // return <input type="text" onClick={() => {console.log("I am clicked")}}/>
    // return <input type="text" onChange={() => {console.log("I am clicked")}}/>

    return(
<React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("I am clicked")}}/>
        </React.Fragment>
    )

  }
}

export default App;
