import React from 'react'

export const ElementGridItem = ( {value} ) => {

    // console.log(value);

  return (
      <div className="card bg-dark text-white animate__animated animate__fadeIn">
          <img src={ value.url } alt={ value.title }/>
              <div className="card-body">
                  <p> { value.title } </p>
                  <p className="mt-0"> { value.year } ({ value.type }) </p>
              </div>
      </div>
  )
}
