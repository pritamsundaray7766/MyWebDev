import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;




// function Box (props){
//   return (
//     <div className='box'>
//       <h1 id = 'abc'>{props.heading}</h1>
//       <p>Here you can do anything related to Web Development</p>
//     </div>
//   );
// }



// function App1 (){
//   return(
//     <div className='row'>
//       <div className='col'>
//           <Box heading='First Heading'/>
//       </div>
//       <div>
//           <Box heading='Second Heading'/>
//       </div>
//     </div>
//   );
// }

/*
  Using Arrow function to create a component
  const Box = () => (
    <div className='box'>
    <h1 id = 'abc'>Welcome to The Codex Web</h1>
      <p>Here you can do anything related to Web Development</p>
    </div>
  );
*/

// ReactDOM.render(
//   <App1/>,
//   document.getElementById('react-container')
// );

class Box1 extends React.Component{
  state = { 
    color : "black"
  };

  changeColor(color){
    this.setState({color:color});
  }

  render(){
    return(
      <div className='box1'>
        <h1 className={this.state.color}> {this.props.heading}</h1>
        <p>Here you can do anything related to Web Development</p>
        <button onClick={()=>this.changeColor("red")}> Red </button>
        <button onClick={()=>this.changeColor("yellow")}>Yellow</button>
        <button onClick={()=>this.changeColor("blue")}>Blue</button>
        <button onClick={()=>this.changeColor("green")}>Green</button>
      </div>
    );
  }
};

const App2 = () => {
  return(
    <div className='row'>
      <div className='col'>
          <Box1 heading='First Heading'/>
      </div>
      <div>
          <Box1 heading='Second Heading'/>
      </div>
      <div className='col'>
          <Box1 heading='Third Heading'/>
      </div>
      <div className='col'>
          <Box1 heading='Fourth Heading'/>
      </div>
    </div>
  );
}

ReactDOM.render(
  <App2 />,
  document.getElementById('react-container')
);