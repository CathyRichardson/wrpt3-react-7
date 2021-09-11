import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    // const [stateVal, setStateValFunction] = useState(default value here)
    const [userInput, setUserInput] = useState("");
    const [chars, setChars] = useState([]);


    // ******* using object and only updating individual keys
    // const [student, setStudent] = useState({});
    // const setName = (name) => setStudent({ ...student, name })
    // const setAge = (age) => setStudent({ ...student, age })


    const handleInput = (e) => {
        setUserInput(e.target.value)
    }

    const handleSearch = async () => {
        try{
          const { data } = await axios.get(`https://swapi.dev/api/people/?search=${userInput || 'r2'}`);
          setChars(data.results)
        } catch(error){
          console.log(error)
        }

        // *********** .then version of identical implementation ************
        // axios.get(`https://swapi.dev/api/people/?search=${userInput || 'r2'}`)
        // .then(({ data }) => {
        //   setChars(data.results)
        // }).catch((error) => console.log(error))
    }

    //WILL UPDATE DISOPLAYED ARR WHEN USER TYPES (because userInput is changing)
    // useEffect(() => {
    //     handleSearch();
    // }, [userInput])


    // WILL RUN ON MOUNT AND ANY TIME STATE OR PROPS CHANGES
    // useEffect(() => {
    //     console.log('Hit use effect')
    //     handleSearch();
    // })

    // WILL RUN ON MOUNT ONLY
    useEffect(() => {
        console.log('Hit use effect')
        handleSearch();
    }, [])

    // WILL RUN ON MOUNT AND WHEN userInput OR chars CHANGES
    // useEffect(() => {
    //     console.log('Hit use effect')
    //     handleSearch();
    // }, [userInput, chars])

  return (
    <div className="App">
      <input onChange={handleInput}></input>
      <button onClick={handleSearch}>Search</button>
      <ul>
          {chars.map(({ name }) => (
              <li>{name}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
