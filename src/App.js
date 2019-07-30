import React , { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
      persons: [
          { name: 'Juan Carlos', age: 22},
          { name: 'Mariel', age: 22 }
      ],
    };

    switchNameHandler = () => {
        this.state.persons[0].name = 'juanca'
        this.setState({
            persons: [

            ]})
    };

    render() {
        return(
            <div className="App">
                <h1>Hola, soy Juan Carlos aprendiendo React </h1>
                <p>Por el momento parece interesante.</p>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> y me gusta tocar la bateria</Person>
                <Person name={this.state.persons[1].age} age={this.state.persons[1].age}> y soy maestra</Person>
            </div>
        );
    }
}


export default App;
