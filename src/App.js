import React , { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
/*
state is a reserved word inside a class which extend from Component and
not in functional components
 */
  const [ personsState, setPersonsState ] = useState({
      persons: [
          { name: 'Juan Carlos', age: 22},
          { name: 'Mariel', age: 22 }
      ]
  });

  const [otherState, setOtherState] = useState('some other state');

  const switchNameHandler = () => {
      setPersonsState({
          persons: [
              { name: 'juanca', age: 23},
              { name: 'miel', age: 22 }
          ]})
  };

        return(
            <div className="App">
                <h1>Hola, soy Juan Carlos aprendiendo React </h1>
                <p>Por el momento parece interesante.</p>
                <button onClick={switchNameHandler}>Switch name</button>
                <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> y me gusta tocar la bateria</Person>
                <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> y soy maestra</Person>
            </div>
        );
};

export default App;
