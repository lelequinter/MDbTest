import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { ElementGrid } from './components/ElementGrid';
import './App.css';


export function App() {

const [ categories, setCategories] = useState(['avengers']);



  return (
    <>
        <h1 className="text-white">MDbTest App</h1>
        <AddCategory setCategories= { setCategories }/>
        <hr/>

        <ol>
          {
            categories.map( category => ( 
            <ElementGrid 
              key={ category }
              category={ category }
              /> 
            ))
          }
        </ol>

    </>
  );
}

export default App;
