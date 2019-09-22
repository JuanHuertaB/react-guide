import React , { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
      persons: [
          { name: 'Juan Carlos', age: 22},
          { name: 'Mariel', age: 22 }
      ],
       showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                { name: newName, age: 22},
                { name: 'miel', age: 22 }
            ]})
    };

    togglePersonsHandler(){
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    nameChangedHandler = (event) =>{
        this.setState({
            persons: [
                { name: event.target.value, age: 22},
                { name: 'miel', age: 22 }
            ]})
    };

    render() {

        let persons = null;

        if(this.state.showPersons){
            persons = (
                <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        changed={this.nameChangedHandler}
                    > y me gusta tocar la bateria</Person>
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}> y soy maestra
                    </Person>
                </div>
            )
        }
        return(
            <div className="App">
                <h1>Hola, soy Juan Carlos aprendiendo React </h1>
                <p>Por el momento parece interesante.</p>
                <button onClick={()=>this.togglePersonsHandler()}>Toggle persons</button>
                {persons}
            </div>
        );
    }
}


export default App;
