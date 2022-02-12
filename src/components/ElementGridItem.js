import React from 'react'

export const ElementGridItem = ( {id, title, year, type, url} ) => {

    // console.log({id, title, year, url});

  return (
      <div className="card bg-dark text-white animate__animated animate__fadeIn">
          <img src={ url } alt={ title }/>
              <div className="card-body">
                  <p> { title } </p>
                  <p className="mt-0"> { year } ({ type }) </p>
              </div>
      </div>
  )
}
