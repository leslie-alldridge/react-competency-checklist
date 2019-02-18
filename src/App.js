import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    beginner: false,
    intermediate: false,
    advanced: false
  }

  toggleClick = () => {
    this.setState({
      beginner: !this.state.beginner
    })
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>Welcome to my React competency checklist.<br/> Click a heading below to get started.</h4>
          <h2 id="head" onClick={this.toggleClick}>Beginner Projects</h2>
         {this.state.beginner &&  <ol id="list">
              <li >Use "Create React App" to quickly create React applications</li>
            <li>Create your first component that prints "Hello World"</li>
            <li>Add state to your Hello World component. When the user clicks on the text, hide it.</li>
            <li>Pass information to another component as props. For example your Hello World component can render a child component which prints Goodbye world via "props.message".</li>
            <li>Draw a diagram showing the data flow within your application. Both within the Hello World component and the data going out via props.</li>
          </ol>}
          <p>Please try to do all of these without looking at the answers.</p>
          <p id="answer">I want answers! (click here)</p>
        </header>
      </div>
    );
  }
}

export default App;
