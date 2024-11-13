import React, { useState } from "react";
import "./App.css";
import Data from "./Components/Data";
import List from "./Components/List";


function App() {
  const [people,setpeople] =useState(Data)
  
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today s</h3>
        <List people={people} />
        <button onClick={()=> setpeople([])}>
          clear all
        </button>
       
      </section>
    </main>
  );
}

export default App;
