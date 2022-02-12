import React, { useEffect, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { ElementGridItem } from "./components/ElementGridItem";

import "./App.css";

export function App() {
  const [films, setFilms] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [nombre, setNombre] = useState('');

  const getElemet = async (category) => {
    const url = `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${encodeURI(
      category
    )}&r=json&page=1&rapidapi-key=147c309811msh9fa458b147d91b0p1684adjsn3dfcc182ea79`;
    const resp = await fetch(url);
    const { Search } = await resp.json();

    const data = Search.map((element) => {
      return {
        id: element.imdbID,
        title: element.Title,
        year: element.Year,
        type: element.Type,
        url: element.Poster,
      };
    });
    return data;
  };

  const getData = async () => {
    let tempData1 = await getElemet("avengers");
    let tempData2 = await getElemet("matrix");
    //console.log(tempData1.concat(tempData2));
    setFilms( tempData1.concat(tempData2) );
    setFiltered( tempData1.concat(tempData2) );
    // console.log( filtered );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="text-white animate__animated animate__fadeIn">MDbTest App</h1>
      <div className="container">
        <div className="col-md-auto">
          {
            <AddCategory 
              setNombre={setNombre} 
              films={ films } 
              setFiltered={ setFiltered }
              filtered={ filtered }
              />
          }
        </div>
      </div>
      <hr />
      <ol>
        <div className="card-grid text-white">
          {!films
            ? "... cargando"
            : filtered.map((value, i) => (
                <ElementGridItem key={i} value={value} />
              ))}
        </div>
      </ol>
    </>
  );
}

export default App;
