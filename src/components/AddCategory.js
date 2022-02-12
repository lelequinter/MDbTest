import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setNombre, films, setFiltered, filtered }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim().length > 2) {
      setNombre(inputValue);
      setInputValue("");
    }
    console.log(films);
    const filtrado = films.filter( movies =>
        movies.title.toLowerCase().includes( inputValue.toLowerCase() )
    );
    setFiltered(filtrado);
    console.log(filtrado);
  };

    const ordenAsc = () => {
        console.log(filtered);
    }

    const ordenDes = () => {
        // console.log('down');
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <div className="btn-group animate__animated animate__fadeIn animate__delay-0.5s" role="group" aria-label="Basic example">
            <button onClick={ ordenAsc } type="button" className="btn btn-secondary"> Orden ↗ </button>
            <button onClick={ ordenDes } type="button" className="btn btn-secondary"> Orden ↘ </button>
        </div>
    </form>
  );
};

AddCategory.propTypes = {
  setNombre: PropTypes.func.isRequired,
};
